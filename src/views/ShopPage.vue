<template>
    <Navbar />

    <Product v-for="product in products" />
</template>

<script>
import Navbar from '@/components/NavbarBox.vue'
import Product from '@/components/ProductBox.vue'
export default {
    components: {
        Navbar,
        Product
    },
}
</script>

<style>

</style>