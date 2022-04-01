<template>
    <div class="card text-white bg-success" style="width: 25rem;">
        <img src="https://asms.coa.gov.tw/amlapp/upload/pic/b52f8716-c482-40ff-826b-926312e92d63_org.jpg"
            class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">傑森</h5>
            <br>
            <div class="card-text row textBox">
                <div class="img col-3">
                    <img src="./vuesImages/id.svg">
                </div>
                <div class="text col-3">狗狗</div>
                <div class="img col-3">
                    <img src="./vuesImages/gender.svg">
                </div>
                <div class="text col-3">男生</div>
                <div class="img col-3">
                    <img src="./vuesImages/狗掌.svg">
                </div>
                <div class="text col-3">拉布拉多</div>
                <div class="img col-3">
                    <img src="./vuesImages/home.svg">
                </div>
                <div class="text col-3">新北市</div>
            </div>
            <br>
            <div class="button">
                <router-link to="/detail" style="text-decoration:none;" class="btn btn-light">詳細資料</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    data(){
        return{
            serverPath: this.$store.state.serverPath
        }
    },
    // props:{
    //     'id': Number,
    //     'img_path': String,
    //     'brand': String,
    //     'category': String,
    //     'name': String,
    //     'price': Number,
    //     'has_border':{
    //         type: Boolean,
    //         default: false
    //     }
    // },
    // methods:{
    //     parseImgPath: function(path){
    //         return this.serverPath + path;
    //     },
    //     redirectProduct: function(id){
    //         this.$router.push(`/products/${id}`)
    //     }
    // }
}
</script>

<style scoped>
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
}
.textBox {
    margin-right: 6%;
}
.button {
    display: flex;
    justify-content: center;
    margin-left: 135px;
}
</style>