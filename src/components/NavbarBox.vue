<template>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
            <a href="#" class="navbar-brand">
            <img src="../assets/icon/logo.png" alt="#"></a>
            <span class="">PetWorld</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-3">
        <li class="nav-item px-1">
            <router-link to="/" class="text-reset">HOME</router-link>
        </li>
        <li class="nav-item px-1">
            <router-link to="/vip" class="text-reset"><a>VIP</a></router-link>
        </li>
        <li class="nav-item px-1">
            <router-link to="/adopt" class="text-reset"><a>ADOPT</a></router-link>
        </li>
        <li class="nav-item px-1">
            <router-link to="/stray" class="text-reset"><a>STRAY</a></router-link>
        </li>
        <li class="nav-item px-1">
            <router-link to="/donate" class="text-reset"><a>DONATE</a></router-link>
        </li>
        <li class="nav-item px-1">
            <router-link to="/member" class="text-reset"><a>MEMBER</a></router-link>
        </li>

      </ul>
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
    text-decoration:none;
    }
</style>