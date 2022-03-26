<template> <!--開發人員頁面，若要從資料庫拿開發人員資料，則做成Component；無則直接以此頁面寫下去即可 -->
    <Navbar />
    <div class="container">
        <div class="row"><!--4人可做成兩種風格做穿插 -->
            <div class="d-flex card"></div>
        </div>
    </div>
</template>

<script setup>
import Navbar from '@/components/NavbarBox.vue';
// export default {

// }
</script>

<style>

</style>