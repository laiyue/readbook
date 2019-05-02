<template>
  <div class="component-search">
    <div class="mui-input-row mui-search">
      <h4 class="search-title">{{title}}</h4>
      <input type="text" class placeholder>
      <span class="mui-icon mui-icon-bars"></span>
      <span class="mui-icon mui-icon-search"></span>
    </div>
  </div>
</template>
<style>
.component-search .mui-search {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  background-color: #fff;
}
.component-search .mui-search input[type="text"] {
  background-color: #fff;
  height: 30px;
  border: none;
}
.component-search .mui-search .search-title {
  width: 20%;
  display: inline-block;
  line-height: 34px;
  color: black;
  margin: 1rem;
}
.component-search .mui-search .mui-icon {
  margin: 1rem;
}
</style>
<script>
export default {
  props: ["title"],
  data() {
    return {};
  }
};
</script>