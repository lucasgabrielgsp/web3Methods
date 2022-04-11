import { web3Provider } from "../provider/web3Provider";
import { TransactionReceipt } from "web3-core";

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
  const gasPrice = (await web3Provider.eth.getGasPrice()).toString();

  let editGasFee: any;

  switch (gasFee) {
    case "low":
      editGasFee = web3Provider.utils
        .toBN(gasPrice)
        .mul(web3Provider.utils.toBN(8))
        .div(web3Provider.utils.toBN(10))
        .toString();

      break;
    case "high":
      editGasFee = web3Provider.utils
        .toBN(gasPrice)
        .mul(web3Provider.utils.toBN(11))
        .div(web3Provider.utils.toBN(10))
        .toString();
      break;
    default:
      editGasFee = gasPrice;
      break;
  }

  const signedTransaction = await web3Provider.eth.accounts.signTransaction(
    {
      from: fromAddress,
      to: toAddress,
      value: web3Provider.utils.toWei(value.toString(), "ether"),
      gas: await web3Provider.eth.estimateGas({
        to: toAddress,
      }),
      gasPrice: editGasFee,
      nonce: await web3Provider.eth.getTransactionCount(fromAddress, "latest"),
    },
    fromPrivateKey
  );

  // console.log("EDIT GAS FEE", editGasFee);

  // console.log(
  //   "NORMAL GAS FEE",
  //   await web3Provider.eth.estimateGas({
  //     to: toAddress,
  //   })
  // );

  try {
    return web3Provider.eth
      .sendSignedTransaction(`${signedTransaction.rawTransaction}`)
      .then((result: TransactionReceipt) => result);
  } catch (error) {
    console.log(`${error}`);
  }
};

sendTransactions(
  "0xCe1812Ccc5273a3F8B1b2d96217877842a851A31",
  "0xcd76233eda9afe2cb25bc444d58d98e70b4246cceab3cf28ae98d9c7b6e34791",
  "0x0beaDdE9e116ceF07aFedc45a8566d1aDd3168F3",
  0.002,
).then((result) => console.log(result));
