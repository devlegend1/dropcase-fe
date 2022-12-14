interface INetworkParams {
  [chainId: string]: object;
}
const networkParams: INetworkParams = {
  "0x13881": {
    chainId: "0x13881",
    rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
    chainName: "Mumbai Testnet",
    nativeCurrency: { name: "MATIC", decimals: 18, symbol: "MATIC" },
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    iconUrls: ["https://harmonynews.one/wp-content/uploads/2019/11/slfdjs.png"],
  },
};

export default networkParams;
