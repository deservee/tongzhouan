<template>
  <div class="container-wrapper">
    <div class="imgwrapper">
      <!-- 轮播图 -->
      <div class="block">
        <el-carousel height="200px">
          <el-carousel-item v-for="item in imagesbox" :key="item.id">
            <img :src="item.idView" class="image" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!--多tab新闻 -->
    <div class="tab">
      <el-card class="box-card">
        <el-tabs v-model="activeName">
          <el-tab-pane label="新闻中心" name="center" v-model="activeName">
            <!-- <div class="news"> -->
            <div class="main">
              <!-- <img src="./p2.jpg" /> -->
              <div class="main1">
                <h5>新闻中心</h5>
                <!-- <div class="tablist">
                  <div class="shutitle" style="width: 270px;font-size: 16px;color: #112234;margin-left: 575px;font-family:STZhongsong;">
                    <span id="dat"></span>
                  </div>
                </div>     动态获取时间-->
                <!-- <button v-on:click="addDate()">获取当前时间</button> -->

                <el-collapse @change="handleChange">
                  <el-collapse-item title="一致性 Consistency" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                  </el-collapse-item>
                  <el-collapse-item title="反馈 Feedback" name="2">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                  </el-collapse-item>
                  <el-collapse-item title="效率 Efficiency" name="3">
                    <div>简化流程：设计简洁直观的操作流程；</div>
                  </el-collapse-item>
                  <el-collapse-item title="可控 Controllability" name="4">
                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                  </el-collapse-item>
                </el-collapse>
                <!-- <h5>新闻中心</h5>
                <ul class="list1">
                  <li>
                    <a class="n-text" href="#">新闻一</a>
                  </li>
                  <li>
                    <a class="n-text" href="#">新闻二</a>
                  </li>
                  <li>
                    <a class="n-text" href="#">新闻三</a>
                  </li>
                </ul>-->
              </div>
              <div class="main1">
                <h5>新闻中心</h5>
                <ul class="list1">
                  <li>
                    <router-link to="/news">新闻四</router-link>
                    <!-- <a class="n-text" href="#">新闻四</a> -->
                  </li>
                  <li>
                    <a class="n-text" href="#">新闻五</a>
                  </li>
                  <li>
                    <a class="n-text" href="#">新闻六</a>
                  </li>
                </ul>
              </div>
              <div class="main1">
                <h5>新闻中心</h5>
                <ul class="list1">
                  <li>
                    <a class="n-text" href="#">新闻七</a>
                  </li>
                  <li>
                    <a class="n-text" href="#">新闻八</a>
                  </li>
                  <li>
                    <a class="n-text" href="#">新闻九</a>
                  </li>
                </ul>
              </div>
              <!-- </div>-->
            </div>
          </el-tab-pane>
          <el-tab-pane label="新闻公告" name="notice">
            <!-- <div class="news"> -->
            <div class="main">
              <!-- <img src="./p2.jpg" /> -->
              <div class="main1">新闻公告一</div>
              <div class="main1">新闻公告二</div>
              <div class="main1">新闻公告三</div>
              <!-- </div> -->
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
    <!--占位符 -->
    <div>
      <img src="./fenge.jpg" />
    </div>
    <!--多tab党建-->
    <div>
      <el-card class="box-card">
        <el-tabs v-model="activeName">
          <el-tab-pane label="党建园地" name="center" v-model="activeName">
            <!-- <div class="news"> -->
            <div class="main">
              <!-- <img src="./p2.jpg" /> -->
              <div class="main1">
                党建园地
                <ul class="list1">
                  <li>
                    <div class="n-pic">
                      <img src="#" />
                    </div>
                    <div class="n-text">介绍</div>
                  </li>
                </ul>
              </div>
              <!-- <div class="main1"></div>
              <div class="main1"></div>-->
              <!-- </div>-->
            </div>
          </el-tab-pane>
          <el-tab-pane label="实时动态" name="notice">
            <!-- <div class="news"> -->
            <div class="main">
              <!-- <img src="./p2.jpg" /> -->
              <div class="main1">实时动态</div>
              <div class="main1"></div>
              <div class="main1"></div>
              <!-- </div> -->
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "headPage",
  data() {
    return {
      // 图片地址数组
      imagesbox: [
        { id: 0, idView: require("./banner1.jpg") },
        { id: 1, idView: require("./banner4.jpg") },
        { id: 2, idView: require("./banner1.jpg") },
        { id: 3, idView: require("./banner4.jpg") },
      ],
      isShow: "",
      activeName: "center",
      bannerHeight: 1000,
      // 浏览器宽度
      screenWidth: 0,
    };
  },
  methods: {
    setSize: function () {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = (400 / 1920) * this.screenWidth;
    },
    handleChange(val) {
      console.log(val);
    },
    // addDate(){
    //   nowDate = new Date();
    //   let date = {
    //     year:nowDate.getFullYear(),
    //     mouth:nowDate.getMonth()+1,
    //     date:nowDate.getDate(),
    //   }
    //   console.log(date);
    //   let systemDate = date.year + '-' + 0 + date.mouth + '-' + 0 + date;
    // }
  },
  mounted() {
    // 首次加载时,需要调用一次
    this.screenWidth = window.innerWidth;
    this.setSize(); // 窗口大小发生改变时,调用一次
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
      this.setSize();
    };
    // this.addDate()
  },
};
</script>
<style lang="stylus" scoped>
.container-wrapper {
  width: 100%;
  margin-top: 1px;

  /* background: rgba(0, 0, 0, 0.3); */
  .imgwrapper {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .box-card {
    height: 450px;
    margin: 1rem 5rem;
    width: 88%;

    .main {
      display: flex;
      margin: 0 2rem;
      height: 350px;
      width: 95%;

      // border: 1px solid red;
      .main1 {
        margin: 2rem 1rem 0.5rem;
        width: 98%;
        height: 300px;
        border: 1px solid #e5e5ff;

        // background :#e5e5ff;
        h5 {
          font-size: 16px;
          padding: 2px;
        }

        ul {
          height: 500px;

          li {
            width: 98%;
            margin-bottom: 1rem;
            border: 1px solid #e5e5ff;
            display: inline-block;
            height :30px

            .n-pic {
              width: 200px;
              height: 150px;
              border: 1px solid #e5e5ff;
              float: left;
            }

            .n-text {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
