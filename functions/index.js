const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    'sk_test_51IpRMbG7cNjpw2SyNLLUwrQEXghlDTFA2q05d2889kBkBSzcdnwR3gPcfO0qeZudlgalXTW2R5KNn6wgrO99N2dc000Hp6KkQV'
)

//Api

//App config
const app= express();

//Middle wares
app.use(cors({ origin: true }));
app.use(express.json());

//Api routes
app.get('/', (request, response) => response.status(200).send
('Hello world'))

app.post('payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment request recieved boom!! for this amount >>>', total)

    const paymentIntent= await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });

    // Ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

//listencommand
exports.api = functions.https.onRequest(app)

//Example endpoint
//http://localhost:5001/clone-264ff/us-central1/api