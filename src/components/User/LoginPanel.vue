<template>
  <div class="d-grid gap-2 p-4 border-bottom">
    <GoogleBtn action="登入" />
  </div>
  <div class="pt-4 text-center">
   <span> 會員中心 </span>
  </div>
  <Form class="d-grid p-4 text-end" @submit="onSubmit">
    <Field
      name="account"
      type="text"
      :rules="isRequired"
      class="form-control"
      placeholder="帳號"
      @keydown="cleanError"
    />
    <ErrorMessage name="account" class="text-danger" />
    <Field
      name="password"
      type="password"
      :rules="isRequired"
      class="form-control mt-3"
      placeholder="密碼"
      @keydown="cleanError"
    />
    <ErrorMessage name="password" class="text-danger" />
    <button class="btn btn-warning mt-3" type="submit">登入</button>
  </Form>
  <div class="text-danger text-center">{{ loginError }}</div>
  <div class="pb-4 text-center">
    <a href="#" class="link-dark">忘記密碼?</a>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import GoogleBtn from '@/components/User/GoogleBtn.vue';

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
    GoogleBtn,
  },
  data() {
    return {
      loginError: '',
    };
  },
  inject: ['prevPath'],
  methods: {
    onSubmit(values) {
      this.$axios
        .post('/api/users/login', {
          account: values.account,
          password: values.password,
        })
        .then((response) => {
          this.$store.dispatch('setLogin', response.data.data.userName);
          console.log("login success")
          //導回上一頁
          this.$router.push({ path: '/member/center' });
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            this.loginError = '帳號或密碼錯誤，請重新輸入';
          }
        });
    },
    isRequired(value) {
      return value ? true : '此欄位必填';
    },
    cleanError() {
      this.loginError = '';
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

button {
  font-weight: bold;
  /* background-image: linear-gradient(to right, rgb(1 134 218), rgb(182 49 167)); */
}
</style>
