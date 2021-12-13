<template>
  <div class="wrap">
    <div class="user shadow">
      <div class="user-l">
        <img :src="avatorImg" alt="" />
        <h1>{{ userInfo.avatorName }}</h1>
        <section>ID:{{ userInfo.id | formatId }}</section>
        <div class="fs-12 set">
          <el-link class="mr-10" type="primary" @click="userInfoDialogVisible = true">修改用户信息</el-link>
          <el-link type="primary" @click="pwdDialogVisible = true">修改密码</el-link>
        </div>
        <div>Email:814151789@qq.com</div>
      </div>
      <div>
        <h3>用户分组: abc</h3>
        <section class="mt-20 mb-10">
          <h3>用户标签:</h3>
          <div class="tag">
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
          </div>
        </section>
      </div>
    </div>
    <div class="infos">
      <div class="item shadow">
        <h3>会员信息</h3>
        <section>
          <label>用户名:</label>
          <span>axia</span>
        </section>
        <section>
          <label>用户名:</label>
          <span>axia</span>
        </section>
        <section>
          <label>用户名:</label>
          <span>axia</span>
        </section>
      </div>
      <div class="item shadow">123</div>
      <div class="item shadow">1123</div>
    </div>
    <el-dialog title="修改用户信息" :visible.sync="userInfoDialogVisible">
      <el-form :model="form">
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="form.avatorName" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeUserInfoFormDialog">取 消</el-button>
        <el-button type="primary" @click="confirmUserInfo"
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <el-dialog title="修改密码" :visible.sync="pwdDialogVisible">
      <el-form :model="pwdForm">
        <el-form-item label="新密码" :label-width="formLabelWidth">
          <el-input v-model="pwdForm.password" autocomplete="off"  show-password></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closePwdFormDialog">取 消</el-button>
        <el-button type="primary" @click="modifyPassword">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { serialNumber } from "@/assets/util/util";
export default {
  data() {
    return {
      userInfo: {},
      avatorImg:null,
      userInfoDialogVisible:false,
      pwdDialogVisible:false,
      formLabelWidth:"100",
      form:{},
      pwdForm:{}
    };
  },
  filters: {
    formatId(id) {
      return serialNumber(id);
    },
  },
  methods: {
    ...mapActions(["getUserInfo","updateUserInfo", "updatePassword"]),
    async getUserInfoData() {
      let userInfo = await this.getUserInfo();
      this.userInfo = userInfo.data;
      this.formatForm();
      this.avatorImg = require(`@/assets/avator/${this.userInfo.avatorImg}.png`)
    },
    getParams(o1,o2){
      let res = {};
      Object.keys(o1).forEach(key=>{
        if(o1[key] != o2[key]){
          res[key] = o2[key];
        }
      })
      return res;
    },
    formatForm(){
      this.form = Object.assign({},this.userInfo);
    },
    closeUserInfoFormDialog(){
      this.formatForm();
      this.userInfoDialogVisible = false;
    },
    async confirmUserInfo(){
      let params = this.getParams(this.userInfo, this.form);
      let res = await this.updateUserInfo(params);
      if(res.status == 1){
        this.getUserInfoData();
      }
      this.$message({
        type:res.status == 1 ? 'success' : 'warning',
        message:res.msg
      })
      this.userInfoDialogVisible = false;
    },
    closePwdFormDialog(){
      this.pwdForm = {};
      this.pwdDialogVisible = false;
    },
    async modifyPassword(){
      const { password } = this.pwdForm;
      console.log(this.pwdForm);
      if( password.length < 6){
        this.$message({
          type:'warning',
          message:'密码不能小于6位'
        })
        return;
      }

      let res = await this.updatePassword({
        password
      });

      this.$message({
        type:res.status == 1 ? 'success' : 'warning',
        message:res.msg
      })

      this.closePwdFormDialog();
    }
  },
  created() {
    this.getUserInfoData();
  },
};
</script>


<style scoped lang="scss">
.wrap {
  min-width: 800px;
  display: grid;
  grid-template-rows: 2fr 3fr;
  height: 100%;
  row-gap: 20px;
  .user {
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 20px;
    & .user-l {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      & img {
        width: 100px;
        height: 100px;
        overflow: hidden;
      }
      & h1 {
        margin: 10px 0;
        font-size: 32px;
      }
      & section {
        font-weight: bold;
      }
      & .set {
        margin: 5px 0;
      }
    }
    & .tag {
      & span {
        float: left;
        margin-left: 10px;
        margin-top: 10px;
      }
    }
  }
  .infos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    .item {
      padding: 20px;
      & h3 {
        margin: 20px 0;
      }
      & section {
        padding: 5px 0;
      }
      & label {
        width: 90px;
        color: #99a9bf;
      }
    }
  }
}
</style>