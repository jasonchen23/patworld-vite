<template>
    <!-- <Navbar /> -->
    <!-- <Product v-for="product in products" /> -->
    <div class="body">
        <div class="logoBox">
            <img src="./vuesImages/logo.svg" alt="" class="logo">
       </div>
       <div class="infoBoxOutside">
           <div class="infoBox">
               <div class="infoText">
                   <p class="title">以領養代替購買</p>
               </div>
               <div class="infoImg">
                   <img src="./vuesImages/titlebox1.svg" alt="">
                   <img src="./vuesImages/titlebox2.svg" alt="">
                   <img src="./vuesImages/titlebox3.svg" alt="">
                   <div class="space"></div>
                   <img src="./vuesImages/titlebox4.svg" alt="">
                   <img src="./vuesImages/titlebox5.svg" alt="">
                   <img src="./vuesImages/titlebox6.svg" alt="">
               </div>
           </div>
       </div>
       <div class="footer d-flex align-items-end">
           <div class="footerImg1 hor">
               <img src="./vuesImages/帶我回家.svg" alt="" class="footerImg">
           </div>
           <div class="footerImg2" id="hid">
               <router-link
                        to="/adopt/strayAnimal/1"
                        style="text-decoration:none;"
                    >
                        <img src="./vuesImages/myHome.svg" alt="" class="footerImg">
                    </router-link>
           </div>
           <div class="footerImg3">
               <img src="./vuesImages/一起找個家.svg" alt="" class="footerImg">
           </div>
       </div>
    </div>
    
</template>


<script>
import Navbar from '@/components/NavbarBox.vue'
// import Product from '@/components/ProductBox.vue'
export default {
    components: {
        Navbar,
    },
    data(){
        return{

        }
    },
    methods:{
        // check(this){
        //     if(account==null){
        //         alert("Insert account!!");
        //     }
        // }
    }
}
</script>

<style scoped>
@font-face {
font-family: Cubic_11;
src: url("@/views/Adopt/vuesImages/Cubic_11.woff") format("woff");
}

.body {
    font-family: 'Cubic_11' ;
    /* background: linear-gradient(0deg, #FFFAF4 12%, #f5bb73fd 85%); */
    height: 100vh;
    width: 100%;
    margin-top: -0.5vh;
}
.logoBox {
    background-color: #fff6ee;
    width: 100%;
    height: auto;
    border-radius: 0% 0% 400px 400px;
    box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.2);
    padding: 0.25rem 0;
    display: flex;
    justify-content: center;
    /* margin-top: -5%; */
    /* padding-top: -100px; */
  }
.logo{
    width: 10%;
    height: auto;
}
.infoBox{
    width: 90%;
    height: auto;
    background: #fff6ee;
    border-radius: 10px 10px 10px 10px / 10px 10px 10px 10px;
    box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.2);
    margin-top: 10vh;
    
}
.infoBoxOutside{
    display: flex;
    justify-content: center;
} 
.infoText{
  /* text-align:center;  */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
}
@keyframes typing {
    from { width: 0 }
  } 
.title {
    font-size: 5vmin;
    color: #A2A44E;
    width: 8em;
    border-right: .05em solid;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 4s steps(11),
      caret 1s steps(1) infinite;
    margin-left: 1vw;
  }
.space{
    display: inline-block;
    margin-top: 5%;
    width: 30%;
    height: 30px;
    /* background-color: black; */
}
.infoImg{
    display: flex;
    justify-content:space-around;
}
.infoImg img{
    width: 10%;
    height: auto;
    display: inline-block;
    padding-left: 1%;
    padding-right: 1%;
}
.footer{
    display: flex;
    justify-content: center;
    margin-right: 9vw;
}
.footerImg1{
    display: inline-block;
    display: flex;
    justify-content: center;
}
.footerImg2{
    display: inline-block;
    display: flex;
    justify-content: center;
}
.footerImg3{
    display: inline-block;
    display: flex;
    justify-content: center;
}
.footerImg{
    width: 25vw;
    height: 25vh;
    margin-top: 22vh;
    margin-left: 8vw;
}
</style>