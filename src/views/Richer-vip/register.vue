<template>
    <div class="container m-5">
        <form @submit.prevent="userRegistration">
            <h3>註冊</h3>
            <div class="from-group">
                <label>帳號</label>
                <input 
                type="text"
                class="form-control form-control-lg"
                v-model="user.account"
                />
            </div>

            <div class="form-group">
                <label>信箱</label>
                <input 
                type="email"
                class="form-control form-control-lg"
                v-model="user.email"
                />
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">註冊        
            </button>
            <p class="forgot-password text-right">已經註冊過了?
            <router-link to="/login">登入</router-link>  
            </p>  
        </form>
    </div>
</template>

<script>
import register from '@/components/register.vue';

export default {
    components: {
        register,
    },



}

</script>