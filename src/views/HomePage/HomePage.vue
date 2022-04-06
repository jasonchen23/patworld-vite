<template>
    <div class="row bg">
        <div class="d-flex align-content-end flex-wrap">
          <div class="col pb-4">
            <router-link to="/">
            <p>首頁</p>
              <img src="../HomePage/img/tatemono_myhome.png">
            </router-link>
          </div>
          <div class="col pb-4">
            <router-link to="/adopt">
            <p>領養寵物</p>
              <img src="../HomePage/img/tatemono_myhome_gren.png">
            </router-link>
          </div>
          <div class="col pb-4">
            <router-link to="/donate">
              <p>捐贈飼料</p>
              <img src="../HomePage/img/tatemono_myhome_orange.png">
            </router-link>
          </div>
          <div class="col pb-4">
            <router-link to="/user">
              <p>會員中心</p>
              <img src="../HomePage/img/tatemono_myhome_purple.png">
            </router-link>
          </div>
          <div class="col pb-4">
            <router-link to="/member">
              <p>開發人員介紹</p>
              <img src="../HomePage/img/tatemono_myhome_red.png">
            </router-link>
          </div>
        </div>
    </div>
    
</template>

<script>

</script>

<style scoped>

.bg{
  background-image: url("../HomePage/img/background.gif");

  /* Full height */
  height: 100vh;
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

img{
  width: 60%;
}

a, p{
  color: #802300;
  text-decoration:none;
  font-family: jf-openhuninn;
  }

img:hover {
  transform: scale(1.2);
}
</style>