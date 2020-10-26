<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import emitter from "@/mixins/emitter.vue";
import Schema from "async-validator";
export default {
  name: "KFormItem",
  componentName: "KFormItem",
  mixins: [emitter],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
    },
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
    if (this.prop) {
      this.dispatch("KForm", "FormItemInit", this);
    }
  },
  data() {
    return {
      error: "",
    };
  },
  inject: ["form"],
  methods: {
    validate() {
      const value = this.form.model[this.prop];
      const rule = this.form.rules[this.prop];
      const schema = new Schema({ [this.prop]: rule });
      console.log(schema);
      return schema.validate({ [this.prop]: value }, (error) => {
        if (error) {
          this.error = error[0].message;
          return this.error;
        } else {
          this.error = "";
        }
      });
    },
  },
};
</script>

<style  scoped>
.error {
  color: red;
}
</style>