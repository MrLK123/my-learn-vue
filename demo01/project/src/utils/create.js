import Vue from 'vue'

function create(options, props) {
    // const app = new Vue({
    //     render(h) {
    //         return h(options, { props })
    //     }
    // }).$mount()
    const Cort = Vue.extend(options)
    const comp = new Cort({ propsData: props }).$mount()
        // const comp = app.$children[0]
    console.log(comp)
    document.body.appendChild(comp.$el)
    comp.remove = () => {
        document.body.removeChild(comp.$el)
        comp.$destroy()
    }
    return comp;
}
export default create;