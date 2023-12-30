<template>
    <div>
        <button @click="unstakeSol">Unstake</button>
    </div>
</template>
  
<script>
import { unstake } from '../../lib/unstake'

export default {
    methods: {
        unstakeSol() {
            unstake()
        }
    }
}
</script>