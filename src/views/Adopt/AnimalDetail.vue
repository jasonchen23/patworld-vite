<template>
  <div class="body">
    <Navbar />
    <div class="container">
       <Card />
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
import Card from '@/components/AnimalDetailCard.vue'
export default {
  components: {
    Navbar,
    Card,
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
}
.detail {
  display: flex;
  justify-content: center;
  margin-top: 5vh;
}
.animalInfo {
  text-align: left;
  margin-top: 1%;
}
.animalImg {
  max-width: 100%;
  max-height: 100%;
}
.animalImg img {
  object-fit: contain;
  max-width: 100%;
  max-height: 90%;
  box-shadow: rgba(5, 5, 5, 5) 0px 4px 12px;
  border-radius: 10px 10px 10px 10px / 10px 10px 10px 10px;
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