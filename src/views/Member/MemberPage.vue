<template>
    <div class="container-fluid">
      <div class="row vh-100">
        <div class="row align-items-start">
          <Navbar class="col" />
        </div>
          <div class="row align-items-center">
            <div class="row row-cols-1 row-cols-md-6 g-4 justify-content-center">
              <template v-for="member in members" :key="member">
                <MemberCard v-bind="member"  />
              </template>
            </div>
          </div>
        <div class="row align-items-end">
          <Footer class="col"/>
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
                    detail: '首頁、後端',
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
                    detail: 'PM、飼料捐贈頁面',
                    url: 'https://github.com/rayrayfan',
                },
                {
                    src: 'src/views/Member/img/img_Andy.png',
                    name: 'Andy',
                    detail: '動物領養頁面',
                    url: 'https://github.com/HsuBoCheng',
                },
                {
                    src: 'src/views/Member/img/img_Amy.png',
                    name: 'Amy',
                    detail: 'UI介面素材、首頁、開發人員頁面',
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
