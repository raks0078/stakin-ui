import { web3 } from '@coral-xyz/anchor';
import { PublicKey,  } from '@solana/web3.js';

let pool_info_storage = web3.Keypair.generate()

export const POOL_INFO_STORAGE = pool_info_storage.publicKey;
export const ADMIN_ADDRESS = new PublicKey('DBBB6MpzqEqoejDhXnXqiKXs5uFXPqV94rCo4NBLJFLF');// for test purpose
export const BANANA_TOKEN_ADDRESS = new PublicKey('65EZMTnYFo8wwBDUcd9LZQ8u7sEp2oxwK1BLHs6JqgAB');// for test purpose
export const SOLANA_PUBLIC_MAINNET_RPC_ENDPOINT = 'https://fragrant-evocative-isle.solana-mainnet.quiknode.pro/b94001df4781bff9f53cbfcf33c3c872634e58aa/'