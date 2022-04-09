<template>
    <div class="container">
        <Navbar />
        <div class="imgBox">
            <img src="./vuesImages/congratulation.svg" alt />
        </div>
        <br />
        <div class="textBox">
            <h1>Congratulations！</h1>
            <br>
            <h2>資料送出成功!</h2>
            <br>
            <p class="text-center">
                承辦單位收到資料後會盡快與您聯絡
            </p>
            <p class="text-center">
                並預約線上面試評估
            </p>
            <p class="text-center">
                ~敬請耐心等待，謝謝您~
            </p>
            <div class="button">
                <router-link to="/adopt/strayAnimal/1" style="text-decoration:none;">
                    <input type="button" value="回到首頁" class="goBackButton" />
            </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/NavbarBox.vue'
export default {
    components: {
        Navbar,
    },
}
</script>

<style scoped>
.imgBox {
    margin-top: 5%;
}
.imgBox img {
    height: 25vw;
}
h1{
    font-size: 5vw;
    transform:rotate(-3deg);
    margin-top: 5%;
    margin-bottom: 1%;
}
h2{
    font-size: 3vw;
    transform:rotate(-3deg);
    margin-bottom: 5%;
}
p{
    font-size: 2vw;
    font-weight: 900;
}
.goBackButton {
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
    height: 10vh;
    width: 20vw;
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
    font-size: 3vw;
    margin-bottom: 1%;
    margin-top: 3%;
    
}

.goBackButton:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(140, 136, 148, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
}

.goBackButton:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
}

.goBackButton:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
}
</style>