<template>
    <div id="test">
        <div>{{ food }}</div>
        <div>{{ data }}</div>
        <hr/>
    </div>
</template>

<script>
export default {
    props: ['food'],
    data () {
        return {
            data: this.food ? this.food.split('').reverse().join('') : ''
        }
    }
}
</script>
