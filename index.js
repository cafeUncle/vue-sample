import Vue from 'vue'
import FoodLabel from '@/components/food-label.vue'
import router from '@/pages/router.vue'
import eventHub from '@/util/event-hub.js'

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        foods: null
    },
    components: {
        FoodLabel,
        router
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

        // 在 router-view 外层包上 <keep-alive> 后，组件不会每次都销毁重建，mounted也就只会触发一次，所以只会触发一次事件，如有其他需求需放到其他事件
        eventHub.$on('show', (router) => {
            console.log('切换到了', router)

            eventHub.$emit('show-about', 1)

            // // 主动编程式的跳转
            // // 字符串
            // router.push('home')
            // // 对象
            // router.push({ path: 'home' })
            // // 命名的路由  变成 /home/123      this.$router.param.identity
            // router.push({ name: 'home', params: { identity: '123' }})
            // // let userId = 1  使用 path 时 params 不生效，是绝对路由
            // // router.push({ path: `home/${userId}`})   /home/1
            // // 带查询参数，变成 /about?plan=private
            // router.push({ path: 'about', query: { plan: 'private' }})
        })

    }
})
