<template> <!--開發人員頁面，若要從資料庫拿開發人員資料，則做成Component；無則直接以此頁面寫下去即可 -->
    <Navbar />
    <MemberCard />
    
</template>




// export default {

// }
</script>
<script>
import Navbar from '@/components/NavbarBox.vue';
import MemberCard from '@/components/MemberCard.vue';

export default {
    components:{
        MemberCard,Navbar
    },
    data(){
        return{
            memberlist:[
                {}
            ],


        }
    },
    mounted(){

    }
}
</script>
<style>

</style>