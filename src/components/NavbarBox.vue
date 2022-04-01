<template>
    <nav class="navbar">
        <div class="countainer-fluid">
            <a href="#" class="navbar-brand">
            <img src="./logo.png" alt="#"></a>
            <span class="">PetWorld</span>
            <div class="navbar-text">
            <router-link to="/">Home</router-link> ||
            <router-link to="/vip"><a>VIP</a></router-link> || 
            <router-link to="/adopt"><a>ADOPT</a></router-link> || 
            <router-link to="/stray"><a>STRAY</a></router-link> || 
            <router-link to="/donate"><a>DONATE</a></router-link> || 
            <router-link to="/member"><a>MEMBER</a></router-link> ||
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
    nav{
    background-color: #F7F2E5;
    color: #333;
    }

    a{
    color: #333;
    }
</style>