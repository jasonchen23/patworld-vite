<template>
  <div class="pt-4 text-center">
   <span> 領養紀錄 </span>
  </div>
    <div v-for="adopt in adopts" :key="adopt">
        <ViewBox v-bind="adopt" />
    </div>
</template>

<script>

import GoogleBtn from '@/components/User/GoogleBtn.vue';
import ViewBox from '@/components/User/ViewBox.vue';
// import DonateBox from '@/components/Donate/D'
export default {
  components: {
    GoogleBtn,
    ViewBox
  },
  data() {
    return {
        adopts:[],
        loginError: '',
    };
  },
  mounted(){
      this.$axios
        .post('/api/users/viewAdopt', {
          userId: this.$store.state.userId,
        })
        .then((response) => {
          this.adopts= response.data;
          // this.Datapush(response.data.animalId);
          console.log(this.adopts)
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
              console.log(error.response)
          }
        });
    },
  // methods: {
  //   Datapush(data) {
  //           for (let i = 0; i <= data.length; i++){
  //               const chunk  = data[i];
  //               // console.log(chunk);
  //               this.adopts.push(chunk);
  //           }
  //       }
  // },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

button {
  font-weight: bold;
  background-image: linear-gradient(to right, rgb(1 134 218), rgb(182 49 167));
}
</style>
