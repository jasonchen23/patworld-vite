<template>
            <div class="card mx-2">
                <img src="https://th.bing.com/th/id/OIP.d_VB81EP_EoX_lisrAT_JQHaHa?pid=ImgDet&rs=1" alt="" style="width:100%">
                <div class="container">
                  <h2>{{name}}</h2>
                  <h5>{{detail}}</h5>
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

</style>