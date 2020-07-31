<template>
  <div class="container-wrapper">
    <!-- 新闻 -->
    <!--占位符 -->
    <div>
      <img src="./fenge.jpg" />
    </div>
    <div class="news-head">
      <div class="font1">新闻中心</div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新闻中心</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <test/>
    <!-- 纵向多tab 介绍 -->
    <div class="introduce">
      <el-tabs :tab-position="tabPosition" style="height: 250px;">
        <el-tab-pane label="刑侦要闻">
          <div class="main1">
            <el-table :data="tableData" height="350" border style="width: 100%">
              <el-table-column prop="pt" label="标题" width="100"></el-table-column>
              <el-table-column prop="nr" label="内容" width="100"></el-table-column>
              <el-table-column prop="sj" label="时间" width="100"></el-table-column>
              <el-table-column prop="img" label="图片" width="100"></el-table-column>
              <el-table-column prop="lb" label="列表" width="100"></el-table-column>
              <el-table-column prop="lx" label="地址"></el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="所内要闻" id="02">
          <div class="main1">
            <el-table :data="tableData" height="350" border style="width: 100%">
              <el-table-column prop="nr" label="内容" width="100"></el-table-column>
              <el-table-column prop="sj" label="时间" width="100"></el-table-column>
              <el-table-column prop="img" label="图片" width="100"></el-table-column>
              <el-table-column prop="lb" label="列表" width="100"></el-table-column>
              <el-table-column prop="lx" label="地址"></el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="支队要闻">
          <div class="main1">
            <el-table :data="tableData" height="350" border style="width: 100%">
              <el-table-column prop="sj" label="时间" width="100"></el-table-column>
              <el-table-column prop="img" label="图片" width="100"></el-table-column>
              <el-table-column prop="lb" label="列表" width="100"></el-table-column>
              <el-table-column prop="lx" label="地址"></el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
//import Test from '../../pages/news/test'
export default {
  data() {
    return {
      tabPosition: "left",
      // 具体内容建造多个tabledata
      tableData: [
        {
          pt: "2",
          nr: "",
          sj: "2018-06-21",
          img: "",
          lb: "0",
          zd: "0",
          zgr: "null",
          djl: "2",
          dj: "12",
          lx: "0",
        },
        {
          pt: "213123",
          nr: "123",
          sj: "2018-06-21",
          img: "",
          lb: "0",
          zd: "0",
          zgr: "null",
          djl: "13",
          dj: "123",
          lx: "0",
        },
      ],
    };
  },
  components: {
    //Test
    // Must,     
  }
};
</script>
<style lang="stylus" scoped>
.container-wrapper {
  width: 100%;
  margin-top: 1px;

  // border: 1px solid red;
  .news-head{
    display :flex;
    justify-content :space-between;
    align-items:center;
    .el-breadcrumb{
      margin-right :6rem;
    }
  }
  .font1 {
    font-size: 20px;
    text-align: left;
    font-weight: 600;
    margin: 1rem 5.5rem;
  }

  .font2 {
    font-size: 20px;
    text-align: right;
    font-weight: 600;
    margin: 1rem 5.5rem;
  }

  .introduce {
    margin: 0rem 5.3rem 1rem;
    width: 89%;
    border: 1px solid #e5e5ff;

    .main1 {
      border: 1px solid #e5e5ff;
      width: 90%;
      height: 190px;
      margin: 1rem;
    }
  }
}
// .el-tab-pane:active{
//   background-color :red;
// }
</style>