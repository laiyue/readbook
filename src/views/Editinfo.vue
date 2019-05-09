<template>
  <div class="app-editinfo">
    <header class="mui-bar mui-bar-nav">
      
      <h1 class="mui-title"><span class="mui-icon mui-icon-left-nav" @click="goback"></span>我的账号</h1>
    </header>
    <div class="content">
      <div class="info head-img">
        <span>头像</span>
        <img :src="head_img" alt>
        <span class="mui-icon mui-icon-camera">
          <input type="file" class="files" @change="editPic" name="mypic" id="mypic">
        </span>
      </div>
      <div class="info nickname">
        <span>昵称</span>
        <span>{{nickname}}</span>
        <span class="mui-icon mui-icon-compose"></span>
      </div>
      <button class="button" @click="loginout">退出登录</button>
    </div>
    <div class="fooler">
      <p>本账号由豆瓣提供</p>
      <p>
        如需修改其他设置项，请
        <span>前往豆瓣</span>进行设置
      </p>
    </div>
  </div>
</template>
<style>
.app-editinfo .mui-bar .mui-title {
  text-align: left;
  left: 10px;
  width: 100%;
}
.app-editinfo .info {
  padding: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  align-items: center;
}
.app-editinfo .mui-icon-camera {
  position: relative;
}
.files {
  opacity: 0;
  position: absolute;
  z-index: 99;
  margin-left: -100%;
  width: 100%;
  height: 100%;
}
.app-editinfo .info span {
  height: 24px;
  line-height: 24px;
}
.app-editinfo .info img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  box-shadow: 0 0 1px 1px #42b983;
}
.app-editinfo {
  height: 100%;
  position: relative;
  padding-top: 3.8rem;
}
.app-editinfo .content {
  height: 100%;
}
.app-editinfo .button {
  width: 60%;
  margin: 2rem auto;
  border: #ddd 1px solid;
  color: #42b983;
}
.app-editinfo .fooler {
  bottom: 1rem;
  position: absolute;
  width: 100%;
}
.app-editinfo .fooler p {
  text-align: center;
  font-size: 0.7rem;
  height: 20px;
  line-height: 20px;
  margin-bottom: 0px;
}
</style>
<script>
export default {
  data() {
    return {
      nickname: "",
      head_img: ""
    };
  },
  created() {
    //console.log(this.$route.query);
    this.nickname=this.$route.query.nickname;
    this.head_img=this.$route.query.head_img;
   
  },
  methods: {
    loginout() {
      this.axios("http://localhost:3000/readbookapi/loginout").then(res => {
         this.$router.push({path:"/login"});
      });
    },
    editPic(e) {
      if(confirm("是否确定保存？")){
 var fd = new FormData();
      let files = e.target.files;
      console.log(files[0]);
      fd.append("mypic", files[0]);
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      let uploadUrl = "http://localhost:3000/upload/uploadFiles";
      this.axios
        .post(uploadUrl, fd, config)
        .then(res => {
          if(res.data.head_img){
            this.head_img="http://localhost:3000"+res.data.head_img.replace("/public","");
            //console.log(this.head_img);
          }
        })
        .catch(res => {
          console.log(res);
        });
      }
     
    },
    goback(){
      this.$router.push({path:"PersonalCenter"});
    }
  }
};
</script>