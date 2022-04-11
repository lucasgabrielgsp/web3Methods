import { web3Provider, web3WsProvider } from '../provider/web3Provider';

/**
 * This function should return an Account Object.
 * 
 * Use example: 
 * 
 * ```
 * <button onClick={createAccount()}>Create your Account!</button>
 * ```
 * 
 * Example of @returns object:
 * 
 * ```
 *      {
        address: '0x00000000000000000000000',
        privateKey: '0x0000000000000000000000000000000000000000000',
        signTransaction: [Function: signTransaction],
        sign: [Function: sign],
        encrypt: [Function: encrypt]
         }
```
 *
 */

const TransactionChecker = async (account: string) => {
  const result = setInterval(async () => {
    let block = await web3Provider.eth.getBlock('latest');
    let number = block.number;
    let transactionsAccount = [];
    console.log('Searching block ' + number);

    if (block !== null && block.transactions !== null) {
      for (let txHash of block.transactions) {
        let tx = await web3Provider.eth.getTransaction(txHash);
        if (account === tx.to || account === tx.from) {
          transactionsAccount.push({...tx})
          console.log(transactionsAccount)
          clearInterval(result);
        }
      }
    }
  }, 5000);
  return;
};

TransactionChecker('0x0beaDdE9e116ceF07aFedc45a8566d1aDd3168F3');

// export const createAccount = () => web3Provider.eth.accounts.create();
