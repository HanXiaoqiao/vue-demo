<template>
  <div class="top clearFix jump">
    <div class="menu">
      <el-menu
        :default-active="activeIndex1"
        class="el-menu-demo"
        mode="horizontal"
        background-color="transparent"
        text-color="#fff"
        active-text-color="#ffd04b">
        <div class="logo fl">HanCC</div>
        <el-menu-item index="6" @click.native="jump(5)"><a href="#location">联系</a></el-menu-item>
        <el-menu-item index="5" @click.native="jump(4)"><a href="#exprice">经验</a></el-menu-item>
        <el-menu-item index="4" @click.native="jump(3)"><a href="#edu">教育</a></el-menu-item>
        <el-menu-item index="3" @click.native="jump(2)"><a href="#touzi">作品</a></el-menu-item>
        <el-menu-item index="2" @click.native="jump(1)"><a href="#about">关于</a></el-menu-item>
        <el-menu-item index="1" @click.native="jump(0)"><a href="#home">首页</a></el-menu-item>
      </el-menu>
    </div>
    <div class="top-img" parallax-speed="1.6">
      <div class="top-center">
        <h1>韩春城.Hcc</h1>
        <p class="text-p">-Web开发人员-</p>
        <p class="text-des">当你的才华支撑不住你的梦想的时候，就静下心来学习！</p>
        <a href="" class="btnA">详细信息</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex1: '1'
      };
    },
    mounted: function () {
      this.$nextTick(function () {
        window.addEventListener('scroll', ()=>{
            this.onScroll();
            this.parallax_animation();
        })
      })
    },
    methods:{
      jump(index){
        // 用 class="jump" 添加锚点
        let jump = document.querySelectorAll('.jump')
        let total = jump[index].offsetTop
        let distance = document.documentElement.scrollTop || document.body.scrollTop
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total
          step = newTotal / 50
          smoothUp()
        }
        function smoothDown () {
          if (distance < total) {
            distance += step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
        }
        function smoothUp () {
          if (distance > total) {
            distance -= step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
        }
      },
      parallax_animation() {
        let speed = $('.top-img').attr('parallax-speed');
        console.log(window.pageYOffset);
        if( speed ) {
          let background_pos = '-' + (window.pageYOffset / speed) + "px";
          $('.top-img').css( 'background-position', '50% ' + background_pos );
        }
      },
      onScroll () {
        let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrolled < 737 && scrolled >= 0) {
          this.activeIndex1 = '1'
        } else if (scrolled < 1323 && scrolled >= 737) {
          this.activeIndex1 = '2'
        } else if (scrolled < 1755 && scrolled >= 1323) {
          this.activeIndex1 = '3'
        } else if (scrolled < 2547 && scrolled >= 1755) {
          this.activeIndex1 = '4'
        } else if (scrolled < 3231 && scrolled >= 2547) {
          this.activeIndex1 = '5'
        }else {
          this.activeIndex1 = '6'
        }
      }
    }
  }
</script>

<style scoped>
  .fl{float:left;}
  .fr{float:right;}
  a{text-decoration: none;}
  .clearFix{clear:both;display:block;content:"";}
  .top{width:100%;position: relative;}
  .menu{width:100%;position: fixed;top:0;background:rgba(0,0,0,.4);z-index:10;max-width:1500px; }
  .logo{color:#fff;font-size:30px;font-weight:bold;z-index:5;line-height:200%;/*margin-right:40%;*/}
  .el-menu-item{font-size:18px;float: right;background-color: transparent;}
  .el-menu-demo{padding:0 10%;}
  .top-img{background: url('../assets/img/1.jpg');padding:15% 0;background-attachment:scroll;background-position:50% 0px;  }
  .top-img .top-center{margin:0 auto;text-align: center;color:#fff;}
  .top-img .top-center h1{font-family: 'PingFang SC';font-size:50px;letter-spacing: 5px;}
  .top-img .top-center p.text-p{font-size:20px;}
  .top-img .top-center p{line-height: 400%;color:#f3f3f3;}
  .top-img .top-center .text-des{letter-spacing: 5px;}
  .top-img .top-center .btnA{padding:10px 50px;background: transparent;display: inline-block;border:2px solid #ce7501;color:#f3f3f3;font-size:16px;text-decoration: none;letter-spacing: 2px;margin-top:15px;}
  .top-img .top-center .btnA:hover{background: #fff;color:#000;transition: background 1s;}
</style>
