import { 
    Application,
    Request,
    Response 
} from "express";

import routes from "./routes"

const express = require("express");
const app:Application = express();
const PORT:number = 60000;
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})