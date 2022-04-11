//@ts-nocheck
import Web3 from "web3";
import { networks } from "../networks/networks";

/**
 * This function should change the current network.
 * 
 * @param chainId
 * 
 * Here is the available networks to change:
 * 
  - Syscoin Mainnet (57) and Testnet (5700)
  - Ethereum Mainnet (1)
  - Ethereum Rinkeby (4)
  - Polygon Mainnet (137) and Testnet (80001)
 * 
 * Use example: 
 * 
 * ```
 * <button onClick={changeNetwork(4)}>Change the current network</button>
 * ```
 * 
 * @returns void.
 */

export const changeNetwork = async (chainId: number) => {
  let provider;

  for (let i = 0; i < networks.length; i++) {
    if (networks[i].chainId === chainId) {
      provider = networks[i].url;
      break;
    }
  }

  if (provider === undefined)
    throw new Error("Network not found, try again with a correct one!");

  const { HttpProvider } = Web3.providers;

  web3Provider.setProvider(new HttpProvider(provider));
};

export const web3Provider = new Web3(
  new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/c42232a29f9d4bd89d53313eb16ec241')
);

export const web3WsProvider = new Web3(
  new Web3.providers.WebsocketProvider(
    'wss://rinkeby.infura.io/ws/v3/c42232a29f9d4bd89d53313eb16ec241'
  )
);

const RpcVerifier = () => {
  return web3Provider.eth.net
    .isListening((err, res) => {
      if (err) {
        return console.error({
          message: "Check the current RPC. Maybe is not a valid RPC.",
          valid: res === undefined ? false : null,
        });
      }
      return console.log({
        message: "The current RPC is working correctly.",
        valid: res,
      });
    })
    .then((result) => result);
};

changeNetwork(4);
