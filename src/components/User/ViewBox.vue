<template>
    <!-- <div class="typesetting">
        <div class="card text-white bg-success" style="width: 25rem;">
        <img v-bind:src="album_file" class="card-img-top animalImg" alt="..." />
        <div class="card-body">
            <h5 v-bind:id="animalId" class="card-title">{{data.animalId}}</h5>
            <br>
            <div class="card-text row textBox">
                <div class="img col-3">
                    <img src="@/views/Adopt/vuesImages/id.svg">
                </div>
                <div class="text col-3">{{data.animal_kind}}</div>
                <div class="img col-3">
                    <img src="@/views/Adopt/vuesImages/gender.svg">
                </div>
                <div class="text col-3">{{data.animal_sex}}</div>
                <div class="img col-3">
                    <img src="@/views/Adopt/vuesImages/狗掌.svg">
                </div>
                <div class="text col-3">{{data.animal_Variety}}</div>
                <div class="img col-3">
                    <img src="@/views/Adopt/vuesImages/dog.svg">
                </div>
                <div class="text col-3">{{data.animal_bodytype}}</div>
            </div>
        </div>
        </div>
        </div> -->
        <div class="contain">
            <div class="row">
                <div class="col">{{adopt_id}}</div>
                <div class="col">{{animal_id}}</div>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return{
            // serverPath: this.$store.state.serverPath,
            // animalId: "傑森仔"
            // data:[],
        }
    },
    props:{
        "adopt_id": Number,
        "animal_id": Number,
    },
    // mounted() {
    //     this.$axios.get(`/api/animal/26311`).then((response) => {
    //       this.data= response.data;
    //       // this.Datapush(response.data.animalId);
    //     //   console.log(this.adopts)
    //     })
    //     .catch((error) => {
    //       if (error.response && error.response.status === 400) {
    //           console.log(error.response)
    //       }
    //     });
    // }
}
</script>

<style>

</style>