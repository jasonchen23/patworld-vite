<template>
    <Navbar />
    <div class="background">
    <div class="container px-4">
        <div class="row pt-5 justify-content-center">
            <button class="col mx-2" style="border-radius: 10px;" :class="{ active: currentPanel === 'EditPanel' }" @click="currentPanel = 'EditPanel'">
               <span>會員資料管理</span> 
            </button>
            <button class="col mx-2" style="border-radius:10px;" :class="{ active: currentPanel === 'ViewAdoptPanel' }" @click="currentPanel = 'ViewAdoptPanel'">
                <span>查看領養紀錄</span>
            </button>
            <button class="col mx-2" style="border-radius:10px;" :class="{ active: currentPanel === 'ViewDonatePanel' }" @click="currentPanel = 'ViewDonatePanel'">
                <span>查看捐贈紀錄</span>
            </button>
        </div>
        <div class="row pb-5 pt-5">
            <div class="col-12 mx-auto panel" style="border-radius:10px;">
                <component :is="currentPanel" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import EditPanel from '@/components/User/EditPanel.vue';
import ViewAdoptPanel from '@/components/User/ViewAdopt.vue';
import ViewDonatePanel from '@/components/User/ViewDonate.vue';
import Navbar from '@/components/NavbarBox.vue'

export default {
    components: {
        EditPanel,
        ViewAdoptPanel,
        ViewDonatePanel,
        Navbar,
    },
    data() {
        return {
            prevPath: "/member/center",
            currentPanel: 'EditPanel',
        };
    },
    // provide() {
    //     return {
    //         prevPath: this.prevPath,
    //         changePanel: this.changePanel,
    //     };
    // },
    // beforeRouteEnter(to, from, next) {
    //     next((vm) => {
    //         vm.prevPath = from.path;
    //     });
    // },
    methods: {
        changePanel(panel) {
            this.currentPanel = panel;
        },
    },
};
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300&display=swap'); */

span, button , a{
  color: #802300;
  font-family: jf-openhuninn;
}
.background {
    height: 100vh;
    background-image: url('src/views/User/img/22643016.jpg');
    background-repeat: repeat-x;
    background-size: cover;
    background-position: center;
}
button {
    /* background-image: linear-gradient(to top, rgb(200, 231, 250, 0.703), rgb(163, 212, 243)); */
    background-color: rgba(255, 255, 255, 0.701);
    /* border: 0px solid rgba(82, 71, 240, 0.3); */
    border-bottom: none;
    height: 60px;
    max-width: 250px;
}
button:hover {
  transform: scale(1.05);
  border-radius: 10px 10px 10px 10px !important;
}
button:first-of-type {
    border-right: none;
}
button.active {
    background-image:none;
    border-bottom: none;
}
.panel {
    max-width: 500px;
    border-radius: 0px 0px 10px 10px;
    background-color: #ffffff;
    box-shadow: 0px 20px 20px #ffbb7280;
    border: 1px solid #e3e3e3;;
    border-top: none;
}
</style>