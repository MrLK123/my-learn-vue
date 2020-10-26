<template>
        <input type='type' v-bind="$attrs" :value="value" @input="onInput" >
</template>

<script>
import emitter from '@/mixins/emitter';
    export default {
        inheritAttrs:false,
        mixins: [emitter],
        props: {
            type: {
                type: String,
                default: 'text'
            },
            value:{
                type:String,
            }
        },
        methods: {
            onInput(e) {
                
                this.$emit('input',e.target.value)
                // this.$parent.$emit('validate')
                this.dispatch('KFormItem','validate')
            }
        },
    }
</script>

<style  scoped>

</style>