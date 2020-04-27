import Vue from 'vue'
import FoodLabel from '@/components/food-label.vue'

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        foods: ['apple', 'pear', 'orange']
    },
    components: {
        FoodLabel
    }
})
