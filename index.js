// const express = require("express");
// const Moralis = require("moralis").default;
// const { EvmChain, EvmAddress } = require("@moralisweb3/common-evm-utils");

// const app = express();
// const port = 3000;

// const MORALIS_API_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijg2NWExYjczLWNjNmUtNDRmZS05ZmVjLTgxZDhlMGI5MzQ0NSIsIm9yZ0lkIjoiMzYxMTMwIiwidXNlcklkIjoiMzcxMTQ1IiwidHlwZUlkIjoiZjZlYjU4ZWItMmRjZC00N2U0LThlYjEtN2NjNjA5OTlkMTgxIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTczNTg5MzYsImV4cCI6NDg1MzExODkzNn0.exsvKBWeycH1qGKz2J_t-GvBaGdgoUU-LQkmPO5D_CU";
// const chain = "0x1";
// const address = "0xa74476443119A942dE498590Fe1f2454d7D4aC0d";

// async function getDemoData() {
//   // Get native balance
//   const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
//     address,
//     chain,
//   });

//   // Format the native balance formatted in ether via the .ether getter
//   const native = nativeBalance.result.balance.ether;

//   // Get token balances
//   const tokenBalances = await Moralis.EvmApi.token.getWalletTokenBalances({
//     address,
//     chain,
//   });

//   // Format the balances to a readable output with the .display() method
//   const tokens = tokenBalances.result.map((token) => token.display());

//   // Get the nfts
//   const nftsBalances = await Moralis.EvmApi.nft.getWalletNFTs({
//     address,
//     chain,
//     limit: 10,
//   });

//   // Format the output to return name, amount and metadata
//   const nfts = nftsBalances.result.map((nft) => ({
//     name: nft.result.name,
//     amount: nft.result.amount,
//     metadata: nft.result.metadata,
//   }));

//   return { native, tokens, nfts };
// }

// app.get("/demo", async (req, res) => {
//     try {
//       // Get and return the crypto data
//       const data = await getDemoData();
//       res.status(200);
//       res.json(data);
//     } catch (error) {
//       // Handle errors
//       console.error(error);
//       res.status(500);
//       res.json({ error: error.message });
//     }

// });

// app.post('/apurv', async (req, res) => {
//     try {
//         const response = await Moralis.EvmApi.token.getTokenPrice({
//           chain: "0x1",
//           include: "percent_change",
//           address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
//         });

//         res.status(200).json(response.raw);
//       } catch (e) {
//         console.error(e);
//       }
// })

// const startServer = async () => {
//   await Moralis.start({
//     apiKey: MORALIS_API_KEY,
//   });

//   app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
//   });
// };

// startServer();

// // const axios = require("axios");

// // const apiKey =
// //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijg2NWExYjczLWNjNmUtNDRmZS05ZmVjLTgxZDhlMGI5MzQ0NSIsIm9yZ0lkIjoiMzYxMTMwIiwidXNlcklkIjoiMzcxMTQ1IiwidHlwZUlkIjoiZjZlYjU4ZWItMmRjZC00N2U0LThlYjEtN2NjNjA5OTlkMTgxIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTczNTg5MzYsImV4cCI6NDg1MzExODkzNn0.exsvKBWeycH1qGKz2J_t-GvBaGdgoUU-LQkmPO5D_CU";
// //   async function getNFTContractTransfers(contractAddress, cursor = null) {
// //     const params = {
// //       address: contractAddress,
// //       chain: "eth",
// //       format: "decimal",
// //       limit: 100,
// //       cursor: cursor,
// //       disable_total: true,
// //     };
  
// //     const response = await axios.get(
// //       "https://deep-index.moralis.io/api/v2/nft/transfers",
// //       {
// //         params: params,
// //         headers: {
// //           "X-API-Key": apiKey,
// //         },
// //       }
// //     );
  
// //     return response.data;
// //   }
  
// //   async function getAllNFTContractTransfers(contractAddress) {
// //     let cursor = "";
// //     let totalTransactions = 0;
// //     let loggedTransactions = 0; // Counter for logged transactions
  
// //     while (cursor !== null && loggedTransactions < 10) { // Check if loggedTransactions is less than 10
// //       const response = await getNFTContractTransfers(contractAddress, cursor);
// //       const transactions = response.result;
  
// //       transactions.forEach(transaction => {
// //         console.log(transaction); // Log each transaction
// //         loggedTransactions++; // Increment counter
// //       });
  
