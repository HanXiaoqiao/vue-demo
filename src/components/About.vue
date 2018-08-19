<template>
  <div class="jump">
    <div class="content">
      <p class="about">关于</p>
      <img src="../assets/img/3.jpg" class="aboutImg" alt="">
      <div class="description">
        <p>
        <p class="enText">I'm a web designer / developer based in Toronto, Canada. I have a passion for web design and love to create for web and mobile devices.
        </p>
        <p class="chText">Web前端开发工程师是一个很新的职业，是从事Web前端开发工作的工程师。主要进行网站开发，优化，完善的工作。网页制作是Web 1.0时代的产物，那时网站的主要内容都是静态的，用户使用网站的行为也以浏览为主。 一位好的Web前端开发工程师在知识体系上既要有广度，又要有深度，所以很多大公司即使出高薪也很难招聘到理想的前端开发工程师。现在说的重点不在于讲解技术，而是更侧重于对技巧的讲解。技术非黑即白，只有对和错，而技巧则见仁见智。以前会Photoshop和Dreamweaver就可以制作网页，现在只掌握这些已经远远不够了。无论是开发难度上，还是开发方式上，现在的网页制作都更接近传统的...</p></p>
        <div class="null"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .content{margin-top:30px;position: relative;}
  .about{margin:0 auto;padding:10px 5%;font-family: 'PingFang SC';border:1px solid #ce7501;width:220px;text-align: center;font-size:30px;font-weight:bold;letter-spacing: 1px;}
  .aboutImg{margin-left:10%;width:25%;}
  .description{position: absolute;width:56%;top:29%;right:10.5%;background:rgb(231,160,7);letter-spacing: 1px;border:1px solid #ece4e4;padding:4em 4em 0 4em;font-size:14px;line-height:180%;}
  .description .enText{color:#fff;font-size:20px;margin-bottom: 15px;}
  .null{height:4em;width:100%;background: rgb(231,160,7);}
  .chText{display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 7;overflow: hidden;}
</style>
