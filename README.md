# Liquidity Browser App Example

Super simple one-click browser wallet, transferring coins over a NOCUST hub.


## How to get started ?

Simply clone this repo and open `index.html` with your browser to open the app. 
All necessary dependencies are bundled in `bundle.js`, required constants such as hub addresses and end-points are already available in `settings.js`.

Complete the files `bob.js` and `alice.js`.

Documentation of the nocust library: [http://docs.liquidity.network](http://docs.liquidity.network)

To get some test funds (Rinkeby) run the command:
```
curl -X POST --data '{"address": "<Public key>"}' -H 'Content-Type: application/json' https://rinkeby-faucet.liquidity.network
```

Replace `<Public key>` by your Ethereum address to receive 0.0001 commit-chain ETH (The address needs to be registered with commit chain).

**Good luck!**