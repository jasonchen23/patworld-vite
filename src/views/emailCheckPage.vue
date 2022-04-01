<template>

<div class="container">
        
    <div class="d-flex justify-content-center m-0 p-0">
        <div class="card w-400 ">
            <!--  @submit.prevent="forgotPasswordPanel" -->
            <form class="form-group h-100 d-flex flex-column justify-content-between p-5">
                <h1><b>請檢查您的EMAIL</b></h1>
                <div class="form-floating m-3">
                    <input type="text" class="form-control rounded-pill" id="floatingInput" placeholder="code">
                    <label for="floatingInput">Code</label>
                   
                </div>
                <!-- v-model="user.email -->
                
                <button class="pushable">
                    <span class="front">重新設定密碼</span>
                </button>
                
            </form>
        </div>
    </div>
</div>
</template>
<style>
.card {
    background-color: rgb(241, 147, 4);
    /* height: 50vh;
    width: 100vh; */
    /* display: flex; */
    /* justify-content: center;
    align-items: center; */
    border-radius: 15%;
    /* padding-left: 100px; */
    margin: 200px;
}
.code {
        /* justify-content: center;
        align-items: center; */
        border-radius:20%;
        /* width:600px; 
        height:25px;
        margin: 150px; */
}

/* button */
.pushable {
    background: rgb(241, 199, 12);
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
  }
  .front {
    display: block;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 1.25rem;
    background: hsl(345deg 100% 47%);
    color: white;
    transform: translateY(-6px);
  }

  .pushable:active .front {
    transform: translateY(-2px);
  }
</style>
