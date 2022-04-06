<template>
    <div class="typesetting">
        <div class="card text-white bg-success" style="width: 25rem;">
        <img v-bind:src="album_file" class="card-img-top animalImg" alt="..." />
        <div class="card-body">
            <h5 v-bind:id="animalId" class="card-title">{{animalId}}</h5>
            <br>
            <div class="card-text row textBox">
                <div class="img col-3">
                    <img src=".././views/Adopt/vuesImages/id.svg">
                </div>
                <div class="text col-3">{{animal_kind}}</div>
                <div class="img col-3">
                    <img src=".././views/Adopt/vuesImages/gender.svg">
                </div>
                <div class="text col-3">{{animal_sex}}</div>
                <div class="img col-3">
                    <img src=".././views/Adopt/vuesImages/狗掌.svg">
                </div>
                <div class="text col-3">{{animal_Variety}}</div>
                <div class="img col-3">
                    <img src=".././views/Adopt/vuesImages/dog.svg">
                </div>
                <div class="text col-3">{{animal_bodytype}}</div>
            </div>
            <br>
            <div class="button" @click="goToAnimalDetail(animal_id)">
                <router-link to="/adopt/strayAnimal/:strayAnimalId" style="text-decoration:none;" class="btn btn-light">詳細資料</router-link>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
    data(){
        return{
            // serverPath: this.$store.state.serverPath,
            // animalId: "傑森仔"
            data:[],
        }
    },
    props:{
    "animal_id": Number,
    "animal_place": String,
    "animal_kind": String,
    "animal_sex": String,
    "animal_createtime": String,
    "shelter_name": String,
    "album_file": String,
    "shelter_address": String,
    "animal_Variety": String,
    "animal_bodytype": String,
    },
    methods:{
        // parseImgPath: function(path){
        //     return this.serverPath + path;
        // },
        // redirectProduct: function(id){
        //     this.$router.push(`/products/${id}`)
        // }
    },

}
</script>

<style scoped>
.typesetting {
    margin: 1%;
}
.button {
    align-items: center;
    appearance: none;
    background-color: #fcfcfd;
    border-radius: 4px;
    border-width: 0;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #36395a;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono", monospace;
    height: 50px;
    width: 90px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow 0.15s, transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 18px;
    /* margin-left: -100px;
    margin-right: 20vw; */
}

.button:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(140, 136, 148, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
}

.button:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
}

.button:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
}
.text {
    display: flex;
    align-items: center;
    justify-content: left;
}
.img{
    display: flex;
    justify-content: right;
}
.img img {
    width: 3vw;
    max-height: 100px;
}
.textBox {
    margin-right: 6%;
}
.button {
    display: flex;
    justify-content: center;
    margin-left: 135px;
}
.animalImg{
    max-height: 33vh;
}
</style>