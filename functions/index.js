const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51NeC5eSAfG2bMhAEAqfYK4rLKmhb3PafdUmEGKafeew7l2lkNesHmQPo" +
    "May5R1UlWzRIKQArCuN0Tk7CC0UTznT500hFkSLvhw",
);

// API


// App config
const app = express();
// Middlewares
app.use(cors({origin: true}));
app.use(express.json());


// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request recieved for this Amount >>", total );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subuints of the currency
    currency: "inr",
  });
    // ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// LIsten command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/r--mart/us-central1/api
