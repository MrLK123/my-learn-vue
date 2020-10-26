<template>
  <div class="home">
    <k-form :model="model" :rules="rules" ref="form">
      <k-form-item label="用户名" prop="username">
        <k-input v-model="model.username" placeholder="请输入用户名"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input
          v-model="model.password"
          placeholder="请输入密码"
          type="password"
        ></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="handleSubmit">提交</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
// @ is an alias to /src
import Tips from "@/components/Tips.vue";
import create from "@/utils/create.js";
import KFormItem from "@/components/KFormItem.vue";
import KInput from "@/components/KInput.vue";
import KForm from "@/components/KForm.vue";
export default {
  name: "Home",
  components: {
    KInput,
    KFormItem,
    KForm,
  },
  data() {
    return {
      model: {
        username: "33333",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "用户名不能为空" }],
        password: [{ required: true, message: "密码不能为空" }],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate((error) => {
        create(Tips, {
          title: "Kunnnn也含金额",
          content: error ? "提交失败" : "提交成功",
        }).show();
        // if(error){
        //   console.log(error)
        // }else{
        //   console.log('成功')
        // }
      });
    },
  },
};
</script>