// //       totalTransactions += transactions.length;
// //       cursor = response.cursor || null;
// //     }
  
// //     console.log("Total transactions:", totalTransactions);
// //   }
  
// //   async function main() {
// //     // Bored Ape Yacht Club: BAYC Token Contract Address
// //     const contractAddress = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";
// //     await getAllNFTContractTransfers(contractAddress);
// //   }
  
// //   main();
  

// const axios = require('axios');
// let data = JSON.stringify({
//    "query": "query ($network: evm_network, $limit: Int!, $from: String, $till: String) {\n  EVM(network: $network, dataset: combined) {\n    DEXTrades(\n      orderBy: {descending: Block_Number}\n      limit: {count: $limit}\n      where: {Trade: {Buy: {Currency: {Fungible: false, SmartContract: {not: \"0x\"}}}, Sell: {Currency: {SmartContract: {not: \"0x\"}}, Seller: {not: \"0x\"}}}, Block: {Date: {till: $till, since: $from}}}\n    ) {\n      Block {\n        Time\n      }\n      Transaction {\n        Hash\n      }\n      Trade {\n        Dex {\n          ProtocolFamily\n          ProtocolName\n          ProtocolVersion\n          SmartContract\n        }\n        Buy {\n          Currency {\n            SmartContract\n            Symbol\n          }\n          Price\n          Amount\n          Seller\n          Buyer\n          Ids\n          URIs\n        }\n        Sell {\n          Amount\n          Currency {\n            Symbol\n            SmartContract\n          }\n        }\n      }\n      ChainId\n    }\n  }\n}\n",
//    "variables": "{\"network\":\"eth\",\"mempool\":true,\"limit\":10,\"offset\":0,\"from\":\"2024-02-04\",\"till\":\"2024-02-11\",\"dateFormat\":\"%Y-%m-%d\",\"date_middle\":\"2024-02-07\"}"
// });

// let config = {
//    method: 'post',
//    maxBodyLength: Infinity,
//    url: 'https://streaming.bitquery.io/graphql',
//    headers: { 
//       'Content-Type': 'application/json', 
//       'X-API-KEY': 'BQYNznjwTSh2pusiKDsecIeGuknrGbGJ', 
//       'Authorization': 'Bearer ory_at_945iDumHS4rj2TpQbvyp2aFBwmTCFQiNx2sBQFa8fy8.BQT44exBHlfWZ6BLZMeWbWwX5gxfSNuHD9wWFDgi2O8'
//    },
//    data : data
// };

// axios.request(config)
// .then((response) => {
//    console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//    console.log(error);
// });

// const axios = require('axios');
// let data = JSON.stringify({
//    "query": "subscription ($network: evm_network, $mempool: Boolean) {\n  EVM(network: $network, mempool: $mempool) {\n    DEXTrades(where: {Trade: {Buy: {Currency: {Fungible: false}}}}) {\n      Block {\n        Time\n      }\n      Transaction {\n        Hash\n        Time\n      }\n      Trade {\n        Dex {\n          ProtocolFamily\n          ProtocolName\n          ProtocolVersion\n          SmartContract\n        }\n        Buy {\n          Currency {\n            SmartContract\n            Symbol\n          }\n          Price\n          Amount\n          Seller\n          Buyer\n          Ids\n          URIs\n        }\n        Sell {\n          Amount\n          Currency {\n            Symbol\n            SmartContract\n          }\n        }\n      }\n      ChainId\n    }\n  }\n}\n",
//    "variables": "{\"network\":\"eth\",\"mempool\":true,\"limit\":10,\"offset\":0,\"from\":\"2024-02-04\",\"till\":\"2024-02-11\",\"dateFormat\":\"%Y-%m-%d\",\"date_middle\":\"2024-02-07\"}"
// });

// let config = {
//    method: 'post',
//    maxBodyLength: Infinity,
//    url: 'https://streaming.bitquery.io/graphql',
//    headers: { 
//       'Content-Type': 'application/json', 
//       'X-API-KEY': 'BQYNznjwTSh2pusiKDsecIeGuknrGbGJ', 
//       'Authorization': 'Bearer ory_at_pJxoQFyTpIgRvmxtTSInjJi2PiwTAsLSle9viwDHo7E.4GEcCcoZl4fQgdr6foSoV3MDYgR6fbPfUHohvkFOYuE'
//    },
//    data : data
// };

