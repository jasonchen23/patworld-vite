<template>
  <Navbar />
  <div class="container">
    <div class="title mt-5">
      <h2><strong>選擇捐贈項目</strong></h2>
    </div>
    <div class="row">
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
    <button class="button-30" role="button">下一步</button>
  </router-link>

  <router-view></router-view>


</template>


<script>
import Navbar from '@/components/NavbarBox.vue'
import Product from '@/components/Donate/DonateProductBox.vue'
import Button from '@/components/button.vue'
import Cart from '@/components/Donate/DonateCartBox.vue'

export default {
    components: {
      Navbar,
      Product,
      Cart,
      Button
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
  //  total: function(){
  //     var sum = 0;
  //     this.cartitems.map(function(cartitem){
  //       console.log(cartitem);
  //           sum += parseInt(cartitem.total);
  //     });
  //     return sum;
  //   }
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


</style>
