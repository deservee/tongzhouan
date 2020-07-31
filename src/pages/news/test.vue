<template>
  <div>
    <h5>TEST</h5>
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
        <el-tab-pane label="所内要闻">
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
export default {};
</script>
<style>
</style>