<template>
  <div class="app-topic">
    <div class="app-topic-container">
      <div class="app-topic-scroll">
        <div class="mui-card" v-for="i of 5" :key="i">
          <div class="topic-header">
            <a class="topic-header-title">长篇连载榜</a>
            <a class="topic-header-more">更多》</a>
          </div>
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <div href class="topic-content" v-for="(item) of 10" :key="item">
                <a class="topic-content-title">
                  <span class="topic-content-title-order">{{item}}</span>
                  <img src="../assets/images/003_13.png" alt>
                  <a class="topic-content-title-book">
                    <span>锦书来</span>
                    <span>XXX</span>
                  </a>
                </a>
                <span class="mui-badge mui-badge-warning">言情女性</span>
                <!-- <span class="topic-content-type">言情女性</span> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.app-topic .mui-card .topic-header {
  display: flex;
  justify-content: space-between;
  padding: 15px 15px 0px 15px;
}
.app-topic .topic-header-title {
  font-size: 0.875rem;
  font-weight: bold;
}
.app-topic .topic-header-more {
  font-size: 0.875rem;
}

.app-topic-container {
  width: 100%;
  max-width: 1200px;
}
.app-topic-scroll {
  display:-webkit-box;
  white-space: nowrap;
  overflow-x: scroll;
}
.app-topic-scroll::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}
a {
  text-decoration: none;
  color: inherit;
}
.app-topic .mui-card-content .mui-card-content-inner {
  padding: 5px 15px 5px 5px;
}
.app-topic .mui-card {
  width: 280px;
}
.topic-content {
  flex: 3;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0px;
}
.topic-content .topic-content-title {
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.topic-content .topic-content-title img {
  height: 100%;
  margin: 5px;
}
.topic-content-title .topic-content-title-order {
  font-weight: bold;
  padding: 5px;
}
.topic-content-title .topic-content-title-book {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 5px;
  padding: 10px;
  font-size: 0.875rem;
}
.topic-content .topic-content-type {
  font-size: 0.875rem;
}
</style>
<script>
export default {
  data() {
    return {};
  }
};
</script>




