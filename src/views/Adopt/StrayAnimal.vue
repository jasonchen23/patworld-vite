<template>
    <div class="body">
        <Navbar />

        <div class="container body">
            <!-- 幻燈片區 -->
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div class="carousel-inner slideshow">
                    <div class="carousel-item active">
                        <img src="./vuesImages/幻燈片cat.jpeg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./vuesImages/幻燈片dog.jpeg" class="d-block w-100" alt="..." />
                    </div>
                    <!-- <div class="carousel-item">
                為什麼會有Pet World 呢 ？的ui圖
                    </div>-->
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <!-- 搜尋區 -->
            <div class="search">
                <form action>
                    <div>
                        <h1 class="iWantToSearch">我想要找：</h1>
                        <!-- <input
                            type="image"
                            src="./vuesImages/我想找貓.svg"
                            alt="cat"
                            width="30px"
                            height="30px"
                        />
                        <input
                            type="image"
                            src="./vuesImages/我想找狗.svg"
                            alt="dog"
                            width="30px"
                            height="30px"
                        /> -->
                    </div>
                    <div class="selectBox">
                        <div class="select">
                            <select>
                                <option value="1">不限區域</option>
                                <option value="2">No JS</option>
                                <option value="3">Nice!</option>
                            </select>
                        </div>
                        <div class="select">
                            <select>
                                <option value="1">不限性別</option>
                                <option value="2">男生</option>
                                <option value="3">女生</option>
                            </select>
                        </div>
                        <div class="select">
                            <select>
                                <option value="1">不限種類</option>
                                <option value="2">貓貓</option>
                                <option value="3">狗狗</option>
                            </select>
                        </div>
                        <input type="button" value="搜尋" class="button" />
                    </div>
                </form>
            </div>
            <!-- 卡片區 -->
            <!-- <div class="infomation">
                <img src="./vuesImages/jason.svg" alt="">
                <div class="infoLogo">
                    <img src="./vuesImages/id.svg" alt=""><br>
                    <img src="./vuesImages/gender.svg" alt=""><br>
                    <img src="./vuesImages/狗掌.svg" alt=""><br>
                    <img src="./vuesImages/home.svg" alt="">
                </div>
            </div>-->

            <!-- <div class="card mb-3 mt-3" style="max-width: 35vw;">
                <div class="row">
                    <div class="col-4">
                        <img src="./vuesImages/jason.svg" alt="...">
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h5 class="card-title">傑森</h5>
                            <p class="card-text">
                                <img src="./vuesImages/id.svg" alt=""> 
                            </p>
                            <p class="card-text">
                                <img src="./vuesImages/gender.svg" alt="">
                            </p>
                            <p class="card-text">
                                <img src="./vuesImages/狗掌.svg" alt="" > 
                            </p>
                            <p>
                                <img src="./vuesImages/home.svg" alt="">
                            </p>
                        </div>
                    </div>
                </div>
            </div>-->
            <div class="card text-white bg-success" style="width: 25rem;">
                <img src="https://asms.coa.gov.tw/amlapp/upload/pic/b52f8716-c482-40ff-826b-926312e92d63_org.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">傑森</h5>
                    <br>
                    <div class="card-text row textBox">
                        <div class="img col-3">
                            <img src="./vuesImages/id.svg" alt />
                        </div>
                        <div class="text col-3">狗狗</div>
                        <div class="img col-3">
                            <img src="./vuesImages/gender.svg">
                        </div>
                        <div class="text col-3">男生</div>
                        <div class="img col-3">
                            <img src="./vuesImages/狗掌.svg" alt />
                        </div>
                        <div class="text col-3">拉布拉多</div>
                        <div class="img col-3">
                            <img src="./vuesImages/home.svg" alt />
                        </div>
                        <div class="text col-3">新北市</div>
                    </div>
                    <br />
                    <router-link
                        to="/detail"
                        style="text-decoration:none;"
                        class="btn btn-light"
                    >詳細資料</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/NavbarBox.vue'
import axios from 'axios'
export default {
    components: {
        Navbar,
    },
    mounted(){
        axios.get('/api/anim')
    }
}

</script>

<style scoped>
@font-face {
    font-family: Cubic_11;
    src: url("@/views/Adopt/vuesImages/Cubic_11.woff") format("woff");
}

.body {
    /* font-family: "Cubic_11"; */
    height: 100%;
    margin-top: -8vh;
    /* background: #fffaf4; */
}
.slideshow {
    border-radius: 10px 10px 10px 10px / 10px 10px 10px 10px;
    box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.2);
    margin-top: 15vh;
}
.search {
    margin-top: 7%;
}
.iWantToSearch {
    display: inline-block;
}
.search img {
    width: 5%;
    margin-top: -2%;
    margin-right: 1%;
}
select {
    /* Reset Select */
    appearance: none;
    outline: 0;
    border: 1;
    box-shadow: none;
    /* Personalize */
    flex: 1;
    padding: 0 1em;
    color: rgba(2, 107, 72, 0.425);
    background-color: var(--darkgray);
    background-image: none;
    cursor: pointer;
}
/* Remove IE arrow */
select::-ms-expand {
    display: none;
}
/* Custom Select wrapper */
.select {
    position: relative;
    display: flex;
    width: 15em;
    height: 3em;
    border-radius: 0.25em;
    overflow: hidden;
    margin-right: 1%;
}
/* Arrow */
.select::after {
    content: "\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 1em;
    background-color: #4a6886;
    transition: 0.25s all ease;
    pointer-events: none;
}
/* Transition */
.select:hover::after {
    color: #0f0;
}
.selectBox {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 4%;
    margin-bottom: 4%;
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
    height: 6vh;
    width: 9vw;
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
    margin-top: 0%;
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
.infomation {
    display: flex;
    /* flex-direction: row; */
    width: 45vw;
    height: 40vh;
    background: #eac568a1;
    margin-top: 10%;
    border-radius: 10px 10px 10px 10px / 10px 10px 10px 10px;
}
.infomation img {
    width: 45vw;
    height: 40vh;
    margin-left: -20vw;
}
.infoLogo img {
    width: 10vw;
    height: 10vh;
    margin-left: 1%;
    padding-left: 50%;
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

</style>