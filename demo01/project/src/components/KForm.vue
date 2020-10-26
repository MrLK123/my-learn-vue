<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName:'KForm',
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  data() {
    
    return {
      fieds: [],
    };
  },
  created() {
    this.$on("FormItemInit", (item) => {
      this.fieds.push(item);
    });
  },
  provide() {
    return {
      form: this,
    };
  },
  methods: {
    validate(cb) {
      // let tasks = this.$children
      //   .filter((item) => item.prop)
      //   .map((item) => item.validate());
      console.log(this.fieds)
      let tasks = this.fieds.map((item) => item.validate());
      Promise.all(tasks)
        .then(() => cb())
        .catch((error) => cb(error));
    },
  },
};
</script>

<style  scoped>
</style>