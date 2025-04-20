watch2give-polkadot-transfer

This repo contains the Polkadot-native asset transfer logic for the Watch2Give dApp. It supports direct interaction with the Polkadot ecosystem using ink! smart contracts and Polkadot.js, without relying on Remix or EVM-compatible chains.

Why We Didn't Use Remix

While the hackathon guide suggested using Remix for simplicity, we chose to go with cargo-contract and Substrate-native tooling because:

    We’re building this dApp for the long term, not a quick demo.

    Staying 100% Polkadot-native ensures deeper integration with Asset Hub, XCM, and ink! contracts.

    Our design aims to scale with on-chain governance, DeFi, and multi-chain airdrops later.

    Challenges Faced

We encountered several key issues while setting up and compiling the smart contracts with cargo +nightly contract build:
1. crate-types Error

    ❗ Error: the target is a binary and can’t have any crate-types set

This happened when building contracts like give_token and token_bridge. We had to restructure the crate to use [lib] correctly, not as [bin].

![image](https://github.com/user-attachments/assets/150a8ac9-b104-4ce8-a067-367df6a6a169)

Success Achieved

Once we removed nested repos and properly handled addresses, we got:

    ✅ Smart contract build complete
    (Screenshot showing .contract, .json, .wasm output files)

    ✅ Polkadot transfer script working using @polkadot/api


  ![image](https://github.com/user-attachments/assets/a9f0539f-2929-435f-b9da-532d4bf0db4c)


  Project Structure

  watch2give-polkadot-transfer/
├── contracts/                 # ink! smart contracts
│   └── give_token/           # PSP22 GIVE token
├── scripts/                  # JavaScript + @polkadot/api
│   ├── polkadot-transfer.js
│   └── polkadot-transfer.txt
├── chain-nodes/              # substrate-contracts-node
└── README.md                 # ← You are here


Tools Used

    cargo-contract

    @polkadot/api

    substrate-contracts-node

    GitHub PATs for secure push


Summary

We chose the longer but production-ready path: cargo + ink! + Substrate + Polkadot.js. The repo now supports asset transfer, contract building, and is ready for integration with Asset Hub and parachain XCM workflows.
