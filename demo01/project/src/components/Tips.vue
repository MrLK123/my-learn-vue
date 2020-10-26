<template>
  <div>
    <div v-if="isShow">
      <h3>{{ title }}</h3>
      <div>{{ content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "社会",
    },
    duration: {
      type: Number,
      default: 1000,
    },
    content: {
      type: String,
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(this.hide, this.duration);
    },
    hide() {
      this.remove();
    },
  },
};
</script>

<style  scoped>
</style>