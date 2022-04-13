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
    <!-- 刪除 -->
      <div class="px-3 my-3 mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-trash3" @click="removeCart()" viewBox="0 0 16 16">
        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg>
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
  computed:{
    total(){
     var tt= 0;
     tt=(this.amount)*(this.price);
     return tt;
  }},
  methods: {
    removeCart(){
      console.log(this.title,this.id,this.price);
      this.$store.dispatch('removeCart',this.id);
      console.log('已移除商品');
    },
   },
}
  
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



.card-wrapper {
  margin: 30px -15px;
}
</style>
