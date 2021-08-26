import { 
    Application,
    Request,
    Response 
} from "express";

const express = require("express");
const app:Application = express();
const PORT:number = 60000;

app.listen(PORT, () => {
    
    console.log(`Server running on port ${PORT}`);
})