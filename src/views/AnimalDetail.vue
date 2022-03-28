<template>
  <div class="body">
    <Navbar />
    <div class="container">
      <div class="row detail">
        <!-- 流浪動物照片 -->
        <div class="animalImg col-lg-6">
          <img
            src="https://asms.coa.gov.tw/amlapp/upload/pic/b52f8716-c482-40ff-826b-926312e92d63_org.jpg"
            alt
          />
        </div>
        <!-- 資訊 -->
        <div class="animalInfo col-lg-6">
          <h1>傑森</h1>
          <ul>
            <li>種類：狗狗</li>
            <li>品種：拉布拉多</li>
            <li>性別：男性</li>
            <li>位於：新北市</li>
            <li>收容所：劉媽媽動物之家</li>
            <li>收容日期：2022/03/22</li>
          </ul>
        </div>
      </div>
      <div class="footer d-flex align-items-end">
        <img src="./vuesImages/info1.svg" alt="">
        <img src="./vuesImages/info2.svg" alt="">
        <router-link to="/notice" style="text-decoration:none;">
        <input type="button" value="我想領養！" class="adoptButton d-flex align-items-end">
      </router-link>
      <img src="./vuesImages/info3.svg" alt="">
        <img src="./vuesImages/info4.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavbarBox.vue'
export default {
  components: {
    Navbar,
  },
}
</script>

<style scoped>
@font-face {
  font-family: Cubic_11;
  src: url("@/vuesImages/Cubic_11.woff") format("woff");
}

.body {
  /* font-family: "Cubic_11"; */
  height: 100%;
  /* background: #ebc79c; */
  margin-top: -8vh;
}
.detail {
  display: flex;
  justify-content: center;
  margin-top: 5vh;
}
.animalInfo {
  text-align: left;
}
.animalImg {
  max-width: 100%;
  max-height: 100%;
}
.animalImg img {
  object-fit: contain;
  max-width: 100%;
  max-height: 90%;
}
li {
  font-size: 2vw;
}
.adoptButton {
    align-items: center;
    appearance: none;
    background-color: #fcfcfd;
    border-radius: 4px;
    border-width: 0;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #36395a;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono", monospace;
    height: 10vh;
    width: 20vw;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow 0.15s, transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 3vw;
    /* margin-left: -7vw; */
    /* margin-right: -200vw; */
}

.adoptButton:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(140, 136, 148, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
}

.adoptButton:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
}

.adoptButton:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
}
.footer{
  display: flex;
  justify-content: space-around;
}
.footer img{
  width: 15%;
}
</style>