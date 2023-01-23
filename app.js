const {loadTransaction} = require('./transaction_model');
const { request, response } = require('express');
const express = require('express');
const { default: fetch } = require('node-fetch');
const app = express();
const port  = 3000;
app.listen(port, ()=> console.log('server running...'));


app.get('/',(request,response)=>{
    response.send(loadTransaction())
});

app.get('/transactions:id',async (request,response)=>{
    console.log(request.params);
    const id=request.params
    const api_url= `https://mocki.io/v1/12780565-e67a-4c9f-8da1-888f23030c34/${id}`
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
});

