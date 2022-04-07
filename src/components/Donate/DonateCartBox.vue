<template>
<template v-for="buyitem in buyitems" v-bind:buy_data="buyitem">
  <h5 v-if="total()">Sum: $ {{total()}}</h5>
</template>
