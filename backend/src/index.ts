import { 
    Application,
    Request,
    Response 
} from "express";

const express = require("express");
const app:Application = express();
const PORT:number = 3333;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})