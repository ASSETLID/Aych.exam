
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
    // TODO !
  }
  
  const sendToALice = async () => {
    var formAmount = $("#amount").val() || 0;
    formAmount = parseInt(formAmount);

    $("#send-button").prop('disabled', true);
    $("#send-button").text('⌛ Sending...');
    
    // TODO!

    $("#send-button").prop('disabled', false);
    $("#send-button").text('🎁 Send to Alice');

  }

  
  async function updateBalance() {
    // TODO!
  }
  
  async function main() {
    await register();
    
    // Periodically fetch balances
    setInterval(updateBalance, 1500)
  }
  
  window.sendToALice = sendToALice;
  main()
});




