const { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');

async function main() {
  // Connect to your local or testnet node
  const provider = new WsProvider('ws://127.0.0.1:9944');
  const api = await ApiPromise.create({ provider });

  // Dev keyring account (Alice)
  const keyring = new Keyring({ type: 'sr25519' });
  const sender = keyring.addFromUri('//Alice');
  const recipient = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'; // Change to actual

  const amount = 1_000_000_000_000; // 1 unit (e.g., DOT, in Plancks)

  const unsub = await api.tx.balances
    .transfer(recipient, amount)
    .signAndSend(sender, (result) => {
      console.log(`📦 Transaction status: ${result.status}`);
      if (result.status.isInBlock) {
        console.log(`✅ Included at block hash: ${result.status.asInBlock}`);
        unsub();
        api.disconnect();
      }
    });
}

main().catch(console.error);