// axios.request(config)
// .then((response) => {
//    console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//    console.log(error);
// });








//script
// class NFTTransfersByDate extends TimeChartComponent {
//    configuration() {
//        return {
//            topElement: response => response.EVM.Transfers,
//            chainId: response => response.EVM.Transfers[0]?.ChainId,
//            title: () => 'NFT Token Transfer Count by Date',
//            id: 'NFTTransfersByDate',
//            columns: [
//                {
//                    name: 'Date',
//                    cell: row => row.Block.Date
//                },
//                {
//                    name: 'Count',
//                    cell: row => +row.count
//                }
//            ],
//            options: {
//                theme: 'material',
//            }
//        }
//    }
// }

// class TopTransferNFT extends BootstrapTableComponent {
//    configuration() {
//        return {
//            topElement: response => response.EVM.Transfers,
//            chainId: response => response.EVM.Transfers[0]?.ChainId,
//            title: response => `Top traded NFT tokens in ${WidgetConfig.getName(response.EVM.Transfers[0]?.ChainId)}`,
//            id: 'TopTransferNFT',
//            columns: [
//                {
//                    name: 'NFT',
//                    cell: row => ({
//                        currency: row.Transfer.Currency.Symbol,
//                        smartContract: row.Transfer.Currency.SmartContract
//                    }),
//                    rendering: renderTokenLink, headerStyle: {width: '30%'},
//                },
//                {
//                    name: 'Transfers',
//                    cell: row => row.count,
//                },
//                {
//                    name: 'Unique Senders',
//                    cell: row => row.senders,
//                },
//                {
//                    name: '', cell: () => '', rendering: renderSenderRecieverIcon, headerStyle: {width: '50px'}
//                },
//                {
//                    name: 'Unique Receivers',
//                    cell: row => row.receivers,
//                    rendering: renderNumbers, headerStyle: {textAlign: 'end'},
//                },
//            ]
//        }
//    }
// }

// class NFTTransfersByDatePie extends PieChartComponent {
//    configuration() {
//        return {
//            topElement: response => response.EVM.Transfers,
//            chainId: response => response.EVM.Transfers[0]?.ChainId,
//            title: response => `Top transferred NFT tokens in ${WidgetConfig.getName(response.EVM.Transfers[0]?.ChainId)}`,
//            id: 'NFTTransfersByDatePie',
//            columns: [
//                {
//                    name: 'NFT',
//                    cell: row => row.Transfer.Currency.Symbol || row.Transfer.Currency.SmartContract,
//                },
//                {
//                    name: 'Count',
//                    cell: row => +row.count,
//                }
//            ],
//            options: {
//                height: 397,
//                chartArea: {
//                    left: 30,
//                    width: '85%',
//                },
//            }
//        }
//    }
// }

// class NFTTokenTradesByDate extends TimeChartComponent {
//    configuration() {
//        return {
//            topElement: response => response.EVM.DEXTrades,
//            chainId: response => response.EVM.DEXTrades[0]?.ChainId,
//            title: () => 'DEX Trades by Protocols by Date',
//            id: 'NFTTokenTradesByDate',
//            columns: [
//                {
//                    name: 'Date', cell: row => row.Block.Date
//                },
//                {
//                    name: row => `${row.Trade.Dex.ProtocolFamily} ${row.Trade.Dex.ProtocolVersion}`,
//                    cell: row => +row.count
//                },
//            ],
//            options: {
//                isStacked: true,
//                theme: 'material',
//            }
//        }
//    }
// }

