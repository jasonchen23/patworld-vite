<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a><img src="../assets/icon/logo.png" ></a>
    <span class="fw-bold mx-3">PetWorld</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-3">
                <li class="nav-item px-1">
                    <router-link to="/" class="text-reset fw-bold">HOME</router-link>
                </li>
                <li class="nav-item px-1">
                    <router-link to="/adopt" class="text-reset fw-bold"><a>ADOPT</a></router-link>
                </li>
                <li class="nav-item px-1">
                    <router-link to="/donate" class="text-reset fw-bold"><a>DONATE</a></router-link>
                </li>
                <li class="nav-item px-1">
                    <router-link to="/member" class="text-reset fw-bold"><a>MEMBER</a></router-link>
                </li>
                <li class="nav-item px-1">
                    <router-link to="/develop" class="text-reset fw-bold"><a>DEVELOP</a></router-link>
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
    background-color: #FEFEFF;
    color: #802300;
    font-family: jf-openhuninn;
    }

    a{
    color: #802300;
    text-decoration:none;
    font-family: jf-openhuninn;
    }
</style>