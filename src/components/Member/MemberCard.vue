<template>
 <div class="col mx-1 ">
    <div class="card px-1 shadow-sm d-flex justify-center h-100">
        <img src="https://th.bing.com/th/id/OIP.d_VB81EP_EoX_lisrAT_JQHaHa?pid=ImgDet&rs=1" alt="" class="card-img-top">
        <div class="container text-center">
          <h2 class="fw-bold">{{name}}</h2>
          <h5>{{detail}}</h5>
        </div>
    </div>
 </div>
</template>

<script>
export default {
  props:{
    name:String,
    detail:String,
  }
}
</script>

<style>

h2, h5{
font-family: jf-openhuninn;
color: #802300;
}

</style>