// class TopTradedNFTTokens extends BootstrapTableComponent {
//    configuration() {
//        return {
//            topElement: response => response.EVM.DEXTrades,
//            chainId: response => response.EVM.DEXTrades[0]?.ChainId,
//            title: response => `Top traded NFT tokens in  ${WidgetConfig.getName(response.EVM.DEXTrades[0]?.ChainId)}`,
//            id: 'TopTradedNFTTokens',
//            columns: [
//                {
//                    name: 'NFT', cell: row => ({
//                        currency: row.Trade.Buy.Currency.Symbol,
//                        smartContract: row.Trade.Buy.Currency.SmartContract
//                    }),
//                    rendering: renderTokenLink, headerStyle: {width: '120px'},
//                },
//                {
//                    name: 'Trades', cell: row => row.count
//                },
//                {
//                    name: 'Paid Amount', cell: row => row.sell_amount,
//                    rendering: renderNumbers, headerStyle: {textAlign: 'end'}
//                },
//                {
//                    name: 'Currency', cell: row => ({
//                        currency: row.Trade.Sell.Currency.Symbol,
//                        smartContract: row.Trade.Sell.Currency.SmartContract
//                    }),
//                    rendering: renderTokenLink,
//                },
//                {
//                    name: 'Min Price',
//                    cell: row => row.Trade.Buy.min_price,
//                    rendering: renderNumbers, headerStyle: {textAlign: 'end'}
//                },
//                {
//                    name: 'Max Price', cell: row => row.Trade.Buy.max_rice,
//                    rendering: renderNumbers, headerStyle: {textAlign: 'end'}
//                },
//            ],
//        }
//    }
// }

// class TopTradedNFTTokensPie extends PieChartComponent {
//    configuration() {
//        return {
//            topElement: response => response.EVM.DEXTrades,
//            chainId: response => response.EVM.DEXTrades[0]?.ChainId,
//            title: response => `Top traded NFT tokens in  ${WidgetConfig.getName(response.EVM.DEXTrades[0]?.ChainId)}`,
//            id: 'TopTradedNFTTokensPie',
//            columns: [
//                {
//                    name: 'NFT', cell: row => row.Trade.Buy.Currency.Symbol || row.Trade.Buy.Currency.SmartContract,
//                },
//                {
//                    name: 'Count', cell: row => +row.count,
//                }
//            ],
//            options: {
//                title: 'Trades Count',
//                height: 397,
//                chartArea: {
//                    left: 50,
//                    width: '75%',
//                },
//            }
//        }
//    }
// }

// class TopExchangesForNFTs extends BootstrapTableComponent {
//    configuration() {
//        return {
//            topElement: response => response.EVM.DEXTrades,
//            chainId: response => response.EVM.DEXTrades[0]?.ChainId,
//            title: () => `NFT MarketPlace Data`,
//            id: 'TopExchangesForNFTs',
//            columns: [
//                {
//                    name: 'Protocol',
//                    cell: row => ({
//                        ProtocolFamily: row.Trade.Dex.ProtocolFamily,
//                        ProtocolName: row.Trade.Dex.ProtocolName,
//                        ProtocolVersion: row.Trade.Dex.ProtocolVersion
//                    }),
//                    rendering: renderDexProtocolLink,
//                },
//                {
//                    name: 'Trades', cell: row => row.count,
//                },
//                {
//                    name: 'Unique NFTs traded', cell: row => row.nfts,
//                },
//                {
//                    name: 'Unique Currencies Paid', cell: row => row.currencies,
//                },
//                {
//                    name: 'Unique NFT Buyers', cell: row => row.buyers
//                },
//            ]
//        }
//    }
// }

// class TopExchangesForNFTsPie extends PieChartComponent {
//    configuration() {
//        return {
//            topElement: response => response.EVM.DEXTrades,
//            chainId: response => response.EVM.DEXTrades[0]?.ChainId,
//            title: () => `NFT MarketPlace Data`,
//            id: 'TopExchangesForNFTsPie',
//            columns: [
//                {
//                    name: 'Protocol', cell: row => `${row.Trade.Dex.ProtocolName} ${row.Trade.Dex.ProtocolVersion}`
//                },
//                {
//                    name: 'Count', cell: row => +row.count,
//                }
//            ],
//            options: {
//                height: 397,
//                chartArea: {
//                    left: 50,
//                    width: '75%',
//                },
//            }
//        }
//    }
// }

