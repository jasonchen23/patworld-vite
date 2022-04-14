<template>
    <div class="container">
        <Navbar />
        <div class="titleBox">
            <h1>
                <img src="./vuesImages/肉球.svg" />
                領養人資料確認
                <img src="./vuesImages/肉球.svg" />
            </h1>
        </div>
        <div class="inputBox">
            <form action>
                <label>領養人姓名</label>
                <input type="text" class="form-control" value="Jimmy" disabled="disabled" />
                <label>領養人電話</label>
                <input type="tel" class="form-control" value="0912345678" disabled="disabled" />
                <label>領養人電子郵件</label>
                <input type="email" class="form-control" value="test@example.com" disabled="disabled" />
                <label>領養人通訊地址</label>
                <input type="text" class="form-control"  value="test" disabled="disabled" />
                <label>領養人職業</label>
                <input type="text" class="form-control" value="學生" disabled="disabled" />
                <label>領養人年齡</label>
                <input type="text" class="form-control" value="22" disabled="disabled" />
                <br />
            </form>
            <br />
        </div>
            <div>
                <input type="submit" value="送出資料" class="sentButton" @click="goToDataSent()">
            </div>
        <div class="tree container">
            <img src="./vuesImages/tree.svg" alt />
            <img src="./vuesImages/tree.svg" alt />
        </div>
    </div>
    <router-view/>
</template>

<script>
import Navbar from '@/components/NavbarBox.vue'
// import axios from 'axios'
export default {
    components: {
        Navbar,
    },
    data(){
        return {
            animalId: this.$route.params.animal_id,
            userId:this.$store.state.userId
        }
    },
    mounted() {
        console.log(this.userId)
    },
    methods: {
        goToDataSent(){
            this.$axios.post(`/api/animal/${this.animalId}/adopt`, {userId:this.userId})
        .then(response => {
                                this.$swal('領養成功');
                                            this.$router.push({ name: 'sent' });
        })

    }
    }
}
</script>

<style scoped>
label {
    display: flex;
    justify-content: start;
    margin-top: 15px;
    margin-bottom: 15px;
    font-weight: 900;
}
.titleBox {
    margin-top: 5%;
}
h1 {
    font-size: 3vw;
}
h1 img {
    width: 5vw;
}
.sentButton {
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
    height: 80px;
    width: 200px;
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
    font-size: 200%;
    margin-bottom: 1%;
}

.sentButton:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(140, 136, 148, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
}

.sentButton:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
}

.sentButton:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
}
.form-control {
    margin-top: 1%;
    width: 40vw;
    height: 7vh;
}
.inputBox {
    display: flex;
    justify-content: center;
    margin: 3%;
}
.tree img {
    width: 10vw;
}
.tree {
    display: flex;
    justify-content: space-between;
}
input {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}
</style>