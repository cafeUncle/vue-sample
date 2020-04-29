<template>
    <div id="app">
        Home page
        <div>{{ content }}</div>
    </div>
</template>

<script>
import eventHub from '@/util/event-hub.js'

export default {
    data() {
        return {
            content: 'this is home page'
        }
    },
    components: {
    },
    mounted() {
        // 每次切换过来都会重新mounted挂载一次， 重用需设置
        eventHub.$emit('show', this.$router)

        console.log('mount home')
    }
}
</script>
