<template>
  <paginate
    v-model="page"
    :page-count="40"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'上一頁'"
    :next-text="'下一頁'"
    :container-class="'pagination'"
    :page-class="'page-item'">
  </paginate>
</template>
 
<script>
import Paginate from 'vuejs-paginate'
export default {
  components:{
      Paginate
  },
  data() {
    return {
      page: 10
    }
  }
}
</script> 