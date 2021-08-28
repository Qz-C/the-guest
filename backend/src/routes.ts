import { Router } from "express";
import express from "express";
import auth from "./middleware/auth";
const accountController = require("./controllers/accounts/index")
const routes:Router = express.Router();

routes.post("/createAccount", accountController.create);
routes.post("/auth", accountController.authenticate);
routes.put("/blockAndUnblock", accountController.blockAndUnblock);
routes.put("/changeRole", accountController.changeRole);
routes.put("/changePassword", auth(["USER","ADMIN","FACILITY"]) , accountController.changePassword)

export default routes;