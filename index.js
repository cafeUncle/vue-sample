import Vue from 'vue'
import test from './src/components/test.vue'

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        sub: [1,2,3]
    },
    components: {
        test
    }
})
