<template>
  <div class="background">
    <div class="container px-5">
      <div class="row pt-5 justify-content-center">
        <button
          class="col-6"
          :class="{ active: isregister }"
          @click="changeToregister"
        >
          註冊會員
        </button>
        <button
          class="col-6"
          :class="{ active: islogin }"
          @click="changeTologin"
        >
          會員登入
        </button>
      </div>
      <div class="row pb-5">
        <div class="col-12 m-auto panel">
          <Login v-if="islogin" />
          <Register v-if="isregister" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import login from '@/components/login.vue';
import register from '@/components/register.vue';

export default {
  components: {
    login,
    register,
  },
  data() {
    return {
      islogin: true,
      isregister: false,
    };
  },
  methods: {
    changeToSignup() {
      this.islogin = false;
      this.isregister = true;
    },
    changeToLogin() {
      this.islogin = true;
      this.isregister = false;
    },
  },
};
</script>