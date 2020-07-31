<template> 
  <div class="footer--wrapper">
    <div class="footertop commonw">
       <ul class="footerdetails">
        <li><router-link to="/"><h3>新闻中心</h3></router-link></li>
        <li><router-link to="/">学校要闻</router-link></li>
        <li><router-link to="/">基层动态</router-link></li>
        <li><router-link to="/">媒体视角</router-link></li>
      </ul>  
      <ul class="footerdetails">
        <li><router-link to="/"><h3>相关简介</h3></router-link></li>
        <li><router-link to="/">相关介绍</router-link></li>
        <li><router-link to="/">现任领导</router-link></li>
        <li><router-link to="/">组织结构</router-link></li>
        
      </ul>  
      <ul class="footerdetails">
        <li><router-link to="/"><h3>公告信息</h3></router-link></li>
        <li><router-link to="/">通知公告</router-link></li>  
        <li><router-link to="/">校内资讯</router-link></li>  
        <li><router-link to="/">视频展播</router-link></li>  
      </ul>  
      <!--
      <div class="wrapper-right">
        <img src="./weixin.jpg" alt="二维码">  
        <p class="copy">{{ Copyright }}</p>
        <p class="format"> {{ Format }}</p>
      </div> -->
    </div>
  </div>  
</template>
<script>
export default {
  name: 'footerpage',
  data() {
    return{
      Details: [
        {
          aboutme : [    
          ]
        }  
      ],
      Copyright : 'Copyright © 2002-2019 某某集团有限公司 版权所有' ,
      Format : '网站备案号：粤ICP备9898888号' 
    }  
  }    
}
</script>
<style lang="stylus"scoped>
  .footer--wrapper {
    width: 100%;
    height: 180px;
    background-color :#A9D0F5;
  .footertop {
    margin-top: 46px;
    margin-bottom: 48px;
      .footerdetails {
        float: left ;  
        padding: 0 30px 0; 
      }
        li {
          height: 42px;
          line-height 42px;
          color: #abacb7;  
          cursor: pointer;
          
          h3 {
            font-size: 18px 
            color: #000  
          }
          a {
            color: #000
            font-size: 13px 
            font-weight: 600
          }
          a:hover {
            color: #fff
          }
        }
  }
  .wrapper-right {
    margin-top: 36px;
    float: right;  
    color: #ccc;
    line-height: 46px;
  }
  .fbommon {
    width: 100%;
    height: 54px
    line-height: 54px;
    background-color: #ccc;
  }
  }


</style>
