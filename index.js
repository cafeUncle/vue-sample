import Vue from 'vue'
import FoodLabel from '@/components/food-label.vue'

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        foods: null
    },
    components: {
        FoodLabel
    },
    methods: {
        dispatch() {
            // 发水果
            this.foods = ['apple', 'pear', 'orange']
        },
        printEat(food, arg2, arg3) {
            console.log('子组件注册的 v-on 收到了事件：', food, arg2, arg3)
        }
    },
    mounted() {
        console.log('你们吃了记得告诉我')

        // 在组件里 $on 只能捕捉到当前组件 $emit 的事件
        this.$on('eat-food', (v, v2, v3) => {
            console.log("父组件 mounted $on 收到了事件", v, v2, v3)
        })
    }
})
