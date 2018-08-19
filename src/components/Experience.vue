<template>
  <div class="jump">
    <div class="content">
      <p class="experience">经验</p>
      <div class="main">
        <ul class="time-axis">
          <li class="time-axis-item" v-for="items in dimeAxis">
            <div class="time-axis-date">
              {{items.date}}
              <span></span>
            </div>
            <div class="time-axis-title">{{items.title}}</div>
            <p class="time-axis-achievement">{{items.achievement}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from '../assets/js/jquery1-12.min'
  import animate from 'animate.css'
  export default {
    data(){
      return {
        num:0,
        dimeAxis:[{
          date:'2015.09',
          title:'初涉软件工程行业',
          achievement:'从简单的C语言开始'
          },
          {
            date:'2017.02',
            title:'前端知识小成',
            achievement:'熟练掌握HTML、CSS，熟悉JavaScript，能熟悉运用jQuery框架，bootstrap框架，了解了vue.js、node.js、微信小程序'
          },
          {
            date:'2017.04',
            title:'微信公众号前端制作 ',
            achievement:'与个人达成协议，制作医疗调查问卷微信公众号，不过因某些原因此公众号已经不在'
          },
          {
            date:'2017.08',
            title:'恒升集团的官网前端制作',
            achievement:''
          },
          {
            date:'2018.04',
            title:'宜宾美华孵化园前端制作，暂时还没有更换',
            achievement:'http://www.ybmeihua.com/'
          },
          {
            date:'2018.05',
            title:'宜宾市民爆从业人员模拟考试试题作答网',
            achievement:'www.hyu2724730001.my3w.com'
          }]
      }
    }
  }
</script>
<style scoped>
  .content{margin-top:50px;}
  .experience{margin:0 auto;padding:10px 5%;font-family: 'PingFang SC';border:1px solid #ce7501;width:220px;text-align: center;font-size:30px;font-weight:bold;letter-spacing: 1px;}
  .main{
    width: 50%;
    margin: 30px auto;
  }

  .time-axis{
    margin: 0;
    padding: 0;
    position: relative;
  }

  .time-axis:before{
    content: '';
    position: absolute;
    left: 93px;
    top: 15px;
    width: 1px;
    height: 100%;
    background-color: #E4E4E4;
  }
  .time-axis-item{
    list-style: none;
    padding-left: 150px;
    position: relative;
    line-height: 45px;
    font-size: 14px;
    color: #141414;
  }
  .time-axis-achievement{
    margin: 0;
  }
  .time-axis-date{
    position: absolute;
    left: 0;
    top: 0;
    color: #666;
  }

  .time-axis-date span{
    position: absolute;
    right: -49px;
    top: 35%;
    display: block;
    width: 13px;
    height: 13px;
    border: 1px solid #ccc;
    border-radius: 100%;
    background-color: #fff;
  }
  .time-axis-date span:after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 7px;
    height: 7px;
    margin: auto;
    background-color: #ccc;
    border: 1px solid #ccc;
    border-radius: 100%;
  }

  .time-axis-item:last-child .time-axis-date span{
    border-color: #48BEB2;
  }

  .time-axis-item:last-child .time-axis-date span:after{
    background-color: #48BEB2;
    border-color: #48BEB2;
  }
</style>
