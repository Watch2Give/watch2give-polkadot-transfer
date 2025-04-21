watch2give-polkadot-transfer

Polkadot-Native Asset Transfer for Watch2Give

This repository implements the core asset transfer logic for Watch2Give using ink! smart contracts and @polkadot/api, staying fully native to the Polkadot ecosystem. This effort was led and implemented by @zcybersense, ensuring long-term scalability and compatibility with Substrate-based infrastructure.

Why We Didn't Use Remix

Although Remix was recommended in the hackathon starter guide, I made the decision to bypass it in favor of cargo-contract and full Substrate-native tooling, because:

    We’re building for production, not just a demo.

    Full Polkadot-native setup enables tight integration with Asset Hub, XCM, and ink!.

    Our roadmap includes on-chain governance, DeFi features, and multi-chain airdrops.

    Error: the target is a binary and can’t have any crate-types set

Challenges Faced (Resolved by @zcybersense)

    crate-types Build Error

        "The target is a binary and can’t have any crate-types set"

    This issue occurred while building give_token and token_bridge contracts. The solution involved:

        Refactoring contract crates to use [lib] instead of [bin]

        Removing nested workspaces and flattening the structure

![image](https://github.com/user-attachments/assets/150a8ac9-b104-4ce8-a067-367df6a6a169)

Success Milestones

    ✔️ Contracts compiled: .wasm, .json, and .contract artifacts generated

    ✔️ Working transfer script using @polkadot/api


  ![image](https://github.com/user-attachments/assets/a9f0539f-2929-435f-b9da-532d4bf0db4c)


  Project Structure

  watch2give-polkadot-transfer/
├── contracts/                 # ink! smart contracts
│   └── give_token/           # PSP22 GIVE token
├── scripts/                  # JS + Polkadot.js API
│   ├── polkadot-transfer.js
│   └── polkadot-transfer.txt
├── chain-nodes/              # Substrate local test node
└── README.md                 # ← You are here


Tools Used

    cargo-contract

    @polkadot/api

    substrate-contracts-node

    GitHub PATs for secure pushing


Summary

This repo was set up by @zcybersense to future-proof Watch2Give with a real-world, scalable smart contract architecture. By going beyond Remix and building with cargo, ink!, and Substrate-native tooling, the repo is now fully equipped to handle asset transfers and pave the way for Asset Hub & XCM integrations.
