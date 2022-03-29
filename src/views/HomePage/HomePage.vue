<template>
  <!-- <Navbar /> -->
  <!-- <div class="bg"> -->
  <div class="mx-5 d-flex row">
      <router-link to="/adopt" class="img col">
        <img src="../HomePage/img/tatemono_myhome.png" alt="">
      </router-link>
    <div class="img p-0">
      <p class="p">Lorem ipsum dolor sit amet.</p>
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
  <div class="box"></div>
  <img src="../HomePage/img/bg_chiheisen_green.jpg" alt="" class="bg">
  <!-- </div> -->
</template>

<script>
import Navbar from '@/components/NavbarBox.vue';
export default {

};

</script>
<script setup>
$(".p").hide();

// $(".home").mouseenter(
//   function fadein() {
//     $("p").fadeIn("slow");
//   }
// );
// $(".home").mouseleave(
//   function fadeout() {
//     $("p").fadeOut("slow");
//   }
// );
</script>

<style scoped>
/* .bg{
    background-image: url('../HomePage/img/bg_chiheisen_green.jpg');

  Full height
  height: 100vh;
  width: 100%;
  

  Center and scale the image nicely
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
} */
.box{
  width: 100px;
  height: 100px;
  background-color: #000;
  position: relative;
  z-index: 10;
}
.bg{
  position: relative;
  z-index: -1;
  height: 100vh;
}
.img {
  height: 200px;
  width: 300px;
  text-align: center;
  line-height:200px;
}
.img img{
  /* margin-top:150%; */
  width: 100%;
  height: 150px;
  vertical-align: middle;
  transform:scale(1);
}
div img:hover{
  transform:scale(1.2);
}
.row{
  margin:0 !important;
  position: relative;
  z-index: 10;
}
</style>