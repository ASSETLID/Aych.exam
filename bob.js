$(document).ready(function(){
  console.log("hello bob with address: " + BOB_PUB);

  $("#bob-address").text(BOB_PUB);

  var balance = 0;
  
  // Specify to which commit-chain we want to connect
  const nocustManagerBob = new NocustManager({
    rpcApi: web3,
    operatorApiUrl: HUB_API_URL,
    contractAddress: HUB_CONTRACT_ADDRESS,
  });

  // async function callBack (transfer) {
  //     console.log(transfer)
  //     console.log("Bob is receiving a transfer of " + transfer.amount + " wei from " + transfer.wallet.address);
  //     $("#send-button").prop('disabled', false);
  //     $("#send-button").text('💸 Send To Alice');
  //     $("#bob-alert").text("Bob is receiving a transfer of " + transfer.amount + " wei from " + transfer.wallet.address + " with tx id " + transfer.id);
  //     $("#bob-alert").removeClass("d-none");
  //     $("#bob-balance").text('Balance: ...updating...');
  //     await sleep(10000);
  //     balance = await nocustManagerB.getNOCUSTBalance(BOB_PUB);
  //     $("#bob-balance").text('Balance: ' + balance);
  // }

  // const getMoney = () => {
  //   $("#send-button").prop('disabled', true);
  //   $("#send-button").text('Receiving...');
  //   $("#get-money-button").prop('disabled', true);

  //   const xmlHttp = new XMLHttpRequest();
  //   const url= FAUCET_URL;
  //   xmlHttp.open("POST", url);
  //   xmlHttp.setRequestHeader('Content-type', 'application/json');
  //   xmlHttp.send(JSON.stringify({ "address": BOB_PUB}));
  // }

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
    $("#  ").addClass("d-none");

    var val = $("#amount").val() || 0;
    val = parseInt(val);
    console.log(val);

    if(val > balance){
      alert("Not Ennough balance")
      return;
    }

    $("#send-button").prop('disabled', true);
    $("#send-button").text('⌛ Sending...');
    
    // Send fETH on the commit-chain to Alice  
    const txId = await nocustManagerB.sendTransaction({
        to: ALICE_PUB,
        amount: val,
        from: BOB_PUB,
     });
  
    console.log("Transfer to Alice sent ! Transaction ID: ", txId);
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
  
  window.sendToALice = sendToALice;
  main()
});




