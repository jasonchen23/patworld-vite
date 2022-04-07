<template>
<div class="background">
    <div class="container px-4">
        <div class="row pt-5 justify-content-center">
            <button class="col-6" style="border-radius: 10px 0 0 0;" :class="{ active: currentPanel === 'SignupPanel' }" @click="currentPanel = 'SignupPanel'">
               <span> 註冊會員</span> 
            </button>
            <button class="col-6" style="border-radius:0 10px 0 0;" :class="{ active: currentPanel === 'LoginPanel' }" @click="currentPanel = 'LoginPanel'">
                <span>會員登入</span>
            </button>
        </div>
        <div class="row pb-5">
            <div class="col-12 m-auto panel">
                <component :is="currentPanel" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import LoginPanel from '@/components/User/LoginPanel.vue';
import SignupPanel from '@/components/User/SignupPanel.vue';

export default {
    components: {
        LoginPanel,
        SignupPanel,
    },
    data() {
        return {
            prevPath: null,
            currentPanel: 'LoginPanel',
        };
    },
    provide() {
        return {
            prevPath: this.prevPath,
            changePanel: this.changePanel,
        };
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.prevPath = from.path;
        });
    },
    methods: {
        changePanel(panel) {
            this.currentPanel = panel;
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300&display=swap');
span{
  font-family: 'Red Hat Mono', monospace;
}
.background {
    height: 100vh;
    background-image: linear-gradient(to right, rgb(1 134 218), rgb(182 49 167));
}

button {
      background-image: linear-gradient(to top, rgb(200, 231, 250, 0.703), rgb(163, 212, 243));
    background-color: rgba(255, 255, 255, 0.701);
    border: 0px solid rgba(82, 71, 240, 0.3);
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
    background-color: rgba(255, 255, 255, 0.701);
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(128, 128, 128, 0.3);
    border-top: none;
}
</style>
