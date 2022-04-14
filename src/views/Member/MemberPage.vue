<template>
    <div class="container-fluid">
      <div class="row vh-100">
        <div class="row align-items-start">
          <Navbar class="col" />
        </div>
          <div class="row align-items-center p-5">
            <div class="row justify-content-center row-cols-1 row-cols-md-6">
              <template v-for="member in members" :key="member">
                <MemberCard v-bind="member"  />
              </template>
            </div>
          </div>
        <div class="row align-items-end">
          <Footer class="pt-5 col"/>
        </div>
      </div>
    </div>
</template>



<script>
import Navbar from "@/components/NavbarBox.vue";
import MemberCard from "@/components/Member/MemberCard.vue";
import Footer from "@/components/FooterBox.vue";


export default {
  components: {
    MemberCard,
    Navbar,
    Footer,
  },
  data() {
    return {
      members: [
                {
                    src: 'src/views/Member/img/img_Jason.jpg',
                    name: 'Jason',
                    detail_frontend: '3D首頁開發、會員系統',
                    detail_backend: '資料庫建置、API開發、架設AP&DB SERVER',
                    detail: '專案版本控管與整合、繪製服務流程圖&網路架構圖',
                    url: 'https://github.com/jasonchen23',
                },
                // {
                //     src: 'src/views/Member/img/img_Richer.png',
                //     name: 'Richer',
                //     detail: '會員中心、登入註冊頁面',
                //     url: 'https://github.com/Richeryuan',
                // },
                {
                    src: 'src/views/Member/img/img_Kari.png',
                    name: 'Kari',
                    detail_frontend: '飼料捐贈系統、API串接',
                    // detail_backend: '捐贈系統API串接',
                    detail: 'PM、wireframe、測試報告書、PPT整合、資料蒐集',
                    url: 'https://github.com/rayrayfan',
                },
                {
                    src: 'src/views/Member/img/img_Andy.png',
                    name: 'Andy',
                    detail_frontend: '動物領養系統、API串接',
                    // detail_backend: '領養系統API串接',
                    detail: '企劃書撰寫、測試報告書撰寫、資料蒐集',
                    url: 'https://github.com/HsuBoCheng',
                },
                {
                    src: 'src/views/Member/img/img_Amy.png',
                    name: 'Amy',
                    detail_frontend: '首頁、開發人員、CSS整合',
                    // detail_backend: 'API串接',
                    detail: 'UI素材製作、資料蒐集、文案撰寫',
                    url: 'https://github.com/zh1x277',
                },
      ]
    }
  },
  mounted() {},
};
</script>

<style  scoped>


body {
  background: #fcfcfd;
  font-family: jf-openhuninn;
  color: #802300;
}

</style>
