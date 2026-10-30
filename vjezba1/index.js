// const express = require('express'); 

import express from "express"

const app = express();

let PORT = 3000;

// RUTA/endpoint = "/" (root, ruta, defaultni endpoint)
// HTTP metoda = GET
// prvi parametat = HTTP request
// drugi parametar = HTTP response
app.get("/", (req, res)=> {
    console.log("pozvana je GET metoda na defaultnom endpintu!");
    res.send("pozdrav iz express.js servera")
})

//ovo je u stcvarnosti spremljeno u DB(skoro nikad na serveru)
//ovo je in memory data
let pizze = [
    { id: 1, naziv:"margerita", cijena: 35 },
    { id: 2, naziv:"kapri", cijena: 45 },
    { id: 3, naziv:"cetiri sira", cijena: 50 }
]

app.get("/pizze", (req,res)=>{
    console.log("pozvana ej GET motoda na /pizze endpointu")
    res.json(pizze);
})

app.listen(PORT, () => {
    console.log(`Server jušto dela na ${PORT}`)
})