<template>
  <div class="app-shop">
    <search-top title="书店"></search-top>
  </div>
</template>
<style>
.app-shop .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
  width: 74px;
  height: 104px;
}
.app-shop .mui-table-view li {
  width: 33.33333%;
}
.app-shop .mui-table-view li a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>
<script>
import searchTop from "../components/Search.vue";
export default {
  data() {
    return {};
  },
  components: {
    searchTop
  }
};
</script>