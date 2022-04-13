<template>
 <div class="col mx-1">
    <div class="member-bg p-3 card shadow-sm d-flex justify-center h-100 border border-2 border-warning">
        <div class="col h-100">
          <img v-bind:src="src" class="p-2 card-img-top rounded-circle border border-warning"/>
          <div class="container text-center">
            <h2 class="fw-bold">{{name}}</h2>
            <h5>{{detail}}</h5>
          </div>
        </div>
    <div>
      <a v-bind:href="url">
      <button class="btn btn-warning badge rounded-pill p-2">Github</button>
      </a>
    </div>
    </div>
 </div>


            <!-- <div class="card mx-2">
                <img src="https://th.bing.com/th/id/OIP.d_VB81EP_EoX_lisrAT_JQHaHa?pid=ImgDet&rs=1" alt="" style="width:100%">
                <div class="container">
                  <h2>{{name}}</h2>
                  <h5>{{detail}}</h5>
                </div>
            </div> -->
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