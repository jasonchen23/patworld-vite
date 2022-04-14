<template>

    <div class="row bg">
        <div></div>
        <h1 class="pt-5 fw-bold display-1">Pet World</h1>
        <div class="d-flex align-content-end flex-wrap">
          <div class="col pb-4 homeTooltip">
            <router-link to="/3dindex">
              <p class="d-block d-sm-block d-md-block d-xl-none">首頁</p>
              <p class="tooltiptext">首頁</p>
              <img src="../HomePage/img/tatemono_myhome.png">
            </router-link>
          </div>
          <div class="col pb-4 homeTooltip">
            <router-link to="/adopt">
              <p class="d-block d-sm-block d-md-block d-xl-none">領養寵物</p>
              <p class="tooltiptext">領養寵物</p>
              <img src="../HomePage/img/tatemono_myhome_gren.png">
            </router-link>
          </div>
          <div class="col pb-4 homeTooltip">
            <router-link to="/donate">
              <p class="d-block d-sm-block d-md-block d-xl-none">捐贈飼料</p>
              <p class="tooltiptext">捐贈飼料</p>
              <img src="../HomePage/img/tatemono_myhome_orange.png">
            </router-link>
          </div>
          <div class="col pb-4 homeTooltip">
            <router-link to="/member">
            <p class="d-block d-sm-block d-md-block d-xl-none">會員中心</p>
            <p class="tooltiptext">會員中心</p>
              <img src="../HomePage/img/tatemono_myhome_purple.png">
            </router-link>
          </div>
          <div class="col pb-4 homeTooltip">
            <router-link to="/develop">
              <p class="d-block d-sm-block d-md-block d-xl-none">開發人員介紹</p>
              <p class="tooltiptext">開發人員介紹</p>
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
  background-repeat: repeat-x;
  background-size: cover;
  background-position: left bottom;
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

/* .ui-tooltip {
  padding: 10px 20px;
  color: white;
  border-radius: 20px;
  font: bold 14px "jf-openhuninn",;
  text-transform: uppercase;
  box-shadow: 0 0 7px black;
} */

.homeTooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted #802300;
}

.homeTooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #FFF;
    color: #802300;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    
    /* 定位 */
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
}
.homeTooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #FFF transparent transparent transparent;
}

.homeTooltip:hover .tooltiptext {
    visibility: visible;
}

  
</style>