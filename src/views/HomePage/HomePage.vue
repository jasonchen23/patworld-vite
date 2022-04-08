<template>
    <div class="row bg">
        <div></div>
        <h1 class="pt-5 fw-bold display-1">Pet World</h1>
        <div class="d-flex align-content-end flex-wrap">
          <div>
            <img src="" alt="">
          </div>
          <div class="col pb-4">
            <router-link to="/" data-bs-toggle="tooltip" data-bs-placement="top" title="我是提示内容!">
              <img src="../HomePage/img/tatemono_myhome.png">
            </router-link>
          </div>
          <div class="col pb-4">
            <router-link to="/adopt" title="領養寵物" data-toggle="tooltip" >
              <img src="../HomePage/img/tatemono_myhome_gren.png">
            </router-link>
          </div>
          <div class="col pb-4">
            <router-link to="/donate" title="捐贈飼料" data-toggle="tooltip">
              <img src="../HomePage/img/tatemono_myhome_orange.png">
            </router-link>
          </div>
          <div class="col pb-4">
            <router-link to="/user" title="會員中心" data-toggle="tooltip" >
              <img src="../HomePage/img/tatemono_myhome_purple.png">
            </router-link>
          </div>
          <div class="col pb-4">
            <router-link to="/member" title="開發人員介紹" data-toggle="tooltip" >
              <img src="../HomePage/img/tatemono_myhome_red.png">
            </router-link>
          </div>
        </div>
    </div>
    
</template>

<script>
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
</script>

<style scoped>

.bg{
  background-image: url("../HomePage/img/background.gif");

  /* Full height */
  height: 100vh;
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: repeat-x;
  background-size: cover;
}

img{
  width: 60%;
}

h1, a, p{
  color: #802300;
  text-decoration:none;
  font-family: jf-openhuninn;
  }

img:hover {
  transform: scale(1.2);
}

.ui-tooltip {
  padding: 10px 20px;
  color: white;
  border-radius: 20px;
  font: bold 14px "jf-openhuninn",;
  text-transform: uppercase;
  box-shadow: 0 0 7px black;
}


  
</style>