import { 
    Application,
} from "express";

import routes from "./routes"

const express = require("express");
const cookieParser = require('cookie-parser');
const app:Application = express();
app.use(cookieParser());
const PORT:number = 3333;
app.use(express.json());
app.use(routes);
;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})