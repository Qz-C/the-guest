import { Router } from "express";
import express from "express";
import auth from "./middleware/auth";
import { Role } from ".prisma/client";

const accountController = require("./controllers/accounts");
const customerAdminController = require("./controllers/admin/customer/index");
const facilityAdminController = require("./controllers/admin/facility/index");
const {createVisit} = require("./controllers/visit/create");
const {list} = require("./controllers/visit/list");
const {listVisits} = require("./controllers/user/listVisits")
const { respondInvitation } = require("./controllers/user/respondInvitation");

const placeAdminController = require("./controllers/admin/place/index");

const routes:Router = express.Router();

const allPermissions:Role[] = ["USER","ADMIN","FACILITY"];

//includes middlewares

//UNIVERSAL
routes.post("/account/auth", accountController.authenticate);
routes.put("/account/changePassword", auth(allPermissions) , accountController.changePassword);
routes.get("/account/logout", auth(allPermissions), accountController.logout);

//ADMIN ONLY
routes.post("/account/create", accountController.create);
routes.put("/account/blockAndUnblock", accountController.blockAndUnblock);
routes.put("/account/changeRole", accountController.changeRole);

routes.post("/customer/create", customerAdminController.create);
routes.get("/customer", customerAdminController.getById);
routes.put("/customer/update", customerAdminController.update);
routes.get("/customer/list", customerAdminController.list);

routes.put("/facility/update", facilityAdminController.update);
routes.get("/facility", facilityAdminController.getById);
routes.get("/facility/list", facilityAdminController.list);

routes.post("/place/create", placeAdminController.create);
routes.put("/place/update", placeAdminController.update);
routes.get("/place", placeAdminController.getById);


//FACILITY
routes.post("/visit/create", auth(["ADMIN","FACILITY"]) , createVisit);
routes.get("/visit/list", auth(["ADMIN","FACILITY"]) , list);


//USER
routes.get("/user/visits", auth(["USER"]) , listVisits);
routes.put("/user/respondInvitation", auth(["USER"]) , respondInvitation);

export default routes;