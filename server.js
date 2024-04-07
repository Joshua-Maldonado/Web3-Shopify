
import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import next from 'next';
import dotenv  from "dotenv";
import ABI from "./src/abi.json" assert { type: "json" };
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

dotenv.config();

const sdk = new ThirdwebSDK("avalanche-fuji", {
  secretKey: process.env.SECRET_KEY,
});
const contract = await sdk.getContractFromAbi("0xB15cb2C66a4b9A7640bbfC803993D7ACBEB879C7", ABI);
  console.log(contract);


app.prepare().then(async() => {
  
  const server = express()

  var jsonParser = bodyParser.json()

  

  var allowedOrigins = ['https://coachella-2024-vip-747cc0cc57da.herokuapp.com','http://localhost:3000'];
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
    origin: 'hhttps://coachella-2024-vip-747cc0cc57da.herokuapp.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }




  server.get('/gettokendata/:address', cors(corsOptions), async function (req, res) {

    //console.log(req)
    var origin = req.get('sec-fetch-site');
    console.log(origin)
    if(origin == "same-origin"){

   

    const tokens = [];
    const tokens1 = (await contract.erc1155.balanceOf(req.params.address,1)).toNumber();
    const tokens2 = (await contract.erc1155.balanceOf(req.params.address,2)).toNumber();
    
    if(tokens1 > 0){
      tokens.push({contract: "0xB15cb2C66a4b9A7640bbfC803993D7ACBEB879C7",id: 1, qualtity: tokens1});
    }
    if(tokens2 > 0){
      tokens.push({contract: "0xB15cb2C66a4b9A7640bbfC803993D7ACBEB879C7",id: 2, qualtity: tokens2});
    }

    console.log(tokens);

    
        
        
        console.log("DT RESPONSE: " + JSON.stringify(tokens))
        
          res.status(200).send(tokens)
      
    
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

      await fetch('https://webhooks.runalloy.com/6604637c971f7dd2d5f5d739', {
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