<template>
  <div class="component-search">
    <div class="mui-input-row mui-search">
      <div class="search-title">{{title}}</div>
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
  width: 25%;
  display: inline-block;
  line-height: 2rem;
  color: black;
  font-size:1.2rem;
  height: 2rem;
  margin: 0.5rem;
  font-family: "Avenir";
  font-weight:1000; 
}
.component-search .mui-search .mui-icon {
  margin: 0.5rem;
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