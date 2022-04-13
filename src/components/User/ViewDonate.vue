<template>
  <div class="pt-4 text-center">
   <span> 捐贈紀錄 </span>
  </div>
    <hr>
    <div class="container box">
      <div class="row">
        <div class="col-2">成犬飼料</div>
        <div class="col-2">幼犬飼料</div>
        <div class="col-2">成貓飼料</div>
        <div class="col-2">幼貓飼料</div>
        <div class="col-4">收容所</div>
      </div>
      <div v-for="donate in donates" :key="donate">
        <ViewBox2 v-bind="donate" />
      </div>
    </div>
</template>

<script>

import ViewBox2 from '@/components/User/ViewBox2.vue';
export default {
  components: {
    ViewBox2
  },
  data() {
    return {
        donates:[],
        // loginError: '',
    };
  },
  mounted(){
      this.$axios
        .post('/api/users/viewDonate', {
          userId: this.$store.state.userId,
        })
        .then((response) => {
          // this.Datapush(response.data);
                    this.donates= response.data;
                    console.log(this.donates);
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
  //               this.donates.push(chunk);
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
.box{
  width: 200px;
}

</style>
