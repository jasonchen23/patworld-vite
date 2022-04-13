<template>
  <Navbar />
  
    <div class="container">
      <div class="row">
        <div class="col-md-12">
            <div class="card">
              <div class="h1 mt-4"><strong>捐贈人資料</strong></div>
              <form>
                <div class="row mb-3 mt-4">
                  <label for="inputName" class="col-sm-2 col-form-label">捐贈人姓名</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputName" placeholder="必填" aria-label="readonly input example" readonly>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputPhone" class="col-sm-2 col-form-label">電話號碼</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPhone" placeholder="必填" aria-label="readonly input example" readonly>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail" class="col-sm-2 col-form-label">電子郵件</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmail" placeholder="必填" aria-label="readonly input example" readonly>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail" class="col-sm-2 col-form-label">捐贈機構</label>
                  <div class="col-sm-10">
                    <select class="form-control" v-model="shelter">
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
                  <div class="col-sm-10 ">
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
                </div>
                <br>

                <router-link to="/donate/done">
                  <button class="button-30" type="summit" @click="donate">送出</button>
                </router-link>
                <router-view></router-view>

              </form>
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
  data(){
    return{
      shelter:''
    }
  },

  methods: {
    donate(){
    this.$axios.post('/api/donate', 
    {userId:this.$store.state.userId,
    dog:this.$store.state.amount[0],
    puppy:this.$store.state.amount[1],
    cat:this.$store.state.amount[2],
    kitty:this.$store.state.amount[3],
    shelter:this.shelter
    }).then(() => {
                    this.$swal('捐贈成功')
                })
                .catch((error) => {
                    if (error.response.data.message === 'error')
                        console.log(error)
                });
    }

    },
  }

</script>

<style scoped>
    
</style>