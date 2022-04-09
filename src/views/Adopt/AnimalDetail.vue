<template>
  <div>
    <Navbar />
    <div class="container">
       <div class="row detail">
      <!-- 流浪動物照片 -->
      <div class="animalImg col-lg-6">
        <img v-bind:src="animaldetail.album_file">
      </div>
      <!-- 資訊 -->
      <div class="animalInfo col-lg-6">
        <h1>流浪動物編號： {{ animaldetail.animal_id }}</h1>
        <br>
        <ul>
          <li>種類： {{ animaldetail.animal_kind }}</li>
          <li>品種： {{ animaldetail.animal_Variety }}</li>
          <li>性別(Male/Female)： {{ animaldetail.animal_sex }}</li>
          <li>收容所：{{ animaldetail.shelter_name }}</li>
          <li>收容日期： {{ animaldetail.animal_createtime }}</li>
        </ul>
      </div>
    </div>
      <div class="footer d-flex align-items-end">
        <img src="./vuesImages/info1.svg" alt="">
        <img src="./vuesImages/info2.svg" alt=""> 
        <input type="button" value="我想領養！" class="adoptButton d-flex align-items-end" @click="goToAnimalFillin()">
      <img src="./vuesImages/info3.svg" alt="">
        <img src="./vuesImages/info4.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavbarBox.vue'
import axios from 'axios'
export default {
  components: {
    Navbar,
  },
  data(){
    return{
      animalId: this.$route.params.animal_id,
      animaldetail:[]
    }
  },
  mounted(){
    axios.get(`/api/animal/${this.animalId}`)
    .then((res) =>{ 
      this.animaldetail= res.data[0];
      console.log(this.animaldetail);
      });
  },
  methods: {
    goToAnimalFillin(){
      this.$router.push({ name: 'fillin' });
    }
  },
}
</script>

<style scoped>
@font-face {
  font-family: Cubic_11;
  src: url("@/vuesImages/Cubic_11.woff") format("woff");
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