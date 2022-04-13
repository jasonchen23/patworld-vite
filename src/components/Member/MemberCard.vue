<template>
<div class="scene">
  <div class="box">
    <div class="box_face box_face-front">front</div>
    <div class="box_face box_face-back">back</div>
  </div>
</div>

 <!-- <div class="col mx-1">
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
 </div> -->
</template>

<script>
export default {
  props:{
    name:String,
    detail:String,
    url:String,
    src:String,
  }
}

var box = document.querySelector('.box');
if(box){
box.addEventListener( 'click', function() {
  box.classList.toggle('is-flipped');
});
}

</script>

<style>

h2, h5{
font-family: jf-openhuninn;
color: #802300;
}

/* .flipped{
  transform: rotateY(180deg);
} */
/* 
.member-bg{
  background-image: url('../../assets/member/member_box_bg.jpg');
  background-repeat:no-repeat;
  background-position:right bottom;
  background-size: contain;
} */

.scene {
  width: 300px;
  height: 500px;
  border: 1px solid #CCC;
  margin: 40px 0;
  perspective: 600px;
}

.box {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.box.is-flipped {
  transform: rotateY(180deg);
}

.box_face {
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 260px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.box_face-front {
  background: red;
}

.box_face-back {
  background: blue;
  transform: rotateY(180deg);
}


</style>