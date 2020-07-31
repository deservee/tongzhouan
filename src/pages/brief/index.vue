<template>
  <div class="container-wrapper">
    <!-- <img src="./p1.jpg" alt="二维码">    相关简介   -->
    <!--占位符 -->
    <div>
      <img src="./fenge.jpg" />
    </div>
    <div class="brief-head">
      <div class="font1">相关简介</div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>相关简介</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 纵向多tab 介绍 -->
    <div class="introduce">
      <el-tabs :tab-position="tabPosition" style="height: 750px;">
        <el-tab-pane label="科室介绍">
          <div class="main1">
            <!-- <el-table :data="tableData2" height="350" border style="width: 100%">
              <el-table-column prop="depart" label="科室信息" width="180"></el-table-column>
            </el-table>-->
            <ul class="list1">
              <li>
                <div class="n-pic">
                  <img src="./zhuanlan.png" />
                </div>
                <div class="n-text">科室1介绍</div>
              </li>
              <li>
                <div class="n-pic">
                  <img src="#" />
                </div>
                <div class="n-text">科室2介绍</div>
              </li>
              <li>
                <div class="n-pic">
                  <img src="#" />
                </div>
                <div class="n-text">科室3介绍</div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="人员信息">
          <div class="main1">
            <ul class="list1">
              <li>
                <div class="n-pic">
                  <img src="#" />
                </div>
                <div class="n-text">领导1介绍领导1介绍领导1介绍领导1介绍领导1介绍领导1介绍</div>
              </li>
              <li>
                <div class="n-pic">
                  <img src="./zhuanlan.png" />
                </div>
                <div class="n-text">领导2介绍领导2介绍领导2介绍领导2介绍领导2介绍领导2介绍</div>
              </li>
              <li>
                <div class="n-pic">
                  <img src="#" />
                </div>
                <div class="n-text">领导3介绍领导3介绍领导3介绍领导3介绍领导3介绍领导3介绍</div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="单位信息">
          <div class="main1">
            <el-table :data="tableData" height="350" border style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="房间信息">
          <div class="main1">
            房间信息
            <el-table :data="tableData1" height="350" border style="width: 100%">
              <el-table-column prop="fjid" label="房间编号" width="180"></el-table-column>
              <el-table-column prop="fjmc" label="房间名称" width="180"></el-table-column>
              <el-table-column prop="fjnum" label="房间号" width="180"></el-table-column>
              <el-table-column prop="fjmj" label="房间" width="180"></el-table-column>
              <el-table-column prop="bz" label="布置" width="180"></el-table-column>
              <el-table-column prop="fjsx" label="房间属性"></el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabPosition: "left",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],

      tableData1: [
        {
          fjid: "1",
          fjmc: "房间1",
          fjnum: "101",
          fjmj: "15",
          bz: "1",
          fjsx: "张三",
        },
        {
          fjid: "2",
          fjmc: "房间2",
          fjnum: "102",
          fjmj: "25",
          bz: "2",
          fjsx: "李四",
        },
        {
          fjid: "3",
          fjmc: "会议室",
          fjnum: "201",
          fjmj: "50",
          bz: "无",
          fjsx: "服务用房",
        },
      ],
      tableData2: [
        {
          depart: "科室1",
        },
        {
          depart: "科室2",
        },
      ],
    };
  },
};
</script>
<style lang="stylus" scoped>
.container-wrapper {
  width: 100%;
  margin-top: 1px;
  // border: 1px solid red;
  .brief-head{
    display :flex;
    justify-content :space-between;
    align-items :center;
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
    border: 1px solid  #e5e5ff;
    height: 600px;

    .main1 {
      //border: 1px solid yellow;
      width: 90%;
      height: 500px;
      margin: 1rem;

      ul {
        //height: 500px;

        li {
          width: 100%;
          margin-bottom: 1rem;
          border: 1px solid #e5e5ff;
          display: inline-block;

          .n-pic {
            width: 200px;
            height: 150px;
            //border: 1px solid red;
            float: left;

            img {
              width: 100%;
              height: 100%;
            }
            // img:hover {
            //   transform: scale(1.1);
            // }
          }

          .n-text {
            font-size: 20px;
          }
        }
        li:hover{
          transform: scale(1.01);
        }
      }
    }
  }
}
</style>