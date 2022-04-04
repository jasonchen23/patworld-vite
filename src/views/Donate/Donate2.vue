<template>
<Navbar />
<div class="container">
  <div class="title mt-5">
    <h2>選擇捐贈項目</h2>
    </div>
  <div class="row">
    <div class="product mt-3">
    <template v-for="item in items" v-bind:item_data="item">
    <Product v-bind="item" />
    </template>
    </div>
  </div>
</div>
 
<div class="cart">
  <div class="container">
  <div class="head mt-5">
    <h2>購物車</h2>
  </div>
  <div class="row">
    <div class="price">價格</div>
    <div class="quantity">數量</div>
    <div class="total">總計</div>
  </div>
    <!-- <template v-for="buyitem in buyitems" v-bind:buy_data="buyitem"> -->
      <!-- <h5 v-if="total()">Sum: $ {{total()}}</h5> -->
    <!-- </template> -->
</div>
</div>


</template>


<script>
import Navbar from '@/components/NavbarBox.vue'
import Product from '@/components/DonateProductBox.vue'
// import DonateList from '@/components/DonateListBox.vue'


export default {
    components: {
      Navbar,
      Product,
    },
    data() {
        return{
            items: [
      {
        img: "https://stickershop.line-scdn.net/stickershop/v1/product/6435073/LINEStorePC/main.png",
        title: "成犬飼料",
        price: "500",
        id: "dog"
      },
      {
        img: "https://stickershop.line-scdn.net/stickershop/v1/product/10975299/LINEStorePC/main.png;compress=true",
        title: "幼犬飼料",
        price: "400",
        id: "poppy"
      },
      {
        img: "https://stickershop.line-scdn.net/stickershop/v1/product/1296978/LINEStorePC/main.png;compress=true",
        title: "成貓飼料",
        price: "500",
        id: "cat"
      },
      {
        img: "https://stickershop.line-scdn.net/stickershop/v1/sticker/146390443/android/sticker.png",
        title: "幼貓飼料",
        price: "400",
        id: "kitty"
      },
    ]
  }
},

mounted(){},
};
  

</script>

<style>
.product {
    display: flex;
    justify-content: center;
}
.row {
  display: flex;
}

</style>
