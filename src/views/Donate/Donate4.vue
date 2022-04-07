<template>
<div class="background">
    <div class="container">
      <div class="row">
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
        </div>
  </div>
</template>

<script>
// import Button from '../components/button.vue'

export default {
    components: {
      
        // Button,
    },
}
</script>

<style scoped>
.background {
    height: 100vh;
    background-color: rgb(134, 155, 100);
}

    .card {
        justify-content: center;
        width: 800px;
        height: 500px;
        margin-top: 50px;
    }
    
    .button-30 {
    align-items: center;
    appearance: none;
    background-color: #FCFCFD;
    border-radius: 4px;
    border-width: 0;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #36395A;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono",monospace;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow .15s,transform .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow,transform;
    font-size: 18px;
    }

    .button-30:focus {
      box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }

    .button-30:hover {
      box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
      transform: translateY(-2px);
    }

    .button-30:active {
      box-shadow: #D6D6E7 0 3px 7px inset;
      transform: translateY(2px);
    }

</style>