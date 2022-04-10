<template>
  <Navbar />
  <div class="background">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
            <div class="card mt-5">
              <h1><strong>捐贈人資料</strong></h1>
              <form>
                <div class="row mb-3 mt-4">
                  <label for="inputName" class="col-sm-2 col-form-label">捐贈人姓名</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputName" placeholder="必填">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputPhone" class="col-sm-2 col-form-label">電話號碼</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPhone" placeholder="必填">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail" class="col-sm-2 col-form-label">電子郵件</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmail" placeholder="必填">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail" class="col-sm-2 col-form-label">捐贈機構</label>
                  <div class="col-sm-10">
                    <select class="form-control">
                        <option>請選擇</option>
                        <option>王阿姨流浪動物狗園</option>
                        <option>流浪貓兒狗兒的阿嬤</option>
                        <option>張媽媽流浪動物之家</option>
                        <option>屏東涼山陳晨愛媽狗園</option>
                        <option>蔡媽媽狗園</option>
                        <option>看得見春天的八里狗園</option>
                        <option>屏東黃雪媽媽狗園</option>
                        <option>公館葉媽媽狗園</option>
                        <option>虎頭山之愛狗園</option>
                    </select>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail" class="col-sm-2 col-form-label">付款方式</label>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="creditcard" value="option1">
                    <label class="form-check-label" for="inlineRadio1">信用卡</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="linepay" value="option2">
                    <label class="form-check-label" for="inlineRadio2">Line pay</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="transfer" value="option3">
                    <label class="form-check-label" for="inlineRadio3">轉帳</label>
                  </div>
                </div>
                <br>

                <router-link to="/donate/done">
                  <button class="button-30" type="button">送出</button>
                </router-link>
                <router-view></router-view>

              </form>
            </div>
          </div>
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

<style>
.background {
    height: 100vh;
    background-color: rgb(134, 155, 100);
}
    .button-30 {
      align-items: center;
      margin-top: auto;
      margin-bottom: auto;
      appearance: none;
      background-color: #FCFCFD;
      border-radius: 4px;
      border-width: 0;
      box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
      box-sizing: border-box;
      color: #36395A;
      cursor: pointer;
      display: inline-flex;
      font-family: "JetBrains Mono",monospace;
      height: 48px;
      justify-content: center;
      line-height: 1;
      list-style: none;
      overflow: hidden;
      padding-left: 16px;
      padding-right: 16px;
      position: relative;
      text-align: left;
      text-decoration: none;
      transition: box-shadow .15s,transform .15s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      white-space: nowrap;
      will-change: box-shadow,transform;
      font-size: 18px;
    }

    .button-30:focus {
      box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }

    .button-30:hover {
      box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
      transform: translateY(-2px);
    }

    .button-30:active {
      box-shadow: #D6D6E7 0 3px 7px inset;
      transform: translateY(2px);
    }
</style>