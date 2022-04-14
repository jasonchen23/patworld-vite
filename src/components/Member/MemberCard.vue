<template>
 <div class="col">
    <div class="card member-bg p-2  shadow-sm  h-100 border border-2 border-warning">
        <div class="h-100 p-2">
          <img v-bind:src="src" class=" card-img-top rounded-circle border border-warning"/>
          <div>
            <h2 class="fw-bold">{{name}}</h2>
            <hr />
            <p class="fw-bold">前端</p>
            <p>{{detail_frontend}}</p>
            <p v-if="detail_backend"  class="fw-bold">後端</p>
            <P>{{detail_backend}}</P>
            <p class="fw-bold">其他</p>
            <P>{{detail}}</P>
          </div>
        </div>
    <div>
      <hr />
      <a v-bind:href="url">
      <button class="btn btn-warning badge rounded-pill p-2">Github</button>
      </a>
    </div>
    </div>
 </div>
</template>

<script>
export default {
  props:{
    name:String,
    detail_frontend:String,
    detail_backend:String,
    detail:String,
    url:String,
    src:String,
  }
}




</script>

<style>

h2, h5, p , hr{
font-family: jf-openhuninn;
color: #802300;
}

.flipped{
  transform: rotateY(180deg);
} 

.member-bg{
  background-image: url('../../assets/member/member_box_bg.jpg');
  background-repeat:repeat;
  background-position:right bottom;
  background-size: contain;
}


</style>