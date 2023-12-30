<template>
    <div>
        <input type="amount" v-model="amount" />

        <button @click="submit">Submit</button>
    </div>
</template>
  
<script>
import { stake } from '../../lib/stake'

export default {

    data() {
        return {
            amount: null
        }
    },
    methods: {
        submit() {
            stake(this.amount)
        }
    }
}
</script>