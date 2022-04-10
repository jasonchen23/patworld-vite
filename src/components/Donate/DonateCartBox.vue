<template>

  <div class="container mb-2">
    <div class="cart-item d-md-flex justify-content-between">
    <!-- 品項 -->
      <div class="px-3 my-3 text-center">
        <div class="cart-item-label"><strong>品項</strong><br>{{title}}</div>
      </div>
    <!-- 數量 -->
      <div class="px-3 my-3 text-center">
        <div class="cart-item-label"><strong>數量</strong><br>{{amount}}</div>
      </div>
    <!-- 單價 -->
      <div class="px-3 my-3 text-center">
        <div class="cart-item-label"><strong>單價</strong><br>NT$ {{price}}</div>
      </div>
    <!-- 小計 -->
      <div class="px-3 my-3 mb-3 text-center">
        <div class="cart-item-label"><strong>小計</strong><br>NT$ {{total}}</div>
      </div>
    </div>
</div>
 
</template>

<script>

export default {
  name: 'CartListItem',
    props:{
    id:String,
    price:Number,
    title:String,
    amount:Number,
    total:Number},
    data(){
      return{

      }
    },
  methods: {
    
      

    },
    // watch: {
    //   total(){
    //     $emit.
    //   }
    // },
  computed:{
    total(){
     var tt= 0;
     tt=(this.amount)*(this.price);
     return tt;
  },
}}
</script>

<style>
/* 外框 */
.cart-item {
  margin-bottom: 30px;
  background-color: #fff;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, .09);
} 


/* 飼料文字 */
.cart-item .cart-item-product-title {
  margin-top: 30px;
  transition: color, 0.3s;
  text-align: center ;
  color: #343b43;
  font-size: 16px;
  display: block;
}

/* 數量 */
.cart-item .count-input {
  display: inline-block;
  width: 85px;
}
.cart-item .remove-item {
  right: -10px !important;
}

/* 叉叉 */
.remove-item {
  display: block;
  position: absolute;
  top: -5px;
  right: -5px;
  width: 22px;
  height: 22px;
  padding-left: 1px;
  border-radius: 50%;
  background-color: #ff5252;
  color: #fff;
  line-height: 23px;
  text-align: center;
  box-shadow: 0 3px 12px 0 rgba(255, 82, 82, .5);
  cursor: pointer;
}
.card-wrapper {
  margin: 30px -15px;
}
</style>
