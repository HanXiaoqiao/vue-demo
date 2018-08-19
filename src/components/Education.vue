<template>
  <div class="jump">
    <div class="content">
      <p class="education">教育</p>
      <div class="demo">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="main-timeline">
                <div class="timeline">
                  <a href="#" class="timeline-content">
                    <span class="year">2015</span>
                    <div class="inner-content">
                      <h3 class="title">步入大学</h3>
                      <p class="description">
                        软件工程，毫无意外，一窍不通。是好奇把我带进了这个奇妙的世界。
                      </p>
                    </div>
                  </a>
                </div>
                <div class="timeline">
                  <a href="#" class="timeline-content">
                    <span class="year">2016</span>
                    <div class="inner-content">
                      <h3 class="title">Html-CSS</h3>
                      <p class="description">
                        在这个阶段的我，已经自学了HTML和CSS的基础课程，也能完成像天猫、一号店、京东等等一些列的静态网页。
                      </p>
                    </div>
                  </a>
                </div>
                <div class="timeline">
                  <a href="#" class="timeline-content">
                    <span class="year">2017</span>
                    <div class="inner-content">
                      <h3 class="title">JavaScript-jquery</h3>
                      <p class="description">
                        这一年，我学习了另一个神奇的东西，它能让你的网页看起来不那么单调，更是学习了ajax、json，这些神奇的只是，能够彻底让你的页面活起来。我越发的感兴趣，也是这种兴趣让我学到了很多，很多。
                      </p>
                    </div>
                  </a>
                </div>
                <div class="timeline">
                  <a href="#" class="timeline-content">
                    <span class="year">2018</span>
                    <div class="inner-content">
                      <h3 class="title">bootstrap-vue-node</h3>
                      <p class="description">
                        前端技术的发展让我很是惊讶，往往刚想到应该自己试着写一个框架来快速的构建网页，可还是大佬的经验让我却步不前。学习是无止境的，掌握最基本的才是最强大的。我回过头想想大学的学习。C、C++、java、Android、数据结构、MySQL、算法...好像只是皮毛！
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .content{margin-top:30px;position: relative;}
  .education{margin:0 auto;padding:10px 5%;font-family: 'PingFang SC';border:1px solid #ce7501;width:220px;text-align: center;font-size:30px;font-weight:bold;letter-spacing: 1px;}

  .demo{padding: 2em 0;}
  .main-timeline{
    overflow: hidden;
    position: relative;
  }
  .main-timeline:before{
    content: "";
    width: 7px;
    height: 100%;
    background: #909090;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .main-timeline .timeline{
    width: 50%;
    padding-left: 50px;
    float: right;
    position: relative;
  }
  .main-timeline .timeline:before{
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #909090;
    border: 7px solid #fff;
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translateY(-50%);
  }
  .main-timeline .timeline:after{
    content: "";
    display: block;
    border-right: 30px solid #ee4423;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
  }
  .main-timeline .timeline-content{
    display: block;
    padding: 25px;
    border-radius: 100px;
    background: #ee4423;
    position: relative;
  }
  .main-timeline .timeline-content:before,
  .main-timeline .timeline-content:after{
    content: "";
    display: block;
    width: 100%;
    clear: both;
  }
  .main-timeline .timeline-content:hover{ text-decoration: none; }
  .main-timeline .inner-content{
    width: 70%;
    float: right;
    padding: 15px 20px 15px 15px;
    background: #fff;
    border-radius: 0 100px 100px 0;
    color: #ee4423;
  }
  .main-timeline .year{
    display: inline-block;
    font-size: 50px;
    font-weight: 600;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 7%;
    transform: translateY(-50%);
  }
  .main-timeline .title{
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 0 5px 0;
  }
  .main-timeline .description{
    font-size: 14px;
    margin: 0 0 5px 0;
  }
  .main-timeline .timeline:nth-child(2n){ padding: 0 50px 0 0; }
  .main-timeline .timeline:nth-child(2n):before,
  .main-timeline .timeline:nth-child(2n) .year{
    left: auto;
    right: -15px;
  }
  .main-timeline .timeline:nth-child(2n) .year{ right: 7%; }
  .main-timeline .timeline:nth-child(2n):after{
    border-right: none;
    border-left: 30px solid #ee4423;
    left: auto;
    right: 24px;
  }
  .main-timeline .timeline:nth-child(2n) .inner-content{
    float: none;
    border-radius: 100px 0 0 100px;
    text-align: right;
  }
  .main-timeline .timeline:nth-child(2){ margin-top: 130px; }
  .main-timeline .timeline:nth-child(odd){ margin: -130px 0 0 0; }
  .main-timeline .timeline:nth-child(even){ margin-bottom: 80px; }
  .main-timeline .timeline:first-child,
  .main-timeline .timeline:last-child:nth-child(even){ margin: 0; }
  .main-timeline .timeline:nth-child(2n) .timeline-content{ background: #f68829; }
  .main-timeline .timeline:nth-child(2n),
  .main-timeline .timeline:nth-child(2n) .inner-content{ color: #f68829; }
  .main-timeline .timeline:nth-child(2n):after{ border-left-color: #f68829; }
  .main-timeline .timeline:nth-child(3n) .timeline-content{ background: #2991d0; }
  .main-timeline .timeline:nth-child(3n),
  .main-timeline .timeline:nth-child(3n) .inner-content{ color: #2991d0; }
  .main-timeline .timeline:nth-child(3n):after{ border-right-color: #2991d0; }
  .main-timeline .timeline:nth-child(4n) .timeline-content{ background: #9361aa; }
  .main-timeline .timeline:nth-child(4n),
  .main-timeline .timeline:nth-child(4n) .inner-content{ color: #9361aa; }
  .main-timeline .timeline:nth-child(4n):after{ border-left-color: #9361aa; }
  .main-timeline .timeline:nth-child(5n) .timeline-content{ background: #a7be26; }
  .main-timeline .timeline:nth-child(5n),
  .main-timeline .timeline:nth-child(5n) .inner-content{ color: #a7be26; }
  .main-timeline .timeline:nth-child(5n):after{ border-right-color: #a7be26; }
  @media only screen and (max-width: 1200px){
    .main-timeline .inner-content{ width: 80%; }
    .main-timeline .year{
      font-size: 45px;
      left: 10px;
      transform: translateY(-50%) rotate(-90deg);
    }
    .main-timeline .timeline:nth-child(2n) .year{ right: 10px; }
  }
  @media only screen and (max-width: 990px){
    .main-timeline .year{
      font-size: 40px;
      left: 0;
    }
    .main-timeline .timeline:nth-child(2n) .year{ right: 0; }
  }
  @media only screen and (max-width: 767px){
    .main-timeline:before,
    .main-timeline .timeline:before{
      left: 10px;
      transform: translateX(0);
    }
    .main-timeline .timeline:nth-child(2n):after{
      border-left: none;
      border-right: 30px solid #ee4423;
      right: auto;
      left: 24px;
    }
    .main-timeline .timeline,
    .main-timeline .timeline:nth-child(even),
    .main-timeline .timeline:nth-child(odd){
      width: 100%;
      float: none;
      margin: 0 0 30px 0;
    }
    .main-timeline .timeline:last-child{ margin-bottom: 0; }
    .main-timeline .timeline:nth-child(2n){ padding: 0 0 0 50px; }
    .main-timeline .timeline:before,
    .main-timeline .timeline:nth-child(2n):before{ left: -2px; }
    .main-timeline .inner-content{ width: 85%; }
    .main-timeline .timeline:nth-child(2n) .inner-content{
      float: right;
      border-radius: 0 100px 100px 0;
      text-align: left;
    }
    .main-timeline .timeline:nth-child(2n) .year{
      right: auto;
      left: 0;
    }
    .main-timeline .timeline:nth-child(2n):after{ border-right-color: #f68829; }
    .main-timeline .timeline:nth-child(3n):after{ border-left-color: #2991d0; }
    .main-timeline .timeline:nth-child(4n):after{ border-right-color: #9361aa; }
    .main-timeline .timeline:nth-child(5n):after{ border-left-color: #a7be26; }
  }

  @media only screen and (max-width: 479px){
    .main-timeline .timeline-content{ padding: 15px; }
    .main-timeline .inner-content{ width: 80%; }
    .main-timeline .year{ font-size: 30px; }
  }

</style>
