<template>
  <nav class="container" id="nav">
        <router-link to="/vip"><a>VIP</a></router-link> || 
        <router-link to="/shop"><a>SHOP</a></router-link> || 
        <router-link to="/donate"><a>DONATE</a></router-link> || 
        <router-link to="/member"><a>MEMBER</a></router-link> ||
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
    #nav{
        padding:30px;
        text-align: center;
        background: beige;
    }
    #nav a{
        font-weight: bold;
        color: #2c3e50;
    }
    #nav a.router-link-exact-active{
        color: #42b983;
    }
</style>