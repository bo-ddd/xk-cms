<template>
  <div id="login">
    <div class="pop">
      <h3 class="ta-c">登录</h3>
      <el-form ref="form" :model="form" :rules="rules" :show-message="false">
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            v-model="form.username"
            clearable
            maxlength="15"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="form.password"
            show-password
            maxlength="15"
          ></el-input>
        </el-form-item>
        <el-form-item class="captcha" prop="captcha">
          <el-input
            class="ipt-captcha"
            maxlength="4"
            placeholder="请输入验证码"
            v-model="form.captcha"
            clearable
          >
          </el-input>
          <img :src="captchaSrc" @click="initCaptcha" alt="" />
        </el-form-item>
        <el-form-item>
          <el-button
            class="submit"
            size="medium"
            type="warning"
            round
            @click="submit"
            >登录</el-button
          >
        </el-form-item>
        <el-form-item class="links">
          <el-link type="primary">账号注册</el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        captcha: "",
      },
      captchaSrc: "",
      rules: {
        username: [
          { required: true, message: "用户名不能为空" },
          {
            type: "string",
            min: 6,
            max: 15,
            message: "用户名长度应该在6-15位之间",
          },
        ],
        password: [
          { required: true, message: "密码不能为空" },
          {
            type: "string",
            min: 6,
            max: 15,
            message: "密码长度应该在6-15位之间",
          },
        ],
        captcha: [
          { required: true, message: "请输入验证码" },
          { type: "string", len: 4, message: "验证码输入不正确" },
        ],
      },
    };
  },
  methods: {
    ...mapActions(["login", "getCaptcha"]),
    async submit() {
      let valid = await this.validate();
      if (!valid) return;
      const { username, password, captcha } = this.form;
      let res = await this.login({ username, password, captcha });
      sessionStorage.setItem("token", res.data);
      if (res.status === 1) {
        this.$router.push({
          name: "Home",
        });
      }else{
        this.$message({
          type:'warning',
          message:res.msg
        })
      }
    },
    validate() {
      return new Promise((resolve) => {
        this.$refs.form.validate((valid, error) => {
          if (!valid) {
            let field = Object.keys(error)[0];
            let message = error[field][0].message;
            this.$message({
              type: "warning",
              message,
            });
          }
          resolve(valid);
        });
      });
    },
    async initCaptcha() {
      this.captchaSrc = await this.getCaptcha();
    },
  },
  created() {
    this.initCaptcha();
  },
};
</script>

<style lang="scss" scoped>
#login {
  background: #222e3e;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & .pop {
    width: 280px;
    border-radius: 4px;
    background: #2f3e51;
    color: #fff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    padding: 0 20px;
    & .submit {
      width: 100%;
    }
    & .links {
      font-size: 12px;
      text-align: right;
    }
    & .captcha {
      & img {
        width: 110px;
        vertical-align: middle;
        background: #fff;
        height: 100%;
        display: inline-block;
      }
    }
    & .ipt-captcha {
      margin-right: 10px;
      width: calc(100% - 120px);
      float: left;
    }
  }
}
</style>