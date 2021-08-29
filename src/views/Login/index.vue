<template>
  <div class="login">
    <div class="login_wrap">
      <ul class="menu-tab">
        <li class="pull-left">登录</li>
        <li class="pull-right">注册</li>
      </ul>

      <el-form
        :model="dynamicValidateForm"
        ref="dynamicValidateForm"
        label-width="100px"
        class="demo-dynamic"
      >
        <el-form-item
          prop="email"
          label="用户名"
          :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :rules="{
            required: true,
            message: '域名不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="dynamicValidateForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Login",
  components: {},
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            value: "",
          },
        ],
        email: "",
        password: "",
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scope>
.login {
  position: relative;
  width: 100%;
  height: 100vh;
  &_wrap {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 20%);
  }
}
</style>
