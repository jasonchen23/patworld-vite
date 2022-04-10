<template>
    <div class="body container">
        <Navbar />
        <div class="titleBox">
            <h1>
                <img src="./vuesImages/肉球.svg" />
                愛心犬貓認養須知
                <img src="./vuesImages/肉球.svg" />
            </h1>
        </div>
        <div class="clause">
            <form action>
                <ol>
                    <li>
                        <div class="row">
                            <div class="col-sm-10 col-12">
                                您是否看過犬貓之行為健康評估表?
                                <br />且與管理人員或志工討論過該犬貓之狀況？
                            </div>
                            <div class="col-sm-2 col-12 yesNoBox1">
                                <img src="./vuesImages/no.svg" class="yesNo yesNo1" />
                                <span id="yesNoText1" class="no">否</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-sm-10 col-12">
                                您是否知道犬貓的健康有許多不確定的風險?
                                <br />且您是否了解當牠生病時立即就醫治療是飼主的責任?
                            </div>
                            <div class="col-sm-2 col-12 yesNoBox2">
                                <img src="./vuesImages/no.svg" alt class="yesNo yesNo2" />
                                <span id="yesNoText2" class="no">否</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-sm-10 col-12">
                                犬貓將近有15年的壽命，您是否了解無論人事物的演變
                                <br />(例如:結婚生子 搬家出國 當兵 都不足以構成棄養的原因!)
                            </div>
                            <div class="col-sm-2 col-12 yesNoBox3">
                                <img src="./vuesImages/no.svg" alt class="yesNo yesNo3" />
                                <span id="yesNoText3" class="no">否</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-sm-10 col-12">
                                您是否了解飼養動物需要適當的居家條件?
                                <br />(請考量套房 公寓 大樓 的飼養空間)
                            </div>
                            <div class="col-sm-2 col-12 yesNoBox4">
                                <img src="./vuesImages/no.svg" alt class="yesNo yesNo4" />
                                <span id="yesNoText4" class="no">否</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-sm-10 col-12">
                                您是否同意無共識前絕不認養，以免造成心理負擔，
                                <br />且認養犬貓的決定已經獲得房東/家人/室友的同意?
                            </div>
                            <div class="col-sm-2 col-12 yesNoBox5">
                                <img src="./vuesImages/no.svg" alt class="yesNo yesNo5" />
                                <span id="yesNoText5" class="no">否</span>
                            </div>
                        </div>
                    </li>
                </ol>
            </form>
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
            <button id="button" class="nextButton">下一步</button>
        </div>
        <div class="dog">
            <img src="./vuesImages/yesNoDOG.svg" alt />
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/NavbarBox.vue'
export default {
    components: {
        Navbar,
    },
    data() {
        return {
            allCheck: false
        }
    },
    mounted() {
        var toggle1 = true, toggle2 = true, toggle3 = true, toggle4 = true, toggle5 = true;
        $(".yesNoBox1").click(function () {

            if (toggle1) {
                $(".yesNo1").attr("src", "src/views/Adopt/vuesImages/yes.svg");
                $("#yesNoText1").html("是");
                $("#yesNoText1").attr("class", "yes")
                toggle1 = false;
                console.log(toggle1);
            } else {
                $(".yesNo1").attr("src", "src/views/Adopt/vuesImages/no.svg");
                $("#yesNoText1").html("否");
                $("#yesNoText1").attr("class", "no");
                toggle1 = true;
                console.log(toggle1);
            }
        });

        $(".yesNoBox2").click(function () {
            if (toggle2) {
                $(".yesNo2").attr("src", "src/views/Adopt/vuesImages/yes.svg");
                $("#yesNoText2").html("是");
                $("#yesNoText2").attr("class", "yes")
                toggle2 = false;
            } else {
                $(".yesNo2").attr("src", "src/views/Adopt/vuesImages/no.svg");
                $("#yesNoText2").html("否");
                $("#yesNoText2").attr("class", "no");
                toggle2 = true;
            }
        });

        $(".yesNoBox3").click(function () {
            if (toggle3) {
                $(".yesNo3").attr("src", "src/views/Adopt/vuesImages/yes.svg");
                $("#yesNoText3").html("是");
                $("#yesNoText3").attr("class", "yes");
                toggle3 = false;
            } else {
                $(".yesNo3").attr("src", "src/views/Adopt/vuesImages/no.svg");
                $("#yesNoText3").html("否");
                $("#yesNoText3").attr("class", "no");
                toggle3 = true;
            }
        });

        $(".yesNoBox4").click(function () {
            if (toggle4) {
                $(".yesNo4").attr("src", "src/views/Adopt/vuesImages/yes.svg");
                $("#yesNoText4").html("是");
                $("#yesNoText4").attr("class", "yes");
                toggle4 = false;
            } else {
                $(".yesNo4").attr("src", "src/views/Adopt/vuesImages/no.svg");
                $("#yesNoText4").html("否");
                $("#yesNoText4").attr("class", "no");
                toggle4 = true;
            }
        });

        $(".yesNoBox5").click(function () {
            if (toggle5) {
                $(".yesNo5").attr("src", "src/views/Adopt/vuesImages/yes.svg");
                $("#yesNoText5").html("是");
                $("#yesNoText5").attr("class", "yes");
                toggle5 = false;
            } else {
                $(".yesNo5").attr("src", "src/views/Adopt/vuesImages/no.svg");
                $("#yesNoText5").html("否");
                $("#yesNoText5").attr("class", "no");
                toggle5 = true;
            }
        });

        $("#button").click(function () {
            // var allCheck = allCheck;
            // var allCheck = false;
            if (toggle1 == false && toggle2 == false && toggle3 == false && toggle4 == false && toggle5 == false) {
                // this.allCheck = true;
                // console.log(this.allCheck);
                // this.$router.push({ name: 'fillin' });
                // return this.allCheck;
                // this.$router.push({ name: 'fillin' });
                this.$router.push({ name: 'fillin' });
            }
            else {
                alert("請確認")
            }
        });
    },
    // methods: {
    //     check: function () {
    //         console.log(toggle1)
    //         if (this.toggle1 == false && this.toggle2 == false && this.toggle3 == false && this.toggle4 == false && this.toggle5 == false) {
    //             this.$router.push({ name: 'fillin' });
    //         }else {
    //             alert("請確認")
    //         } 
    //     },
        // check() {
        //     if (this.allCheck == true) {
        //         this.$router.push({ name: 'fillin' });
        //     }else {
        //         alert("請確認")
        //     } 
        // },
    // },
};


</script>

<style scoped>
.titleBox {
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
    text-align: center;
    /* display: flex;
    align-items: center; */
}
.yesNoBox1,
.yesNoBox2,
.yesNoBox3,
.yesNoBox4,
.yesNoBox5 {
    /* margin-left: 0.1vw; */
    text-align: center;
    /* width: 156px; */
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
    height: 80px;
    width: 200px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
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
.dog {
    text-align: right;
}
.dog img {
    width: 15vw;
}
</style>