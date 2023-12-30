<script setup>
import { WalletMultiButton } from 'solana-wallets-vue'
</script>

<template>
    <div class="container">
        <wallet-multi-button class="connect-wallet"></wallet-multi-button>
        <!-- Add the logo image tag with the source (src) attribute pointing to your logo image -->
        <img src="../../public/mango logo.jpeg" alt="MangoFarm Logo" class="logo" />

        <h1>Let's Go!</h1>

        <!-- Deposit and Withdrawal buttons -->
        <button class="button">Stake</button>
        <button class="button withdrawal">Unstake</button>

        <!-- Grid for information -->
        <div class="grid">
            <div class="grid-item">
                <h2>Total Value Locked (TVL)</h2>
                <strong>$1,000,000</strong>
            </div>
            <div class="grid-item">
                <h2>Stake</h2>
                <strong>100 SOL</strong>
            </div>
            <div class="grid-item">
                <h2>SOL (on wallet)</h2>
                <strong>50 SOL</strong>
            </div>
            <div class="grid-item">
                <h2>Mangoes</h2>
                <strong>200 MNG</strong>
            </div>
        </div>

        <!-- Referral code input -->
        <div class="referral-container">
            <label for="referral">Referral code:</label>
            <input type="text" id="referral" placeholder="Enter your referral code">
        </div>
    </div>
</template>

<style scoped>
body {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: url('../../public/background.jpeg') no-repeat center center fixed;
    background-size: cover;
    /* This will make sure the image covers the entire body */
    font-family: 'Arial', sans-serif;
}

/* ... (rest of your CSS styles remain unchanged) */
h1 {
    color: #ffffff;
    /* Set the desired color */
}


.container {
    padding: 20px;
    border-radius: 15px;
    /* Increase border-radius for a more rounded look */
    box-shadow: 0 0 30px rgba(238, 236, 236, 0.2);
    /* Adjust box shadow for a refined appearance */
    width: 50%;
    max-width: 500px;
    text-align: center;
}

/* ... (rest of your CSS styles remain unchanged) */


/* ... (rest of your CSS styles remain unchanged) */

.container {
    background-color: rgba(54, 190, 179, 0.9);
    /* Adjust the last value (alpha) for transparency */
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 400px;
}


.button {
    background-color: #fd6f01;
    color: #ffffff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}

.withdrawal {
    background-color: #fd6f01;
    margin: 12px;

}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 20px;
}

.grid-item {
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
}

.grid-item strong {
    color: #fd6f01;
}

.logo {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
    /* Adjust the margin as needed */
    border: 2px solid white;
    /* Add a 2px white border around the logo */
    border-radius: 10px;
    /* Make the border corners round */
}


.center {
    text-align: center;
}

.center {
    text-align: center;
}

.button-container {
    margin-top: 20px;
}

.wallet-connect {
    position: fixed;
    top: 20px;
    right: 20px;
}

.wallet-connect button {
    background-color: #fd6f01;
    color: #ffffff;
    padding: 1px;
    /* Adjust the padding to make the button smaller */
    border: 2px solid #f5f4f4;
    /* Add a black border */
    border-radius: 5px;
    cursor: pointer;
}


.button-container {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    /* Adjust the margin to your preference */
}

.center {
    text-align: center;
}

.referral-container {
    text-align: center;
    margin-top: 20px;
    /* Adjust the margin to your preference */
}

.referral-container label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
}

.referral-container input {
    width: 100%;
    /* Make the input fill the container */
    padding: 8px;
    box-sizing: border-box;
    margin-bottom: 10px;
    color: #fd6f01;
}

.wallet-connect {
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
}

.wallet-connect img {
    max-width: 50px;
    max-height: 50px;
    border: 2px solid #f5f4f4;
    border-radius: 5px;
    padding: 5px;
    /* Add padding for a clickable area */
}
</style>