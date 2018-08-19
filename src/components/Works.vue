<template>
  <div class="jump">
    <div class="content">
      <p class="works">作品</p>
      <div>
        <el-row>
          <el-col :span="6">
            <div class="imgWorks" @mouseover="over">
              <a class="" >
                <img src="../assets/img/w.jpg" alt="" />
              </a>
              <transition>
                <div class="animated textP" @mouseleave="leave">
                  <p class="pContent">划分空间撒得很难看</p>
                </div>
              </transition>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="imgWorks" @mouseover="over">
              <a class="" >
                <img src="../assets/img/w2.jpg" alt="" />
              </a>
              <transition>
                <div class="animated textP" @mouseleave="leave">
                  <p class="pContent">划分空间撒得很难看</p>
                </div>
              </transition>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="imgWorks" @mouseover="over">
              <a class="" >
                <img src="../assets/img/w1.jpg" alt="" />
              </a>
              <transition>
                <div class="animated textP" @mouseleave="leave">
                  <p class="pContent">划分空间撒得很难看</p>
                </div>
              </transition>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="imgWorks" @mouseover="over">
              <a class="" >
                <img src="../assets/img/w.jpg" alt="" />
              </a>
              <transition>
                <div class="animated textP" @mouseleave="leave">
                  <p class="pContent">划分空间撒得很难看</p>
                </div>
              </transition>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
  /*import $ from '../assets/js/jquery1-12.min'*/
  import animate from 'animate.css'
  export default {
    data(){
      return {
        num:0
      }
    },
    methods:{
      over:function(){
        let timer = null;
        $('.el-col').mouseover(function(){
          let num = $(this).index();
          timer = setTimeout(function(){
            $('.textP').eq(num).addClass('flipInX').css('display','block');
          },500);
        }).mouseout(function(){
            clearTimeout(timer);
        });
      },
      leave:function(){
          $('.textP').mouseout(function(){
              $(this).css('display','none');
          });
      }
    }
  }
</script>
<style scoped>
  .content{margin-top:100px;}
  .works{margin:0 auto;padding:10px 5%;font-family: 'PingFang SC';border:1px solid #ce7501;width:220px;text-align: center;font-size:30px;font-weight:bold;letter-spacing: 1px;}
  img{border: none;width:100%;}
  .el-row{margin:5% 0;}
  .imgWorks{position: relative;width:100%;}
  .textP{position: absolute;top:0;left:0;display:none;width:100%;height:100%;background: rgba(0,0,0,.4);text-align: center;color:#fff;font-weight:bold;letter-spacing: 1px;}
  .pContent{height:40px;line-height:40px;width:100%;background: rgba(0,0,0,.6);margin-top:30%;}
</style>
