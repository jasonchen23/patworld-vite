<script>
export default {
created() {
    this.$http
      .get("https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL")
      .then(function(data) {
        this.blogs = data.body.slice(0, 10);
      });
  },
};
</script>
