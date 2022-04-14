<template>
  <div class="card ms-4">
    <img :src="imageSrc">
    <h4><strong>{{title}}</strong></h4>
    <p>NT$ {{price}}</p>
    <a class="button-21" @click="addCartItem()">
      <strong>加入購物車</strong>
    </a>
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


<style scoped>
.imageSrc{
  justify-content: center;
 
}


h4{
  padding-top: 15px;
}
.button-21 {
  align-items: center;
  appearance: none;
  background-color: #f7d6b7;
  background-image: linear-gradient(1deg, #f4c8bc, #f4b79d 99%);
  background-size: calc(100% + 20px) calc(100% + 20px);
  border-radius: 100px;
  border-width: 0;
  box-shadow: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-flex;
  font-family: CircularStd,sans-serif;
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
  background-position: -20px -20px;
}

.button-21:focus:not(:active) {
  box-shadow: rgba(199, 90, 230, 0.25) 0 0 0 .125em;
}
</style>
