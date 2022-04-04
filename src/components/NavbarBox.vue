<template>
  <nav class="container" id="nav">
        <router-link to="/">Home</router-link> ||
        <router-link to="/user"><a>login</a></router-link> || 
        <router-link to="/adopt"><a>ADOPT</a></router-link> || 
        <!-- <router-link to="/stray"><a>STRAY</a></router-link> ||  -->
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
        /* margin-top: -5%; */
    }
    #nav a{
        font-weight: bold;
        color: #2c3e50;
    }
    #nav a.router-link-exact-active{
        color: #42b983;
    }
</style>