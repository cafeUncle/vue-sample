<template>
    <div id="app">
        About page
        <div>{{ content }}</div>
    </div>
</template>

<script>
import eventHub from '@/util/event-hub.js'

export default {
    data() {
        return {
            content: 'this is about page',
            times: 0
        }
    },
    mounted() {
        // 第一次切过来才能注册事件监听，所以第一次过来不会触发
        // 后续每次切换过来都会重新mounted挂载一次，多切换几次about组件，同时就会有多个 $on，导致每次触发都输出好几行 about on ...
        // 可以在 router-view 外层包上 <keep-alive> 来解决
        eventHub.$on('show-about', (index) => {
            console.log('about on', index, '3s后切回 home')

            setTimeout(() => {
                console.log(this.$router)
            }, 3000)
        })
        this.times = this.times + 1
        console.log('mount about', this.times)
    },
    created() {
        // 多次进入路由 多次 created
        console.log('about created')
    }
}
</script>
