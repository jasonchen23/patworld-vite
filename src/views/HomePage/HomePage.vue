<template>
  <!-- <Navbar /> -->
  <!-- <Button v-bind="button"/> -->
  <div class="bg">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>PET WORLD</h1>
        </div>
      </div>
    </div>
    <div class="menu container">
      <div class="row">
        <div class="box row col px-3 d-flex align-items-end">
          <p id="p0">首頁</p>
          <router-link to="/" class="img ">
            <img src="../HomePage/img/tatemono_myhome.png" id="img0">
          </router-link>
        </div>
        <div class="box row col px-3 d-flex align-items-end">
          <p id="p1">領養寵物</p>
          <router-link to="/adopt" class="img ">
            <img src="../HomePage/img/tatemono_myhome.png" id="img1">
          </router-link>
        </div>
        <div class="box row col px-3 d-flex align-items-end">
          <p id="p2">捐贈飼料</p>
          <router-link to="/donate" class="img ">
            <img src="../HomePage/img/tatemono_myhome.png" id="img2">
          </router-link>
        </div>
        <div class="box row col px-3 d-flex align-items-end">
          <p id="p3">會員中心</p>
          <router-link to="/user" class="img ">
            <img src="../HomePage/img/tatemono_myhome.png" id="img3">
          </router-link>
        </div>
        <div class="box row col px-3 d-flex align-items-end">
          <p id="p4">開發人員介紹</p>
          <router-link to="/member" class="img ">
            <img src="../HomePage/img/tatemono_myhome.png" id="img4">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    $(".img").each(function (index) {
      console.log("#p" + index + "");
      $("#p" + index + "").hide();
      $("#img" + index + "").mouseenter(function fadin() {
        $("#p" + index + "").fadeIn("slow");
      });
      $("#img" + index + "").mouseleave(function fadout() {
        $("#p" + index + "").fadeOut("slow");
      });
    });
  },
  data() {
    return {
      // button:[
      //   {link:1,
      //     text:'home'
      //   }
      // ]
    };
  },
};
</script>

<style scoped>
* {
  position: relative;
}
.bg {
  background-image: url("../HomePage/img/bg_chiheisen_green.jpg");

  /* Full height */
  height: 100vh;
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.img {
  padding: 0 !important;
  /* text-align: center;
  line-height: 200px; */
}
img {
  /* margin-top: 300px; */
  width: 100%;
  height: 150px;
  /* vertical-align: middle;
  transform: scale(1); */
}
.icon img:hover {
  transform: scale(1.2);
}
.row {
  margin: 0 !important;
  position: relative;
  z-index: 10;
}

.menu {
  top: 50%;
  transform: translateY(-107%);
}

.box {
  height: 30vh;
}
a {
  height: 150px;
  width: 100%;
  bottom: 0 !important;
  /* top: 100%; */
  /* transform: translateY(-100%); */
}
</style>