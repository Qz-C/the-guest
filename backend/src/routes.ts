import { Router } from "express";
import express from "express";
import auth from "./middleware/auth";
const accountController = require("./controllers/accounts/index")
const routes:Router = express.Router();

routes.post("/createAccount", auth(["ADMIN"]) , accountController.create);
routes.post("/auth", accountController.authenticate);
routes.put("/blockAndUnblock", auth(["ADMIN"]) , accountController.blockAndUnblock);
routes.put("/changeRole", auth(["ADMIN"]) , accountController.changeRole);
routes.put("/changePassword", auth(["USER","ADMIN","FACILITY"]) , accountController.changePassword)
routes.get("/logout", accountController.logout);

export default routes;