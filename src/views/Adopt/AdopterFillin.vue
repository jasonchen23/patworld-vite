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
                <input type="text" name id class="form-control" placeholder="領養人姓名" />
                <input type="tel" name id class="form-control" placeholder="聯絡電話" />
                <input type="email" name id class="form-control" placeholder="電子郵件地址" />
                <input type="text" name id class="form-control" placeholder="通訊地址" />
                <input type="text" name id class="form-control" placeholder="領養人職業" />
                <input type="text" name id class="form-control" placeholder="領養人年齡" />
                <br />
            </form>
            <br />
        </div>
        <router-link to="/sent" style="text-decoration:none;">
            <div>
                <input type="button" value="送出資料" class="sentButton" />
            </div>
        </router-link>
        <div class="tree container">
            <img src="./vuesImages/tree.svg" alt />
            <img src="./vuesImages/tree.svg" alt />
        </div>
    </div>
    <router-view/>
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