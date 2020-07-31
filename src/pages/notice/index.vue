<template>
  <div class="container-wrapper">
    <!-- <img src="./p1.jpg" alt="二维码">    公告   -->
    <!--占位符 -->
    <div>
      <img src="./fenge.jpg" />
    </div>
    <div class="notice-head">
      <div class="font1">公告</div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>公告</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 纵向多tab 介绍 -->
    <div class="introduce">
      <el-tabs :tab-position="tabPosition" style="height: 50%;">
        <el-tab-pane label="通知公告" @click="getData()">
          <div class="main1">
            <!-- <p v-model="rowtp.text"></p> -->
            <p style="text-align:left;font-size:16px;text-indent:28px;line-height:34px">北京卫生职业学院是经北京市人民政府批准、国家教育部备案的一所全日制普通高等学校，隶属于北京市卫生和计划生育委员会。学院以科学发展观为统领，全面贯彻党的教育方针，坚持“以人为本、德育为先、质量为重”的办学宗旨，以强化内涵建设，提升师生综合素质为重点，以办成全国一流且具有国际水平的高等卫生职业院校为目标，以培养“专业型、实用型、国际型”高等医药卫生技术人才为方向，积极稳步探索具有高等职业教育特色、适合学院发展的改革之路。</p>
            <p style="text-align:left;font-size:16px;text-indent:28px;line-height:34px">学院现有全日制在校学生近5200人，非全日制成人教育学生5800余人；2016年1月系部制改革，成立五系一部，分别为护理系、药学系、医学技术系、相关医学与管理系、中药与康复系，文化基础部。设有护理、药学、中药、医学检验技术、康复治疗技术、医学影像技术、医疗仪器维修技术、助产、药剂、口腔医学技术、口腔修复工艺、卫生信息管理、中医康复技术、中医康复保健等14个专业。现有教职工520人，专任教师256人，其中高级职称教师103人，中级职称教师209人，双师型教师125人。有全国优秀教师1人，北京市优秀教师6人，北京市优秀教育工作者1人，北京市职业院校职教名师2人，北京市职业院校专业带头人2人，北京市职业院校专业创新团队3个，北京市职业院校优秀青年骨干教师41人，北京高等学校青年英才计划9人，名老中医继承人1人，北京卫生系统“十百千”优秀人才工程“百”层次卫生人才2人。</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="值班信息">
          <div class="main1" v-html="message">{{message}}</div>
        </el-tab-pane>
        <el-tab-pane label="通知通报">
          <div class="main1">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="pt" label="标题" width="100"></el-table-column>
              <el-table-column prop="nr" label="内容" width="100"></el-table-column>
              <el-table-column prop="sj" label="时间" width="100"></el-table-column>
              <el-table-column prop="img" label="图片" width="100"></el-table-column>
              <el-table-column prop="lb" label="列表" width="100"></el-table-column>
              <el-table-column prop="lx" label="地址"></el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="领导动态">
          <div class="main1">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="nr" label="内容" width="100"></el-table-column>
              <el-table-column prop="sj" label="时间" width="100"></el-table-column>
              <el-table-column prop="img" label="图片" width="100"></el-table-column>
              <el-table-column prop="lb" label="列表" width="100"></el-table-column>
              <el-table-column prop="lx" label="地址"></el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="search">
      <el-form :model="searchForm">
        <!-- 公告 -->
        <el-form-item v-model="searchForm.nr"></el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// import getData from '../../plugin/getData'
export default {
  data() {
    return {
      searchForm: {},
      tabPosition: "left",
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
      message: "这里是值班信息",
    };
  },
  methods: {
    // getData(){
    //   // var api=''
    //   Axios.pos('/test')
    //   .then((response)=>{
    //     this.message=response.data.result
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
    // }
  },
};
</script>
<style lang="stylus" scoped>
.container-wrapper {
  width: 100%;
  margin-top: 1px;
  //border: 1px solid red;
  .notice-head{
    display :flex;
    justify-content :space-between;
    align-items: center;
   .el-breadcrumb{
      margin-right :6rem;
      font-family :"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
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

    .main1 {
      border: 1px solid #e5e5ff;
      width: 90%;
      //height: 190px;
      margin: 1rem;
    }
  }
}
</style>