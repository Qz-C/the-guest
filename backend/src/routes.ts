import { Router } from "express";
import express from "express";
const accountController = require("./controllers/accounts/index")
const routes:Router = express.Router();

routes.post("/createAccount", accountController.create);
routes.post("/auth", accountController.authenticate);
routes.put("/blockAndUnblock", accountController.blockAndUnblock);
routes.put("/changeRole", accountController.changeRole);

export default routes;