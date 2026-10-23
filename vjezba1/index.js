// const express = require('express'); 

import express from "express"

const app = express();

let PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server jušto dela na ${PORT}`)
})