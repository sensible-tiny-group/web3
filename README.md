# web3

- 我们参考以太坊的 web3.js 和 ether.js，做了一个 bsv 链上的 web3.js
- 应用方通过 web3.js 和插件钱包进行通信，可以实现对交易的签名，以继续自身业务的逻辑。
- 钱包方只需要维护必要的几个接口，任何新加入的钱包只要实现这些接口即可支持 web3 的应用。

![](docs/01.svg)
