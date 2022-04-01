<template>
    
<div class="container">
  <form>
    <div class="row mb-3">
      <label for="inputName" class="col-sm-2 col-form-label">捐贈人姓名</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputName" placeholder="自動填入" aria-label="readonly input example" readonly>
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPhone" class="col-sm-2 col-form-label">電話號碼</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputPhone" placeholder="自動填入" aria-label="readonly input example" readonly>
      </div>
    </div>
    <div class="row mb-3">
        <label for="inputEmail" class="col-sm-2 col-form-label">電子郵件</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="inputEmail" placeholder="自動填入" aria-label="readonly input example" readonly>
        </div>
      </div>

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
        <br>
        <button class="button-30" role="button" >下一步</button>
      </form>
    </div>


</template>

<style>
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