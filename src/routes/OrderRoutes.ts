import express, { Router } from "express";
import OrderController from "../controllers/OrderController";

export default class PostRoutes {
  private router: Router = express.Router();
  private orderContoller: OrderController = new OrderController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    //POST /api/v1/post
    this.router.post("/", this.orderContoller.addOrder);

    //GET /api/v1/post
    this.router.get("/", this.orderContoller.retrieveAllOrders);
    
    //PUT /api/v1/post/:itemCode
    this.router.put("/:orderID", this.orderContoller.updateOrder);
    
    //DELETE /api/v1/post/:itemCode
    this.router.delete("/:orderID", this.orderContoller.deleteOrder);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
