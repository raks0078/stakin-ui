import idl from '../lib/mango.json'
import { ADMIN_ADDRESS, BANANA_TOKEN_ADDRESS, POOL_INFO_STORAGE } from '../constant';

import BigNumber from 'bignumber.js';

import { WalletNotSelectedError, useWallet } from 'solana-wallets-vue';
import { Connection, SystemProgram, clusterApiUrl, PublicKey, Transaction } from '@solana/web3.js';

import { Program, AnchorProvider, web3 } from '@coral-xyz/anchor';

export async function unstake() {
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
        const provider = new AnchorProvider(
            connection,
            window.solana,
            opts.preflightCommitment
        );
        console.log("connected to provider: ", provider)
        return provider;
    }

    // get contract address
    let programId = new PublicKey(idl.metadata.address);
    console.log('Program Id set correctly: ', programId);

    // verify user is still connected 
    const { connected } = useWallet();
    if (!connected) {
        throw WalletNotSelectedError
    }

    try {
        const provider = getProvider();
        const program = new Program(idl, programId, provider);

        const tx = await program.methods.initialize().accounts(
            {
                user: provider.wallet.publicKey,
                admin: ADMIN_ADDRESS,
                payer: ADMIN_ADDRESS,
                poolInfo: POOL_INFO_STORAGE,
                stakingToken: BANANA_TOKEN_ADDRESS,
                adminStakingWallet: ADMIN_ADDRESS,
                systemProgram: SystemProgram.programId,
            }
        ).signers().rpc().
            console.log("transaction submitted: ", tx)
    } catch (error) {
        console.error(error)
    }

    // get user info
    try {
        const provider = getProvider();
        const accounts = await provider.connection.getProgramAccounts(programId)
        console.log("program accounts: ", accounts)
    } catch (error) {
        console.error("program accounts error: ", error)
    }



    // send instruction
    // try {
    //     const provider = getProvider();
    //     const program = new Program(idl, programId, provider);
    //     await program.rpc.claimReward({
    //         accounts: {
    //             user: provider.wallet.publicKey,
    //             admin: ADMIN_ADDRESS,
    //             // systemProgram: SystemProgram.programId,
    //         }
    //     })
    //     console.log("transaction submitted")
    // } catch (error) {
    //     console.error(error)
    // }
}