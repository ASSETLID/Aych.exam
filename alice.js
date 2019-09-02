$(document).ready(function(){

  console.log("hello alice with address: " + ALICE_PUB);

  $("#alice-address").text(ALICE_PUB);
  var balance = 0;

  // Setup the NocustManager
  const nocustManagerAlice = new NocustManager({
    rpcApi: web3,
    operatorApiUrl: HUB_API_URL,
    contractAddress: HUB_CONTRACT_ADDRESS,
  });

  async function register() {
    try {
      await nocustManagerAlice.registerAddress(ALICE_PUB);
      console.log("Bob is ready to receive transfers !");
    }
    catch(err){
        console.error("Could not register", err);
      }
  }

  async function updateBalance() {
    try {
      await nocustManagerAlice.getNOCUSTBalance(ALICE_PUB);
    } catch(err) {
      console.err("Could not fetch balance", err);
    }
  }

  async function main() {
    await register();
    
    setTimeout(updateBalance, 1000)
  }

  main()

});