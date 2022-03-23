<template>
  <div class="contaner">
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>Pat World</h1>
      <router-link to="/">Home</router-link> ||
      <router-link to="/vip">VIP</router-link> || 
      <router-link to="/shop">ADOPT</router-link> || 
      <router-link to="/donate">DONATE</router-link> || 
      <router-link to="/member">MEMBER</router-link>
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>