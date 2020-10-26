
<script>
function boradcast(componentName, eventName, params) {
  this.$children.forEach((child) => {
    var name = child.$options.componentName;
    if (name === componentName) {
      // 触发事件
      child.$emit.apply(child, [eventName].concat([params]));
    } else {
      //向下递归
      boradcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;
      while (parent && (!name || name !== componentName)) {
        //   向上递归
        parent = parent.$parent;
        if (parent) {
          // 获取当前parent的componentName

          name = parent.$options.componentName;
        }
      }
      if (parent) {
        //   事件触发，事件名和方法
        console.log(333);
        parent.$emit.apply(parent, [eventName].concat([params]));
      }
    },
    boradcast(componentName, eventName, params) {
      boradcast.call(this, componentName, eventName, params);
    },
  },
};
</script>

<style  scoped>
</style>