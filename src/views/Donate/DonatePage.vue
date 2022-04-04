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
          <img src="src\views\Donate\DonateImages\donate1.svg" class="d-block w-100" alt="...">
        </div>

        <div class="carousel-item">
          <img src="src\views\Donate\DonateImages\donate2.svg" class="d-block w-100" alt="...">
        </div>

        <div class="carousel-item">
          <img src="src\views\Donate\DonateImages\donate3.svg" class="d-block w-100" alt="...">
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

<router-link to="/donate/list">
  <button class="button-30" role="button">我要捐飼料</button>
</router-link>

<router-view></router-view>
</template>

<script>
import Navbar from '@/components/NavbarBox.vue'
// import Button from '@/components/ButtonBox.vue'

export default {
  components:{
    Navbar,
    Button,
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