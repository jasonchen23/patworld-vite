<template>
    <Navbar />
     <div class="container-fluid">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                    <div class="col-sm-12 empty-cart-cls text-center">
                        <img src="img\animal_mizugi_set_bg.png" width="300" height="300" class="img-fluid mb-3">
                        <h3><strong>感謝您的捐贈!</strong></h3>
                        <a href="#" class="button-30" mt-3 role="button">回到首頁</a>
                  </div>
              </div>
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

<style>
    @import url(http://fonts.googleapis.com/css?family=Calibri:400,300,700);

    body {
        background-color: rgba(255, 250, 244, 1);
        font-family: 'Calibri', sans-serif !important
    }

    .card {
        justify-content: center;
        width: 800px;
        height: 500px;
        margin-top: 50px;
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
        letter-spacing: .5px;
        border-radius: 8px;
        -webkit-box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, .05);
        box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, .05)
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