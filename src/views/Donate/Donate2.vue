<template>
  <Navbar />
  <div class="container">
    <div class="title mt-5">
      <h2><strong>選擇捐贈項目</strong></h2>
    </div>
    <div class="row d-md-flex">
      <div class="product mt-3">
      <template v-for="item in items" :key="item">
      <Product v-bind="item" />
      </template>
      </div>
    </div>
  </div>

  <div class="cart mt-5">
    <div class="container">
      <h2><strong>購物車</strong></h2>
      <template v-for="cartitem in cartitems" :key="cartitem">
        <Cart v-bind="cartitem" />
      </template>
    </div>
    <hr>
    <h4>總計<br>NT$ {{sum}}</h4>
</div>


  <router-link to="/donate/form">
    <button class="button-30 mt-5" role="button">下一步</button>
  </router-link>

  <router-view></router-view>


</template>


<script>
import Navbar from '@/components/NavbarBox.vue'
import Product from '@/components/Donate/DonateProductBox.vue'
// import Button from '@/components/button.vue'
import Cart from '@/components/Donate/DonateCartBox.vue'

export default {
    components: {
      Navbar,
      Product,
      Cart,
      // Button
    },
    data() {
        return{
            items: [
      {
        imageSrc: "src/views/Donate/DonateImages/dog.png",
        title: "成犬飼料",
        price: 500,
        id: "dog"
      },
      {
        imageSrc: "src/views/Donate/DonateImages/poppy.png",
        title: "幼犬飼料",
        price: 400,
        id: "poppy"
      },
      {
        imageSrc: "src/views/Donate/DonateImages/cat.png",
        title: "成貓飼料",
        price: 500,
        id: "cat"
      },
      {
        imageSrc: "src/views/Donate/DonateImages/kitty.png",
        title: "幼貓飼料",
        price: 400,
        id: "kitty"
      },
    ],
  }
},
computed: {
  cartitems(){
    console.log(this.$store.state.cart);
    return this.$store.state.cart;
  },
  sum(){
    let summ=0;
    let carts =this.$store.state.cart;
    carts.map(function(cart){
      summ += cart["total"];
      // return summ; 
    })
    return summ;
    
    // return summ;
  }
},
methods:{
}}
  

</script>

<style scoped>
.product {
    display: flex;
    justify-content: center;
    
}
.row {
  display: flex;
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
