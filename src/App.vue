<script setup>
import Page from './components/Page.vue'

import "solana-wallets-vue/styles.css"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'

const walletOptions = {
  wallets: [
    new PhantomWalletAdapter({ network: WalletAdapterNetwork.Mainnet }),
    new SolflareWalletAdapter({ network: WalletAdapterNetwork.Mainnet }),
  ],
  autoConnect: false
}

</script>

<template>
  <div class="">
    <header>
      <div class="wrapper">
        <Page />
      </div>
    </header>

    <!-- <main>
      <Referral class="button" />
    </main> -->
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.container {
  padding: 20px;
  border-radius: 15px;
  /* Increase border-radius for a more rounded look */
  box-shadow: 0 0 30px rgba(238, 236, 236, 0.2);
  /* Adjust box shadow for a refined appearance */
  width: 50%;
  max-width: 500px;
  display: block;
}

.button {
  background-color: #fd6f01;
  color: #ffffff;
  padding: 1px;
  /* Adjust the padding to make the button smaller */
  border: 2px solid #f5f4f4;
  /* Add a black border */
  border-radius: 5px;
  cursor: pointer;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
