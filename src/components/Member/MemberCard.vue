<template>
 <div class="col mx-1">
    <div class="p-3 card shadow-sm d-flex justify-center h-100 border border-2 border-warning">
        <div class="col h-100">
          <img src="https://th.bing.com/th/id/OIP.d_VB81EP_EoX_lisrAT_JQHaHa?pid=ImgDet&rs=1" class="p-2 card-img-top  rounded-circle">
          <div class="container text-center">
            <h2 class="fw-bold">{{name}}</h2>
            <h5>{{detail}}</h5>
          </div>
        </div>
    <div>
      <button class="btn btn-warning badge rounded-pill p-2">Github</button>
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