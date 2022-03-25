<template>
  <!-- <Navbar /> -->
  <div class="bg">
  <div class="mx-5 d-flex">
    <div class="img">
      <router-link to="/adopt" class="home">
        <img src="../HomePage/img/tatemono_myhome.png" alt="">
      </router-link>
    </div>
    <div class="img">
      <router-link to="/donate" class="home">
        <img src="../HomePage/img/tatemono_myhome.png" alt="">
      </router-link>
    </div>
        <div class="img">
      <router-link to="/donate" class="home">
        <img src="../HomePage/img/tatemono_myhome.png" alt="">
      </router-link>
    </div>
        <div class="img">
      <router-link to="/donate" class="home">
        <img src="../HomePage/img/tatemono_myhome.png" alt="">
      </router-link>
    </div>
        <div class="img">
      <router-link to="/donate" class="home">
        <img src="../HomePage/img/tatemono_myhome.png" alt="">
      </router-link>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavbarBox.vue';
export default {

}
</script>

<style scoped>
.bg{
    background-image: url('../HomePage/img/bg_chiheisen_green.jpg');

  /* Full height */
  height: 100vh;
  width: 100%;
  

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
}
.img {
  height: 200px;
  width: 300px;
  text-align: center;
  line-height:200px;
}
.img img{
  margin-top:150%;
  width: 100%;
  height: 150px;
  vertical-align: middle;
  transform:scale(1);
}
div img:hover{
  transform:scale(1.2);
}
</style>