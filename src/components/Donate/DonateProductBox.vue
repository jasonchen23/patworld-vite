<template>
  <div class="card ms-4 p-3">
    <img :src="imageSrc">
    <h4><strong>{{title}}</strong></h4>
    <p>NT$ {{price}}</p>
    <a class="button-21" @click="addCartItem()">
      <strong>加入購物車</strong>
    </a>
    <br />
  </div>
</template>

<script>

export default {
  props:{
    imageSrc:String,
    title:String,
    price:Number,
    id:String}
  ,
	methods: {
    addCartItem(){
      console.log(this.title,this.id,this.price);
      this.$store.dispatch('addCart',[this.title,this.id,this.price]);
      console.log('已加入購物車');
    },
   },
}
</script>


<style>
.imageSrc{
  justify-content: center;
 
}


h4{
  padding-top: 15px;
}
.button-21 {
  align-items: center;
  appearance: none;
  background-color: #ffc107ff;
  background-image: linear-gradient(1deg, #ffc107ff, #ffc107ff 99%);
  background-size: calc(100% + 20px) calc(100% + 20px);
  border-radius: 100px;
  border-width: 0;
  box-shadow: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-flex;
  font-size: 1rem;
  height: auto;
  justify-content: center;
  line-height: 1.5;
  padding: 6px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color .2s,background-position .2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;
}

.button-21:active,
.button-21:focus {
  outline: none;
}

.button-21:hover {
  color:#FFFFFF;
  background-position: -20px -20px;
}

.button-21:focus:not(:active) {
  box-shadow: #a24e00 0 0 0 .125em;
}
</style>