// class LatestTradesNFTToken extends BootstrapTableComponent {
//    configuration() {
//        return {
//            topElement: response => response.EVM.DEXTrades,
//            chainId: response => response.EVM.DEXTrades[0]?.ChainId,
//            title: () => 'Latest Trades of NFT Tokens in Network',
//            id: 'LatestTradesNFTToken',
//            columns: [
//                {
//                    name: 'Time', cell: row => row.Block.Time,
//                    rendering: renderDate,
//                },
//                {
//                    name: 'Sell currency', cell: row => ({
//                        currency: row.Trade.Sell.Currency.Symbol,
//                        smartContract: row.Trade.Sell.Currency.SmartContract
//                    }),
//                    rendering: renderTokenLink, headerStyle: {width: '110px'},
//                },
//                {
//                    name: 'Seller', cell: row => row.Trade.Buy.Seller,
//                    rendering: renderJustAddressLink,
//                },
//                {
//                    name: '', cell: () => '', rendering: renderSenderRecieverIcon, headerStyle: {width: '50px'},
//                },
//                {
//                    name: 'Buyer', cell: row => row.Trade.Buy.Buyer,
//                    rendering: renderJustAddressLink,
//                },
//                {
//                    name: 'NFT', cell: row => ({
//                        currency: row.Trade.Buy.Currency.Symbol,
//                        smartContract: row.Trade.Buy.Currency.SmartContract
//                    }),
//                    rendering: renderTokenLink,
//                },
//                {
//                    name: 'ID',
//                    cell: row => ({id: row.Trade.Buy.Ids[0], address: row.Trade.Buy.Currency.SmartContract}),
//                    rendering: renderIdLink,
//                    headerStyle: {width: '110px'},
//                },
//                {
//                    name: 'Sell amount', cell: row => row.Trade.Sell.Amount,
//                    rendering: renderNumbers, headerStyle: {textAlign: 'end'}
//                },
//                {
//                    name: 'Price', cell: row => row.Trade.Buy.Price,
//                    rendering: renderNumbers, headerStyle: {textAlign: 'end'}
//                },
//                {
//                    name: 'Dex', cell: row => ({
//                        ProtocolFamily: row.Trade.Dex.ProtocolFamily,
//                        ProtocolName: row.Trade.Dex.ProtocolName,
//                        ProtocolVersion: row.Trade.Dex.ProtocolVersion
//                    }),
//                    rendering: renderDexProtocolLink, headerStyle: {width: '100px'},
//                },
//                {
//                    name: 'Hash', cell: row => row.Transaction.Hash,
//                    rendering: renderTX, headerStyle: {width: '110px'},
//                },
//            ]
//        }
//    }
// }


// const variables = {
//    network: 'eth',
//    mempool: false,
// }
// renderWithTime(variables, "2024-02-04","2024-02-11", function f(variables) {
//    renderComponent('Bearer ory_at_9y5mVYfbnvdRxv8BuHD4r1GGXvjEiBFV0_owK25qVh0.9Mkd1c7HZiQEEaPRrqvkUV3aLmGffNDWJH5nEa1jDDo', [[NFTTransfersByDate, '#NFTTransfersByDate']], 'NFT-Token-Transfers-By-Date_1', variables);
//    renderComponent('Bearer ory_at_9y5mVYfbnvdRxv8BuHD4r1GGXvjEiBFV0_owK25qVh0.9Mkd1c7HZiQEEaPRrqvkUV3aLmGffNDWJH5nEa1jDDo', [[NFTTransfersByDatePie, '#NFTTransfersByDatePie'], [TopTransferNFT, '#TopTransferNFT']], 'Top-transfered-NFT-tokens-in-network_1', variables);
//    renderComponent('Bearer ory_at_9y5mVYfbnvdRxv8BuHD4r1GGXvjEiBFV0_owK25qVh0.9Mkd1c7HZiQEEaPRrqvkUV3aLmGffNDWJH5nEa1jDDo', [[NFTTokenTradesByDate, '#NFTTokenTradesByDate']], 'NFT-Token-Trades-By-Date_2', variables);
//    renderComponent('Bearer ory_at_9y5mVYfbnvdRxv8BuHD4r1GGXvjEiBFV0_owK25qVh0.9Mkd1c7HZiQEEaPRrqvkUV3aLmGffNDWJH5nEa1jDDo', [[TopTradedNFTTokens, '#TopTradedNFTTokens'], [TopTradedNFTTokensPie, '#TopTradedNFTTokensPie']], 'Top-traded-NFT-tokens-in-network_1', variables);
//    renderComponent('Bearer ory_at_9y5mVYfbnvdRxv8BuHD4r1GGXvjEiBFV0_owK25qVh0.9Mkd1c7HZiQEEaPRrqvkUV3aLmGffNDWJH5nEa1jDDo', [[TopExchangesForNFTs, '#TopExchangesForNFTs'], [TopExchangesForNFTsPie, '#TopExchangesForNFTsPie']], 'NFT-Marketplace-Data_1_1', variables);
//    renderComponent('Bearer ory_at_9y5mVYfbnvdRxv8BuHD4r1GGXvjEiBFV0_owK25qVh0.9Mkd1c7HZiQEEaPRrqvkUV3aLmGffNDWJH5nEa1jDDo', [[LatestTradesNFTToken, '#LatestTradesNFTToken']], 'Latest-Trades-of-NFT-Tokens-in-Network_2', variables, 'Mempool-Subscription-Latest-Trades-of-NFT-Tokens-in-Network_2');
// })

