import { WalletProvider } from "@sensible-contract/wallet-provider";
import { Sensible } from "@sensible-contract/web3-sensible";
import * as utils from "@sensible-contract/web3-utils";
import { Wallet } from "@sensible-contract/web3-wallet";
var version = require("../package.json").version;

export class Web3 {
  provider: WalletProvider;
  wallet: Wallet;
  sensible: Sensible;
  utils = utils;
  version = version;

  static modules: Modules;
  static readonly utils = utils;
  static readonly version: string = version;

  constructor(provider: WalletProvider) {
    this.provider = provider;
    this.wallet = new Wallet(provider);
    this.sensible = new Sensible(provider);
  }

  setProvider(provider: WalletProvider) {
    this.provider = provider;
    this.wallet.setProvider(provider);
    this.sensible.setProvider(provider);
  }
}

export interface Modules {
  Wallet: new (provider: WalletProvider) => Wallet;
  Sensible: new (provider: WalletProvider) => Sensible;
}
