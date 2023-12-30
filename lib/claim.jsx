import idl from './mango.json'

import BigNumber from 'bignumber.js';

import { WalletNotSelectedError, useWallet } from 'solana-wallets-vue';
import { Connection, Transaction } from '@solana/web3.js';

export async function claimReward(amount) {
    // get contract address
    let programId = new PublicKey(idl.metadata.address);
    console.log('Program Id set correctly: ', programId);

    // define solana cluster
    const network = clusterApiUrl("devnet");

    // transaction confirmation level
    const opts = {
        preflightCommitment: "processed"
    }

    // connect to a solana cluster provider
    const getProvider = () => {
        //TODO: uncomment for mainnet
        // const connection = new Connection(SOLANA_MAINNET_RPC_ENDPOINT, opts.preflightCommitment);
        const connection = new Connection(network, opts.preflightCommitment);
        const provider = new anchor.AnchorProvider(
            connection,
            window.solana,
            opts.preflightCommitment
        );
        console.log("connected to provider: ", provider)
        return provider;
    }

    // verify user is still connected 
    const { publicKey, sendTransaction, connected } = useWallet();
    if (!connected) {
        throw WalletNotSelectedError
    }

    // send instruction
    try {
        const provider = getProvider();
        const program = new anchor.Program(idl, programId, provider);
        await program.rpc.claimReward(amount, {
            accounts: {
                systemProgram: web3.SystemProgram.programId
            }
        })
        console.log("transaction submitted")
    } catch (error) {
        console.error(error)
    }
}