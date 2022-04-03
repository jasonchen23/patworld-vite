<template>
  <Navbar />
    <div class="container pt-5">
      <div class="row">
        <template v-for="member in members" :key="member">
          <MemberCard v-bind="member" />
        </template>
      </div>
    </div>
</template>




<script>
import Navbar from "@/components/NavbarBox.vue";
import MemberCard from "@/components/MemberCard.vue";

export default {
  components: {
    MemberCard,
    Navbar,
  },
  data() {
    return {
      members: [
                {
                    name: 'Jason',
                    detail: '首頁、後端'
                },
                 {
                    name: 'Richer',
                    detail: '會員中心、登入註冊頁面'
                },
                 {
                    name: 'Kari',
                    detail: 'PM、飼料捐贈頁面'
                },
                 {
                    name: 'Andy',
                    detail: '動物領養頁面'
                },
                {
                    name: 'Amy',
                    detail: 'UI介面素材、首頁、開發人員頁面'
                },
      ]
    }
  },
  mounted() {},
};
</script>

<style>
body {
        background: #fffaf4
      }



</style>