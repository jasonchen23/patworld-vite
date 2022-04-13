<template>

    <div class="container">
          <div class="card">
            <div class="cat"> 
              <img src="src\views\Donate\DonateImages\ojigi_animal_neko.png" width="200" height="200" class="img-fluid">
              <div class="title mt-4 mb-5">
              <h3><strong>感謝您的捐贈!</strong></h3>
              </div>
              <a href="#" class="button-30" mt-5 role="button">回到首頁</a>
            </div> 
          </div>
        </div>
 
</template>

<script>
 import Button from '@/components/button.vue'

export default {
    components: {
      Button,
    },
}
</script>

<style scoped>
    .card {
        justify-content: center;
        width: 800px;
        height: 500px;
        margin-top: 50px;
    }
    

</style>