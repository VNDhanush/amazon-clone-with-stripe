const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HYp4BBqTmmmhQFGZkXhiOzmvhxBzt3EUfnl0nczs9pMqvf5lJr6EILP8D5rukE9h4spsV767g1Oqs46JkMXQS4V00uLkb1sqU')

//--API


//--App config
const app=express();

//--Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//--API routes
app.get('/',(request,response)=>response.status(200).send('hello world'))

//--Listen command
exports.api=functions.https.onRequest(app)