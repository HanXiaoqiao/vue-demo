<template>
  <div class="jump">
    <div class="content">
      <p class="contact">联系</p>
      <div class="contactAll">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="姓名" prop="name">
            <el-input type="text" v-model="ruleForm2.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="phone">
            <el-input type="text" v-model.number="ruleForm2.phone"></el-input>
          </el-form-item>
          <el-form-item label="Email" prop="Email">
            <el-input v-model="ruleForm2.Email" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="cont">
            <el-input type="textarea" v-model="ruleForm2.cont"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="contact-text">
        <p class="textP">
          <span><i class="el-icon-message"></i>Email: <a href="https://mail.qq.com/cgi-bin/frame_html">1446084404@qq.com</a></span>
          <span><i class="el-icon-phone"></i>电话：18780988562</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
/*  import $ from '../assets/js/jquery1-12.min'*/
  import animate from 'animate.css'
  export default {
    data(){
      let checkPhone = (rule, value, callback) => {
        if (value == '') {
          callback(new Error('电话不能为空'));
        } else {
          callback();
        }
        setTimeout(function () {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            callback();
          }
        }, 1000);
      };
      let validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入姓名'));
        } else {
          callback();
        }
      };
      let validateEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入Email'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          name: '',
          Email: '',
          phone: '',
          cont:''
        },
        rules2: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          Email: [
            { validator: validateEmail, trigger: 'blur' }
          ],
          phone: [
            { validator: checkPhone, trigger: 'blur' }
          ],
          cont: [
            { required: true, message: '请填写交流内容',trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('提交成功!');
          } else {
            console.log('提交失败!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
  .content{margin-top:50px;}
  .contact{margin:0 auto;padding:10px 5%;font-family: 'PingFang SC';border:1px solid #ce7501;width:220px;text-align: center;font-size:30px;font-weight:bold;letter-spacing: 1px;}
  .el-form{width:60%;margin:0 auto;}
  .contactAll{width:100%;padding-top:50px;}
  .contact-text{width:100%;background:rgba(0,0,0,.8);color:#fff;padding:50px 0;font-size:18px;text-align: center;}
  .textP span{margin:0 20px;}
  .textP i{margin-right:5px;}
</style>
