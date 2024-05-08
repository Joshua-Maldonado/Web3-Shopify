
import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import next from 'next';
import dotenv  from "dotenv";
import ABI from "./src/abi.json" assert { type: "json" };
import NewABI from "./src/newABI.json" assert { type: "json" };
import LiveABI from "./src/liveABI.json" assert { type: "json" };
import NewLiveABI from "./src/newLiveABI.json" assert { type: "json" };
import RedeemABI from "./src/liveRedeemABI.json" assert { type: "json" };
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { readContract } from "thirdweb";
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

dotenv.config();

//////////////////
// test net: avalanche-fuji  Main-net: Avalanche

const sdk = new ThirdwebSDK("Avalanche", {
  secretKey: process.env.SECRET_KEY,
});
/////////////////////////
// Test contracts
 //const contract = await sdk.getContractFromAbi("0xBbD09E2E9852ef987d9d895C7eC42378b90A8Ed2", NewABI);
 //  console.log(contract);

 //const redeemedContract = await sdk.getContractFromAbi("0xb241673eb04739d7E42c42a6312897F7d6694817", ABI);
 


 /////////////////////////
// Live contracts
 const contract = await sdk.getContractFromAbi("0x8E4c9206e664A18845EC6855f2a6d3A45309491b", NewLiveABI);
  console.log(contract);

const redeemedContract = await sdk.getContractFromAbi("0x946dEdA8B8AbA7717A6f18c9B41AE821eD78F461", RedeemABI);
console.log(redeemedContract);

app.prepare().then(async() => {
  
  const server = express()

  var jsonParser = bodyParser.json()

  

  var allowedOrigins = ['https://coachella-2024-vip-747cc0cc57da.herokuapp.com','https://coachella-redemption.opensea.io','http://coachella-redemption.opensea.io','https://coachella-2024-vip-prod-e9adf7d2eacc.herokuapp.com','http://localhost:3000'];
  server.use(cors({
    origin: function(origin, callback){
      // allow requests with no origin 
      // (like mobile apps or curl requests)
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  }));
  
  var corsOptions = {
    origin: 'https://coachella-redemption.opensea.io',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


  server.get('/isapproved/:address', cors(corsOptions), async function (req, res) {
    const result = await readContract({
      contract,
      method: "isApprovedForAll",
      options: {data:[req.params.address,req.params.address]},
    });
    console.log(result)
    return(result)
  })

  server.get('/gettokendata/:address', cors(corsOptions), async function (req, res) {

    //console.log(req)
    var origin = req.get('sec-fetch-site');
    console.log(origin)
    if(origin == "same-origin"){

   

    const tokens = [];
    

    //const tokens1 = await contract.erc721.getOwned("0x313752A0a3d0f69fccB5CE3E9bb2D0b372C5F820");

    const options = {method: 'GET', headers: {accept: 'application/json'}};
    const url = "https://glacier-api.avax.network/v1/chains/43114/addresses/"+req.params.address+"/balances:listErc721?contractAddress=0x8E4c9206e664A18845EC6855f2a6d3A45309491b";

    fetch(url, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      tokens.push(response.erc721TokenBalances);
      console.log("TOKENS AFTER PUSH: "+tokens)
    })
    .catch(err => console.error(err));

    
    const redeemed = [];
    const redeemed1 = (await redeemedContract.erc1155.balanceOf(req.params.address,1)).toNumber();
    const redeemed2 = (await redeemedContract.erc1155.balanceOf(req.params.address,2)).toNumber();
    const redeemed3 = (await redeemedContract.erc1155.balanceOf(req.params.address,3)).toNumber();


   


    if(redeemed1 > 0){
      redeemed.push({contract: "0x946dEdA8B8AbA7717A6f18c9B41AE821eD78F461",id: 1, qualtity: redeemed1});
    }
    if(redeemed2 > 0){
      redeemed.push({contract: "0x946dEdA8B8AbA7717A6f18c9B41AE821eD78F461",id: 2, qualtity: redeemed2});
    }
    if(redeemed3 > 0){
      redeemed.push({contract: "0x946dEdA8B8AbA7717A6f18c9B41AE821eD78F461",id: 3, qualtity: redeemed3});
    }

    console.log(tokens);
    console.log(redeemed);

    const frontRes = {tokenData: tokens, redeemedData: redeemed}

    
        
        
        console.log("Tokens: " + JSON.stringify(tokens) + " Redeemed: "+ JSON.stringify(redeemed));
        console.log(frontRes); 
        
        res.status(200).send(frontRes); 
    
  }
  else {
    res.status(400).send(JSON.stringify("NA_ERR"))
  }

  })

server.post('/neworder', jsonParser, async function(req, res) {
  var sendContent = { "content": req.body, "code": 9991247644};
  console.log(sendContent);
  var origin = req.get('sec-fetch-site');
    if(origin == "same-origin"){

      await fetch('https://webhooks.runalloy.com/663be1e784a8d12c53d4612a', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendContent),
      })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            // Handle data
            //this.props.buttonFunction();
            res.status(200).send(JSON.stringify({success: true, data: data}))
         })
         .catch((err) => {
            console.log(err.message);
            //this.props.errorFunction();
            res.status(400).send(JSON.stringify({success: false}))
         });
        }
        else{
          res.status(200).send(JSON.stringify({success: false, tokens: response}))
        }
})


    

    
     
    
 

  server.get('/', cors(), (req, res) => {
    console.log("PINGED");
    
    
    return handle(req, res)
  })

  server.all('*', cors(), (req, res) => {
    console.log("PINGED *");
    
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })

})