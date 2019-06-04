<template>
  <div class="component-search">
    <div class="mui-input-row mui-search">
      <div class="search-title">{{title}}</div>
      <!-- <input type="text" class placeholder> -->
      <div class="search-right">
        <a href="javascript:;" @click="check">
          <span class="mui-icon mui-icon-bars"></span>
        </a>
        <a href="javascript:;" @click="search">
          <span class="mui-icon mui-icon-search"></span>
        </a>
      </div>
    </div>
  </div>
</template>
<style>
.component-search .mui-search {
  background-color: #fff;
}
.component-search .mui-input-row.mui-search {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  background-color: #fff;
}

.component-search .mui-search .search-title {
  width: auto;
  display: inline-block;
  line-height: 2rem;
  color: black;
  font-size: 1.2rem;
  height: 2rem;
  margin: 0.5rem 1rem;
  background-color: #fff;
  font-family: "Avenir";
  font-weight: 1000;
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
  },
  methods: {
    check() {
      this.$router.push({path:"/tabLeft"});
    },
    search(){
      this.$router.push({path:"/SerializationList"});
    }
  }
};
</script>