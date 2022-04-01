<template>
  <Navbar />
  <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://media.istockphoto.com/photos/funny-friends-cute-cat-and-corgi-dog-are-lying-on-a-white-bed-picture-id1347494018?b=1&k=20&m=1347494018&s=170667a&w=0&h=nYHDAKQ1IJYqW10KHy1wMjYbLmVHPqeRkf9rQ4hnMVI=" class="d-block w-100" alt="...">
        </div>

        <div class="carousel-item">
          <img src="https://media.istockphoto.com/photos/dog-in-a-leprechaun-hat-sits-on-a-white-background-with-green-clovers-picture-id1369759625?b=1&k=20&m=1369759625&s=170667a&w=0&h=ognh6EJrW2F7reagYZgmzyjw65rPjCmgjmB8WdH5bTc=" class="d-block w-100" alt="...">
        </div>

        <div class="carousel-item">
          <img src="https://media.istockphoto.com/photos/puppy-spaniel-picture-id1292870356?b=1&k=20&m=1292870356&s=170667a&w=0&h=mUWbeeG1Bn5Wav-FitzqYAGF11l9U-ONBdb1ErX4hg8=" class="d-block w-100" alt="...">
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</div>

<router-link to="/donate/donate2">
  <button class="button-30" role="button">我要捐飼料</button>
</router-link>

</template>

<script>
import Navbar from '@/components/NavbarBox.vue'
// import Button from '@/components/ButtonBox.vue'

export default {
  components:{
    Navbar,
    // Button,
  },
  data(){

  },};


</script>

<style>

body{
      margin-top:50px;
      background: rgba(255, 250, 244, 1) 
    }

    .carousel .carousel-item {
      height: 500px;
    }

    /* .carousel .carousel-item img {
      min-height: 300px;
      max-height: 400px;
      object-fit: cover;
    } */

</style>