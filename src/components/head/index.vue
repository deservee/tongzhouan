<template>
  <div class="container-wrapper">
    <div class="header" style="height:120px; width:100%">
      <img src="./header.jpg" style="width:100%;height:100%" />
      <div class="logo">
        <img src="./4.png"/>
        <h4>北京市通州区机关事务服务中心</h4>
      </div>
    </div>
    <header class="header--wrapper">
      <nav class="nav-wrapper">
        <!-- <div class="logo" style="width:90px;height:90px">
          <img src="./4.png" style="width:90px;height:90px" />
        </div>-->
        <!-- <img src="./logo.png" alt /> -->
        <!-- <div class="nav sticky" role="navigation">
        <el-menu 
        :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="horizontal" 
        @select="handleSelect"
        >
          <el-menu-item index="1"><router-link to="/">网页首页</router-link></el-menu-item>
          <el-submenu index="2">
            <template slot="title"><router-link to="/news">新闻中心</router-link></template>
            <el-menu-item index="2-1"><router-link to="/news">刑侦要闻</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="/news">所内要闻</router-link></el-menu-item>
            <el-menu-item index="2-3">支队要闻</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><router-link to="/brief">相关简介</router-link></template>
            <el-menu-item index="3-1">科室介绍</el-menu-item>
            <el-menu-item index="3-2">人员信息</el-menu-item>
            <el-menu-item index="3-3">单位信息</el-menu-item>
            <el-menu-item index="3-4">单位信息</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><router-link to="/notice">公告</router-link></template>
            <el-menu-item index="4-1">通知公告</el-menu-item>
            <el-menu-item index="4-2">值班信息</el-menu-item>
            <el-menu-item index="4-3">通知通报</el-menu-item>
            <el-menu-item index="4-4">领导动态</el-menu-item>
          </el-submenu>
        </el-menu>
        </div>-->
        <div id="nav">
          <ul>
            <li class="navigation">
              <router-link to="/" class="nav1">网页首页</router-link>
            </li>
            <li class="navigation">
              <router-link to="/news" class="nav1">新闻中心</router-link>
              <ul class="nav2">
                <li>
                  <!-- <a href="#">刑侦要闻</a> -->
                  <router-link to="/news">刑侦要闻</router-link>
                </li>
                <li>
                  <router-link to="/news">所内要闻</router-link>
                  <!-- <a href="/news">所内要闻</a> -->
                </li>
              </ul>
            </li>
            <li class="navigation">
              <router-link to="/brief" class="nav1">相关简介</router-link>
              <ul class="nav2">
                <li>
                  <router-link to="/brief">科室介绍</router-link>
                  <!-- <a href="#">科室介绍</a> -->
                </li>
                <li>

                  <a href="#">人员信息</a>
                </li>
                <li>
                  <a href="#">单位信息</a>
                </li>
                <li>
                  <a href="#">单位信息</a>
                </li>
              </ul>
            </li>
            <li class="navigation">
              <router-link to="/notice" class="nav1">公告信息</router-link>
              <ul class="nav2">
                <li>
                  <router-link to="/notice">通知公告</router-link>
                  <!-- <a href="#">通知公告</a> -->
                </li>
                <li>
                  <a href="#">值班信息</a>
                </li>
                <li>
                  <a href="#">通知通报</a>
                </li>
                <li>
                  <a href="#">领导动态</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="user-wrapper" style="border:none">
          <div class="icon">
            <i class="el-icon-user-solid"></i>
          </div>
          <!--头像引用 <img :src="desc_img" alt=""> -->
          <span>{{ account }}</span>
          <!-- <router-link to="../../plugin/getData.js" class="header_login fr">登录</router-link> -->
          <a class="header_login fr" href="#">
            <span>登录</span>
          </a>
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: "headpage",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      logo_src: "assets/logo.png",
      desc_img: [
        {
          desc: "头像",
          img: "",
        },
      ],
      account: "august",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // toURL(){
    //   this.$router.push({path:'/news'})
    // }
  },
};
</script>

<style lang="stylus" scoped>
.header{
  .logo{
    width:90px;
    height:90px
    img{
      width:75px;
      height:75px;
      position:absolute;
      top:20px;
      margin-left:70px
    }
    h4{
      position:absolute;
      top:3rem;
      margin-left:200px;
      font-size:22px;
      color:#fff;
      font-weight:600
    }
  }
}
.header--wrapper {
  width: 100%;
  display: flex;
  // border-bottom: 1px solid #7D848C;
  background-color: #fff;
  line-height: 90px;
  z-index: 10;
}

.nav-wrapper {
  width: 1200px;
  height :45px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  font-size: 16px;
  #nav{
    margin :0 auto;
    width :80%;
    .nav1{
      font-size :18px;
      font-weight :600;
      color :black;
    }
  }
}

.nav-wrapper .user-wrapper {
  cursor: pointer;
  border-width: 0 1px;
  padding: 0px 8px;
  margin-left: 90px;
  display: flex;
}

.user-wrapper .icon {
  float: left;
  height: 90px;
  color: #409EFF;
}

.user-wrapper span {
  float: left;
  color: #409EFF;
  height: 90px;
  font-weight: bold;
  margin-left: 3px;
}

ul {
  display :flex;
  .navigation {
    width :25%;
    float: left;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    position: relative;
    z-index: 10;
    border-right :1px dotted #ccc;
  }
  // .navigation :hover{
  //   // background-color :blue;
  // }
}
.nav2{
  li{
    a{
      color :#fff;
    }
  }
}
.nav2 :hover{
  color :orange;
}

// /*关键一：将二级菜单设置为display：none;*/
ul li ul {
  position: absolute;
  top: 40px;
  left: 0;
  display: none;
  background-color :#3FC1E2;
  width :100%;
}
// /*关键二：在划过二级菜单从属的一级菜单时，设置为display:block;*/
ul li:hover ul {
  display: block;
}
</style>
