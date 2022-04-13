<template>
<div class="container px-4">
<Form class="d-grid p-4 text-end" @submit="onSubmit">
    <Field name="account" type="text" :rules="isRequired" class="form-control" placeholder="帳號" v-model="account" disabled="disabled" />
    <ErrorMessage name="account" class="text-danger" />
    <!-- <div v-if="isUserExist" class="text-danger">
        此帳號已有人使用，請設定其他帳號
    </div> -->
    <!-- <div class="row">
        <div class="col-md-6">
            <Field name="password" type="password" :rules="validatePassword" class="form-control mt-3" placeholder="密碼" v-model="password" />
            <div class="d-flex justify-content-between">
                <small class="ps-1 fw-light">至少8個字元</small>
                <ErrorMessage name="password" class="text-danger" />
            </div>
        </div>
        <div class="col-md-6">
            <Field name="passwordVerify" type="password" :rules="validatePasswordVerify" class="form-control mt-3" placeholder="再次輸入密碼" />
            <ErrorMessage name="passwordVerify" class="text-danger" />
        </div>
    </div> -->
    <Field name="phone" type="number" :rules="isRequired" class="form-control mt-3" placeholder="行動電話" v-model="phone" />
    <ErrorMessage name="phone" class="text-danger" />
    <Field name="address" type="text" :rules="isRequired" class="form-control mt-3" placeholder="地址" v-model="address" />
    <ErrorMessage name="address" class="text-danger" />
    <Field name="job" as="select" :rules="isRequired" class="form-select mt-3" v-model="job">
        <option value="" disabled>職業</option>
        <option value="engineer">工程師</option>
        <option value="student">學生</option>
        <option value="others">其他</option>
    </Field>
    <ErrorMessage name="job" class="text-danger" />
    <Field name="email" type="email" :rules="validateEmail" class="form-control mt-3" placeholder="Email" v-model="email" />
    <ErrorMessage name="email" class="text-danger" />
    <Field name="age" type="number" :rules="isRequired" class="form-control mt-3" placeholder="年紀" v-model="age" />
    <ErrorMessage name="age" class="text-danger" />
    <!-- <div class="border-top mt-4 py-3 text-start">
      <input type="checkbox" v-model="agreeContract" />我同意<a href="#"
        >網站服務條款及隱私設定</a
      >
    </div> -->
    <button class="btn btn-primary mt-3" type="submit">
        修改帳戶資料
    </button>
</Form>
</div>
</template>

<script>
import {
    Field,
    Form,
    ErrorMessage
} from 'vee-validate';


export default {
    components: {
        Field,
        Form,
        ErrorMessage
    },
    data() {
        return {
            // password: '',
            account: this.$store.state.userId,
            phone:'',
            email:'',
            address:'',
            job:'',
            age:'',
            isUserExist: false,
        };
    },
    inject: ['changePanel'],
    watch: {
        account: {
            handler() {
                this.isUserExist = false;
            },
        },
    },
    computed: {
    },
    methods: {
        onSubmit(values) {
            this.$axios
                .post('/api/users/update', {
                    userId: values.account,
                    email: values.email,
                    phone: values.phone,
                    address: values.address,
                    job: values.job,
                    age: values.age,
                })
                .then(() => {
                    this.$swal('修改成功')
                })
                .catch((error) => {
                    if (error.response.data.message === 'user already exists')
                        this.isUserExist = true;
                });
        },
        isRequired(value) {
            return value ? true : '此欄位必填';
        },
        validateEmail(value) {
            if (!value) {
                return '此欄位必填';
            }
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                return 'Email格式不符';
            }
            return true;
        }
    },
};
</script>

<style scoped>
a {
    text-decoration: none;
}

button {
    font-weight: bold;
    background-image: linear-gradient(to right, rgb(1 134 218), rgb(182 49 167));
}
</style>
