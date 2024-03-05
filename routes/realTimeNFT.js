const express = require('express');
const axios = require('axios');
const nftRouter = express.Router();

const jwt = 'Bearer ory_at_VY7gtNYkCNtAzY_sewB5ozwr7v1yjqWylTnHwl5NkZM.smcIHflKfb8bDMqqHWHEMvROe6ooYXdbX3CQqTfD43c';

nftRouter.get('/getTopNFTS', (req, res) => {
    let data = JSON.stringify({
       "query": "query ($network: evm_network, $limit: Int!, $offset: Int!, $from: String, $till: String) {\n  EVM(dataset: combined, network: $network) {\n    Transfers(\n      orderBy: {descendingByField: \"count\"}\n      limit: {offset: $offset, count: $limit}\n      where: {Block: {Date: {since: $from, till: $till}}, Transfer: {Currency: {Fungible: false}}}\n    ) {\n      Transfer {\n        Currency {\n          Symbol\n          SmartContract\n        }\n      }\n      count\n      senders: uniq(of: Transfer_Sender, method: approximate)\n      receivers: uniq(of: Transfer_Receiver, method: approximate)\n      ids: uniq(of: Transfer_Id, method: approximate)\n      ChainId\n    }\n  }\n}\n",
       "variables": "{\"network\":\"eth\",\"limit\":10,\"offset\":0,\"from\":\"2024-02-06\",\"till\":\"2024-02-13\",\"mempool\":false,\"dateFormat\":\"%Y-%m-%d\",\"date_middle\":\"2024-02-09\"}"
    });
    
    let config = {
       method: 'post',
       maxBodyLength: Infinity,
       url: 'https://streaming.bitquery.io/graphql',
       headers: { 
          'Content-Type': 'application/json', 
          'X-API-KEY': 'BQYNznjwTSh2pusiKDsecIeGuknrGbGJ', 
          'Authorization': jwt
       },
       data : data
    };
    
    axios.request(config)
    .then((response) => {
       res.status(200).json({status : true , data :response.data});
    })
    .catch((error) => {
       res.status(500).json({status : false , error : error});
    });
});

nftRouter.get('/getTopTransferedNFTS', (req, res) => {
   const axios = require('axios');
let data = JSON.stringify({
   "query": "query ($network: evm_network, $limit: Int!, $offset: Int!, $from: String, $till: String) {\n  EVM(dataset: combined, network: $network) {\n    Transfers(\n      orderBy: {descendingByField: \"count\"}\n      limit: {offset: $offset, count: $limit}\n      where: {Block: {Date: {since: $from, till: $till}}, Transfer: {Currency: {Fungible: false}}}\n    ) {\n      Transfer {\n        Currency {\n          Symbol\n          SmartContract\n        }\n      }\n      count\n      senders: uniq(of: Transfer_Sender, method: approximate)\n      receivers: uniq(of: Transfer_Receiver, method: approximate)\n      ids: uniq(of: Transfer_Id, method: approximate)\n      ChainId\n    }\n  }\n}\n",
   "variables": "{\"network\":\"eth\",\"limit\":10,\"offset\":0,\"from\":\"2024-02-06\",\"till\":\"2024-02-13\",\"mempool\":false,\"dateFormat\":\"%Y-%m-%d\",\"date_middle\":\"2024-02-09\"}"
});

let config = {
   method: 'post',
   maxBodyLength: Infinity,
   url: 'https://streaming.bitquery.io/graphql',
   headers: { 
      'Content-Type': 'application/json', 
      'X-API-KEY': 'BQY5c43Bt5jIs2cJBoIoUcLOum45jfj3', 
      'Authorization': 'Bearer ory_at_NP3H96iVAamGGtYjNF5g8qozCvA2jqneRUHF09jF-AI.Yk6az08qJYpZqJ1aPlyRWGRiPXa-18WS9L2uxrRDCAw'
   },
   data : data
};

axios.request(config)
.then((response) => {
   res.status(200).json({status : true , data :response.data});
})
.catch((error) => {
   res.status(500).json({status : false , error : error});
});
});

