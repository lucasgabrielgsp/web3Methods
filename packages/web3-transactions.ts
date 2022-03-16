import { web3Provider } from '../provider/web3Provider';
import { TransactionReceipt } from 'web3-core';

/**
 * This function should send a value to address provided.
 * 
 * @param {string} fromPrivateKey
 * @param {string} toAddress
 * @param {number} value
 * 
 * Use example: 
 * 
 * ```<button onClick={sendTransaction('0x00000000000000000000089000000000000000', '0x00000000000000000000089000000000000', 0.5)}>Send Value to address provided!</button>```
 * 
 * Example of object return (in console):
 * 
 * ```
 *      {
          blockHash: '0x00000000000000000000089000000000000',
          blockNumber: 10225756,
          contractAddress: null,
          cumulativeGasUsed: 13888023,
          effectiveGasPrice: 1063189439,
          from: '0x000000000000000000000000000000000',
          gasUsed: 21000,
          logs: [],
          logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
          status: true,
          to: '0x000000000000000000000000000000000',
          transactionHash: '0x0000000000000000000000000000000000000',
          transactionIndex: 61,
          type: '0x0'
        }
```
 *
 */

export const sendTransactions = async (
  fromPrivateKey: string,
  toAddress: string,
  value: number
) => {
  const signedTransaction = await web3Provider.eth.accounts.signTransaction(
    {
      to: toAddress,
      value: web3Provider.utils.toWei(value.toString(), 'ether'),
      gas: await web3Provider.eth.estimateGas({
        to: toAddress,
      }),
    },
    fromPrivateKey
  );

  try {
    return web3Provider.eth
      .sendSignedTransaction(`${signedTransaction.rawTransaction}`)
      .then((result: TransactionReceipt) => result);
  } catch (error) {
    console.log(`${error}`);
  }
};