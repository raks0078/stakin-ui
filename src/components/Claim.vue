<template>
    <div>
        <button @click="claim">Claim Reward</button>
    </div>
</template>
  
<script>
import { claimReward } from '../../lib/claim'

export default {
    methods: {
        claim() {
            claimReward()
        }
    }
}
</script>