nftRouter.get('/getTopTradedNftTokens', (req, res) => {
let data = JSON.stringify({
   "query": "query ($network: evm_network, $limit: Int!, $offset: Int!, $from: String, $till: String) {\n  EVM(dataset: combined, network: $network) {\n    DEXTrades(\n      orderBy: {descendingByField: \"count\"}\n      limit: {offset: $offset, count: $limit}\n      where: {Block: {Date: {since: $from, till: $till}}, Trade: {Buy: {Currency: {Fungible: false}}, Sell: {Currency: {Fungible: true}}}}\n    ) {\n      Trade {\n        Buy {\n          Currency {\n            Symbol\n            SmartContract\n          }\n          min_price: Price(minimum: Trade_Buy_Price)\n          max_rice: Price(maximum: Trade_Buy_Price)\n        }\n        Sell {\n          Currency {\n            Symbol\n            SmartContract\n          }\n        }\n      }\n      buy_amount: sum(of: Trade_Buy_Amount)\n      sell_amount: sum(of: Trade_Sell_Amount)\n      count\n      ChainId\n    }\n  }\n}\n",
   "variables": "{\"network\":\"eth\",\"limit\":10,\"offset\":0,\"from\":\"2024-02-06\",\"till\":\"2024-02-13\",\"mempool\":false,\"dateFormat\":\"%Y-%m-%d\",\"date_middle\":\"2024-02-09\"}"
});

let config = {
   method: 'post',
   maxBodyLength: Infinity,
   url: 'https://streaming.bitquery.io/graphql',
   headers: { 
      'Content-Type': 'application/json', 
      'X-API-KEY': 'BQY5c43Bt5jIs2cJBoIoUcLOum45jfj3', 
      'Authorization': 'Bearer ory_at_no6UWiHJcPOX8F0Us7_9zNyoUUAebtLKR_FdDv7h8iw.PUnPF-IQCVmlWvxQJdT1U_BxV7czNz-jgiD1fKtZgOI'
   },
   data : data
};

axios.request(config)
.then((response) => {
   res.status(200).json({status : true , data :response.data});
})
.catch((error) => {
   res.status(500).json({status : false , error : error});
});
});


nftRouter.get('/getNFTmarketPlaceData', (req, res) => {
   let data = JSON.stringify({
      "query": "query ($network: evm_network, $limit: Int!, $offset: Int!, $from: String, $till: String) {\n  EVM(dataset: combined, network: $network) {\n    DEXTrades(\n      orderBy: {descendingByField: \"count\"}\n      limit: {offset: $offset, count: $limit}\n      where: {Block: {Date: {since: $from, till: $till}}, Trade: {Buy: {Currency: {Fungible: false}}, Sell: {Currency: {Fungible: true}}}}\n    ) {\n      Trade {\n        Dex {\n          ProtocolName\n          ProtocolFamily\n          ProtocolVersion\n        }\n      }\n      nfts: uniq(of: Trade_Buy_Currency_SmartContract, method: approximate)\n      currencies: uniq(of: Trade_Sell_Currency_SmartContract, method: approximate)\n      buyers: uniq(of: Trade_Buy_Buyer, method: approximate)\n      count\n      ChainId\n    }\n  }\n}\n",
      "variables": "{\"network\":\"eth\",\"limit\":10,\"offset\":0,\"from\":\"2024-02-06\",\"till\":\"2024-02-13\",\"mempool\":false,\"dateFormat\":\"%Y-%m-%d\",\"date_middle\":\"2024-02-09\"}"
   });
   
   let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://streaming.bitquery.io/graphql',
      headers: { 
         'Content-Type': 'application/json', 
         'X-API-KEY': 'BQY5c43Bt5jIs2cJBoIoUcLOum45jfj3', 
         'Authorization': 'Bearer ory_at_oaZr2yudJlOP920cxlkLsd5uocJSTgMNA9uWE0gjdOQ.QyZGYalvE7V08GYkbwAGl8bq0OIDbE5A03f0SfAQqpg'
      },
      data : data
   };
   
   axios.request(config)
   .then((response) => {
      res.status(200).json({status : true , data :response.data});
   })
   .catch((error) => {
      res.status(500).json({status : false , error : error});
   });

});

nftRouter.get('/getDEXtradeProtocolsByDate', (req, res) => {
let data = JSON.stringify({
   "query": "query ($network: evm_network, $from: String, $till: String) {\n  EVM(dataset: combined, network: $network) {\n    DEXTrades(\n      orderBy: {descending: Block_Date}\n      where: {Block: {Date: {since: $from, till: $till}}, Trade: {Buy: {Currency: {Fungible: false}}}}\n    ) {\n      Block {\n        Date\n      }\n      Trade {\n        Dex {\n          ProtocolFamily\n          ProtocolVersion\n          ProtocolName\n        }\n      }\n      count\n      ChainId\n    }\n  }\n}\n",
   "variables": "{\"network\":\"eth\",\"from\":\"2024-02-06\",\"till\":\"2024-02-13\",\"mempool\":false,\"dateFormat\":\"%Y-%m-%d\",\"date_middle\":\"2024-02-09\"}"
});

let config = {
   method: 'post',
   maxBodyLength: Infinity,
   url: 'https://streaming.bitquery.io/graphql',
   headers: { 
      'Content-Type': 'application/json', 
      'X-API-KEY': 'BQY5c43Bt5jIs2cJBoIoUcLOum45jfj3', 
      'Authorization': 'Bearer ory_at_g3qOqf3kWFs7ZXXieGWFWiP75EjE9uFi7fcIGp2cluw.L-3Ebk73i7PUl8hMMmupBfJrRJPSNCpCAYIOWlShUmk'
   },
   data : data
};

axios.request(config)
.then((response) => {
   res.status(200).json({status : true , data :response.data});
})
.catch((error) => {
   res.status(500).json({status : false , error : error});
});
});


module.exports = nftRouter;