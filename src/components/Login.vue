<template>
  <div>
    登录组件
    <div class="login-btn">
      <el-button type="primary" @click="submitForm()">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      this.$router.push("/index");
    }
  }
};
</script>


<style lang="less" scoped>
.login-btn {
  text-align: center;
}
</style>