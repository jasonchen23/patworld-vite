<template>
<Navbar />
<div class="container pt-5">
    <div class="row">
        <div class="developer animate__animated animate__fadeInUp">
            <template v-for="member in members" :key="member">
                <MemberCard v-bind="member" />
            </template>
        </div>
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
            members: [{
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
            ]
        }
    },
    mounted() {},
};
</script>

<style>
body {
    background: rgba(255, 250, 244, 1);
}

h2 {
    font-weight: bold;
}

.developer {
    display: flex;
    justify-content: center;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 250px;
    height: 500px;
}

.container {
    justify-content: center;
    text-align: center;
}
</style>
