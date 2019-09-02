
$(document).ready(function(){
  console.log("Hello Bob with address: " + BOB_PUB);
  
  var bobBalance = 0
  $("#bob-address").text(BOB_PUB);
  
  // Specify to which commit-chain we want to connect
  const nocustManagerBob = new NocustManager({
    rpcApi: web3,
    operatorApiUrl: HUB_API_URL,
    contractAddress: HUB_CONTRACT_ADDRESS,
  });

  // Register bob's address with the commit-chain
  async function register() {
    try {
      await nocustManagerBob.registerAddress(BOB_PUB);
      console.log("Bob is ready to receive transfers !");
    }
    catch(err){
        console.error("Could not register", err);
      }
  }
  
  const sendToALice = async () => {
    var val = $("#amount").val() || 0;
    val = parseInt(val);
    console.log(val);

    if(val > bobBalance){
      alert("Not Enough balance")
      return;
    }

    $("#send-button").prop('disabled', true);
    $("#send-button").text('⌛ Sending...');
    
    // Send commit-chain funds to Alice  
    const txId = await nocustManagerBob.sendTransaction({
        to: ALICE_PUB,
        amount: val,
        from: BOB_PUB,
     });
  
    console.log("Transfer to Alice sent ! Transaction ID: ", txId);

    $("#send-button").prop('disabled', false);
    $("#send-button").text('🎁 Send to Alice');

  }

  
  async function updateBalance() {
    try {
      bobBalance = await nocustManagerBob.getNOCUSTBalance(BOB_PUB);
      $("#bob-balance").text('Balance: ' + bobBalance.toFixed());
    } catch(err) {
      console.error("Could not fetch balance", err);
    }
  }
  
  async function main() {
    await register();
    
    // Periodically fetch balances
    setInterval(updateBalance, 1500)
  }
  
  window.sendToALice = sendToALice;
  main()
});




