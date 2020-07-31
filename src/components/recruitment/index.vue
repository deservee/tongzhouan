<template>
  <div class="rec-wrapper">
    <el-row class="rew-info">
      <el-col :span="8" class="info-wrapper">
          网站美工
      </el-col>
      <el-col :span="8" class="info-wrapper">
          研发项目经理  
      </el-col>
      <el-col :span="8" class="info-wrapper">
          网管理员
      </el-col>
       <el-col :span="8" class="info-wrapper">
          运营总监
      </el-col>
      <el-col :span="8" class="info-wrapper">
          华东销售经理
      </el-col>
      <el-col :span="8" class="info-wrapper">
          产品经理
      </el-col>
    </el-row>  
  </div>     
</template>
<script>
export default {
  name: 'recruitment'    
}
</script>

<style lang="stylus">
  .rec-wrapper {
    width: 1200px;
    .rew-info {
       width: 100%; 
       float: left;
       border: 1px solid #ccc;  
       .info-wrapper {
         height: 360px;  
         border: 1px solid #ccc; 
         line-height: 360px;    
       }  
    }
  }
</style>