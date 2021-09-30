const axios = require("axios");
const qs = require('querystring');
const express = require("express");
const app = express();


const url2 = "https://webhook.frontapp.com/sms/288407c03abb884bf12fec634a52b1e8b58e71af3dafe6d7a2d7beac2bf7b62e886b3612dd9f79394b0dac6539b62099"
const config =  {
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
    }};
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/webhok", (req, res)=>{
     // manejo de la ruta
  const enviar = req.body.originalDetectIntentRequest.payload;
  console.log(req.body.originalDetectIntentRequest.payload);
  let { 
    ApiVersion,
    SmsSid,
    SmsStatus,
    SmsMessageSid,
    NumSegments,
    ToState,
    From,
    MessageSid,
    AccountSid,
    ToCity,
    FromCountry,
    ToZip,
    FromCity,
    To,
    FromZip,
    ToCountry,
    Body,
    NumMedia,
    FromState 
    } = enviar;

  let requestBody = {
      ApiVersion,
      SmsSid,
      SmsStatus,
      SmsMessageSid,
      NumSegments,
      ToState,
      From,
      MessageSid,
      AccountSid,
      ToCity,
      FromCountry,
      ToZip,
      FromCity,
      To,
      FromZip,
      ToCountry,
      Body,
      NumMedia,
      FromState 
    };

    axios.post(url2, qs.stringify(requestBody), config)
    .then(function (response) {
    console.log(response);
    // ... hacemos otras cosas

    res.status(200).json({ok: true, msg:"mensaje enviado correctamente"});
    })
    .catch(error => {
    // manejamos el error
    console.error(error);
    return res.status(500).json({
    error: "Upps, algo fue mal"
    });

    });


});

app.listen(5000, () => {
    console.log("Servidor escuchando");
  });