const nfts = ["$WORLDBUILDERS", " nft"]


const axios = require('axios');
let data = JSON.stringify({
   "query": "query ($network: evm_network, $limit: Int!, $offset: Int!, $from: String, $till: String) {\n  EVM(dataset: combined, network: $network) {\n    DEXTrades(\n      orderBy: {descendingByField: \"count\"}\n      limit: {offset: $offset, count: $limit}\n      where: {Block: {Date: {since: $from, till: $till}}, Trade: {Buy: {Currency: {Fungible: false}}, Sell: {Currency: {Fungible: true}}}}\n    ) {\n      Trade {\n        Dex {\n          ProtocolName\n          ProtocolFamily\n          ProtocolVersion\n        }\n      }\n      nfts: uniq(of: Trade_Buy_Currency_SmartContract, method: approximate)\n      currencies: uniq(of: Trade_Sell_Currency_SmartContract, method: approximate)\n      buyers: uniq(of: Trade_Buy_Buyer, method: approximate)\n      count\n      ChainId\n    }\n  }\n}\n",
   "variables": "{\"network\":\"eth\",\"limit\":10,\"offset\":0,\"from\":\"2024-02-04\",\"till\":\"2024-02-11\",\"mempool\":false,\"dateFormat\":\"%Y-%m-%d\",\"date_middle\":\"2024-02-07\"}"
});

let config = {
   method: 'post',
   maxBodyLength: Infinity,
   url: 'https://streaming.bitquery.io/graphql',
   headers: { 
      'Content-Type': 'application/json', 
      'X-API-KEY': 'BQYNznjwTSh2pusiKDsecIeGuknrGbGJ', 
      'Authorization': 'Bearer ory_at_KZ8oYrVJe4nKWsk6w_wQsbIq3Az-wZZJHaMYGNmCg9Q.TkxORVaaojYjWhaPmumXUIwtA0lCmeRP2DZLYPRrj3g'
   },
   data : data
};

axios.request(config)
.then((response) => {
   console.log(JSON.stringify(response.data));
})
.catch((error) => {
   console.log(error);
});


// const axios = require('axios');

// let data = JSON.stringify({
//    "query": "query ($network: evm_network, $limit: Int!, $offset: Int!, $from: String, $till: String) {\n  EVM(dataset: combined, network: $network) {\n    DEXTrades(\n      orderBy: {descendingByField: \"count\"}\n      limit: {offset: $offset, count: $limit}\n      where: {Trade: {Buy: {Currency: {Fungible: false}}}, Block: {Date: {since: $from, till: $till}}}\n    ) {\n      Trade {\n        Buy {\n          Currency {\n            Symbol\n            SmartContract\n          }\n        }\n        Sell {\n          Currency {\n            Symbol\n            SmartContract\n          }\n        }\n      }\n      count\n      sellers: uniq(of: Trade_Buyer, method: approximate)\n      buyers: uniq(of: Trade_Seller, method: approximate)\n      ChainId\n    }\n  }\n}\n",
//    "variables": "{\"network\":\"eth\",\"limit\":10,\"offset\":0,\"from\":\"2024-02-04\",\"till\":\"2024-02-11\",\"mempool\":false,\"dateFormat\":\"%Y-%m-%d\",\"date_middle\":\"2024-02-07\"}"
// });

// let config = {
//    method: 'post',
//    maxBodyLength: Infinity,
//    url: 'https://streaming.bitquery.io/graphql',
//    headers: { 
//       'Content-Type': 'application/json', 
//       'X-API-KEY': 'BQYNznjwTSh2pusiKDsecIeGuknrGbGJ', 
//       'Authorization': 'Bearer ory_at_EHGitC3OC-W1hFQFsiGzGo4JaePNS7PqontEB_qq33U.zfUTvOT81h9ILRw_dq9vlhVU31R-bCb6In9A0B8qLxE'
//    },
//    data : data
// };

// axios.request(config)
// .then((response) => {
//    console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//    console.log(error);
// });
