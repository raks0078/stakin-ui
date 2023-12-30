<!-- <template>
    <div>
        <input type="referral_id" v-model="referral_id" />

        <button @click="submit">Submit</button>
    </div>
</template> -->
  
<script>
import { addReferral } from '../../lib/add_referral'

export default {

    data() {
        return {
            referral_id: null
        }
    },
    methods: {
        submit() {
            addReferral(this.referral_id)
        }
    }
}
</script>