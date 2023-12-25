
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require('firebase-functions');
const express=require('express'); 
const cors=require('cors');
const stripe = require('stripe')('sk_test_51ONwcuDuF4e9ixnR8uH8hZNXNnKnIWjmDlHBQpBg9WxdrcvJnMFUpPhs6n68XDLYx8UntUrhbMcKwAyBTlhmJ60R00HLJXOfd1')

// API

//APP-CONFIG

const app= express();

//-Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//-Api-routes

app.get('/',(req,res)=>{
 res.send('hello world')
})

app.post('/payments/create/:total',async(req,res)=>{
  //we can use both query and params
  const total=req.params.total;
  console.log('payment recieved >>> ' ,total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency:'usd'
  });

  res.status(201).send({
    clientSecret:paymentIntent.client_secret,
  })

})

// Listen

exports.api= functions.https.onRequest(app);

// app.listen(exports.api, function () {
//   console.log(`CORS-enabled web server listening on port ${exports.api.__endpoint}`);
// });
