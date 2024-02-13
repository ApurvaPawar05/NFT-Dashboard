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

module.exports = nftRouter;