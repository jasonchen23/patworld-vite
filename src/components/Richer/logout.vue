<template>
    <div class="container m-5">
        <h3>您好，請問您要登出嗎?</h3>
        <p>{{user.displayName}}</p>
        <P>{{user.email}}</P>
         <button 
        type="submit" 
        class="btn btn-dark btn-lg btn-block"
        @click="logOut()">
            登出
        </button>
    </div>
</template>
<script>
import { databaseAuth } from "@/config/databaseConfig.js";

export default {
    data() {
        return{
            user: null
        };
    },
    created() {
        databaseAuth.onAuthStateChanged((user) => {
            if (user) {
                this.user = user;
            } else {
                this.user = null;
            }
        });
    },
    methods: {
        logOut() {
            databaseAuth.signOut().then(() => {
                databaseAuth.onAuthStateChanged(() => {
                    this.$router.push('/login')
                })
            })
        }
    }
};
</script>
