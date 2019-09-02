
$(document).ready(function(){
  
  // Setup the NocustManager
  const nocustManagerAlice = new NocustManager({
    rpcApi: web3,
    operatorApiUrl: HUB_API_URL,
    contractAddress: HUB_CONTRACT_ADDRESS,
  });
  
  console.log("Hello Alice with address: " + ALICE_PUB);

  $("#alice-address").text(ALICE_PUB);

  // Register Alice's address with the commit-chain
  async function register() {
    try {
     await nocustManagerAlice.registerAddress(ALICE_PUB);
      console.log("Alice is ready to receive transfers !");
    }
    catch(err){
        console.error("Could not register", err);
      }
  }

  async function updateBalance() {
    // TODO!
  }

  async function main() {
    await register();

    // Periodically fetch balances
    setInterval(updateBalance, 1500)
  }
  
  main()

});