<template>
    <div id="test">
        <div>{{index + 1}}号</div>
        <div>来自prop：{{ food }}</div>
        <div>反转prop：{{ data }}</div>
        <div></div>
        <button @click="eat">已经吃了{{times}}个</button>
        <hr/>
    </div>
</template>

<script>
    export default {
        props: ['food', 'index'],
        data() {
            return {
                data: this.food ? this.food.split('').reverse().join('.') : '',
                times: 0,
            }
        },
        computed: {
            alertMessage() {
                return `吃${this.food}`
            }
        },
        watch: {
            times (val) {
                console.log('吃了', val, '次', this.food)
            }
        },
        methods: {
            eat() {
                console.log('子组件 food-label', this.alertMessage, ',用 $emit 告诉上层')
                // $emit 在哪个组件触发的，则在哪个组件 $on
                // this指的是food-label的每一项，故只有food-label上注册的监听可以收到，在父组件mouted里写的监听是无效的。 所以这个v-on 需要写在 food-label 组件标签上。
                this.$emit('eat-food', this.alertMessage, '通知给自己的第二个参数', '通知给自己的第三个参数')
                // 这种的才能被父组件消费到
                this.$parent.$emit('eat-food', this.alertMessage, '告诉父组件的第二个参数', '告诉父组件的第三个参数')

                this.times ++
            }
        }
    }
</script>

<style scoped>
div {
    color: orange;
}
</style>
