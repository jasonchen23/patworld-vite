<template>
    <div class="body container">
        <Navbar />
        <div class="titleBox">
            <h1>
                <img src="./vuesImages/肉球.svg" >
                愛心犬貓認養須知
                <img src="./vuesImages/肉球.svg" >
            </h1>
        </div>
        <div class="clause">
            <ol>
                <li>
                    <div class="row">
                        <div class="col-10">
                            您是否看過犬貓之行為健康評估表?
                            <br />且與管理人員或志工討論過該犬貓之狀況？
                        </div>
                        <div class="col-2 yesNoBox">
                            <img src="./vuesImages/yes.svg" alt class="yesNo" />是
                        </div>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="col-10">
                            您是否知道犬貓的健康有許多不確定的風險?
                    <br/>且您是否了解當牠生病時立即就醫治療是飼主的責任?
                        </div>
                        <div class="col-2 yesNoBox">
                            <img src="./vuesImages/yes.svg" alt class="yesNo" />是
                        </div>
                    </div>
                    
                </li>
                <li>
                    <div class="row">
                        <div class="col-10">
                            犬貓將近有15年的壽命，您是否了解無論人事物的演變
                    <br />(例如:結婚生子 搬家出國 當兵 都不足以構成棄養的原因!)
                        </div>
                        <div class="col-2 yesNoBox">
                            <img src="./vuesImages/yes.svg" alt class="yesNo" />是
                        </div>
                    </div>
                    
                </li>
                <li>
                    <div class="row">
                        <div class="col-10">
                        您是否了解飼養動物需要適當的居家條件?
                    <br />(請考量套房 公寓 大樓 的飼養空間)
                        </div>
                        <div class="col-2 yesNoBox">
                            <img src="./vuesImages/yes.svg" alt class="yesNo" />是
                        </div>
                    </div>
                    
                </li>
                <li>
                    <div class="row">
                        <div class="col-10">
                            您是否同意無共識前絕不認養，以免造成心理負擔，
                    <br />且認養犬貓的決定已經獲得房東/家人/室友的同意?
                        </div>
                        <div class="col-2 yesNoBox">
                            <img src="./vuesImages/yes.svg" alt class="yesNo" />是
                        </div>
                    </div>
                    
                </li>
            </ol>
            <!-- <ul>
                <li>
                    <div class="choose">
                        <img src="./vuesImages/yes.svg" alt="" class="yesNo">是
                    </div>
                </li>
                <li>
                    <div class="choose">
                        <img src="./vuesImages/no.svg" alt="" class="yesNo">否
                    </div>
                </li>
                <li>
                    <div class="choose">
                        <img src="./vuesImages/yes.svg" alt="" class="yesNo">是
                    </div>
                </li>
                <li>
                    <div class="choose">
                        <img src="./vuesImages/yes.svg" alt="" class="yesNo">是
                    </div>
                </li>
                <li>
                    <div class="choose">
                        <img src="./vuesImages/yes.svg" alt="" class="yesNo">是
                    </div>
                </li>
            </ul>-->
        </div>
        <div>
            <router-link to="/fillin" style="text-decoration:none;">
                <input type="button" value="下一步" class="nextButton">
            </router-link>
        </div>
        <div class="dog">
            <img src="./vuesImages/yesNoDOG.svg" alt="">
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
.titleBox{
    margin-top: 5%;
}
.clause {
    display: flex;
    justify-content: center;
    width: 100vw;
}
ol {
    text-align: left;
    list-style-type: cjk-decimal;
    line-height: 20px;
    margin: 0px;
    padding: 0px;
}
ol li {
    margin: 20vh;
    font-size: 2vw;
    letter-spacing: 2px;
    line-height: 200%;
}
h1 {
    font-size: 3vw;
}
h1 img {
    width: 5vw;
}
/* .yesNo img{
    width: 5px;
    height: 5px;
} */
ul {
    list-style-type: none;
    text-align: right;
    line-height: 20px;
}
ul li {
    margin: 8.5vh;
    font-size: 2vw;
    letter-spacing: 2px;
    line-height: 200%;
}
.choose {
    font-size: 2vw;
    font-weight: 500;
    display: inline-block;
    width: 10vw;
}
.yesNo {
    width: 5vw;
    margin: 1vw;
    /* display: flex;
    align-items: center; */
}
.yesNoBox{
    /* margin-left: 0.1vw; */
    text-align: center;
}
.nextButton {
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
    margin-bottom: 1%
}

.nextButton:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(140, 136, 148, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
}

.nextButton:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
}

.nextButton:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
}
.dog{
    text-align: right;
}
.dog img{
    width: 15vw;
}
</style>