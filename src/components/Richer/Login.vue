<template>
    <div class="container m-5">
        <form @submit.prevent="userLogin">
            <h3>登入</h3>

            <div class="form-group">
                <label>帳號</label>
                <input type="text"
                class="form-control form-control-lg"
                v-model="user.account"
                />
            </div>
            <div class="form-group">
                <label>密碼</label>
                <input type="password"
                class="form-control form-control-lg"
                v-model="user.password"
                />
            </div> 
<button type="submit" class="btn btn-dark btn-lg btn-block">登入</button>
      <button class="btn btn-dark btn-lg btn-block">
        <router-link to="/register">
          註冊
        </router-link>
      </button>
<p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">忘記密碼?</router-link>
      </p>
        </form>
    </div>
</template>

<script>
import { databaseAuth } from '@/config/databaseConfig.js';

export default {
    data() {
        return{
            user:{
                account:"",
                email:"",
                password:"",
            },
        };
    },
    methods: {
        userLogin() {
            databaseAuth.signInWithEmailAndPassword(this.user.email, this.user.password).then(() => {
                this.$router.push("/admin");
            })
            .catch((error) => {
                alert(error.message);
            });
        },
    },
};
</script>
