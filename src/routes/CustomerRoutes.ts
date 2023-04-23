import express, { Router } from "express";
import CustomerController from "../controllers/CustomerController";

export default class CustomerRoutes {
  private router: Router = express.Router();
  private customerController: CustomerController = new CustomerController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    //POST /api/v1/post
    this.router.post("/", this.customerController.addCustomer);

    //GET /api/v1/post
    this.router.get("/", this.customerController.retrieveAllCustomers);
    
    //PUT /api/v1/post/:nic
    this.router.put("/:nic", this.customerController.updateCustomer);
    
    //DELETE /api/v1/post/:nic
    this.router.delete("/:nic", this.customerController.deleteCustomer);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
