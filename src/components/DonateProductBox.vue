<template>
  <div class="card ms-4">
    <!-- <img :src="{{ img }}"> -->
    <h4><strong>{{title}}</strong></h4>
    <p>NT$ {{price}}</p>
    <a class="button is-rounded" @click="addCartItem(productItem)">
      <strong>加入購物車</strong>
    </a>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "ProductListItem",
  props:{
    title:String,
    price:Number,
  },
	methods: {
       ...mapActions(["addCartItem"]),
   },
}
</script>

<style>

</style>
