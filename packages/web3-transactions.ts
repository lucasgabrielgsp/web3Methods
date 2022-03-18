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
  fromAddress: string,
  fromPrivateKey: string,
  toAddress: string,
  value: number,
  gasFee?: string
) => {
  const lastBlockValue: any = await web3Provider.eth.getBlock('latest');
  const editGasFee =
    gasFee === 'low' ? lastBlockValue * 0.8 : lastBlockValue * 1.2;

  const signedTransaction = await web3Provider.eth.accounts.signTransaction(
    {
      from: fromAddress,
      to: toAddress,
      value: web3Provider.utils.toWei(value.toString(), 'ether'),
      gas: gasFee
        ? editGasFee
        : await web3Provider.eth.estimateGas({
            to: toAddress,
          }),
      nonce: await web3Provider.eth.getTransactionCount(fromAddress, "latest")
    },
    fromPrivateKey
  );

  console.log('EDIT GAS FEE', editGasFee);

  console.log(
    'NORMAL GAS FEE',
    await web3Provider.eth.estimateGas({
      to: toAddress,
    })
  );
  console.log('nonce', await web3Provider.eth.getTransactionCount(fromAddress, "latest"))

  try {
    return web3Provider.eth
      .sendSignedTransaction(`${signedTransaction.rawTransaction}`)
      .then((result: any) => result);
  } catch (error) {
    console.log(`${error}`);
  }
};

sendTransactions(
  '0x0beaDdE9e116ceF07aFedc45a8566d1aDd3168F3',
  '0x6e578c2227bc4629794e566610209c9cb7a35341f13de4ba886a59a4e11b7d1e',
  '0xCe1812Ccc5273a3F8B1b2d96217877842a851A31',
  0.01
).then((result) => console.log(result));