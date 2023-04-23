import express, { Router } from "express";
import ItemController from "../controllers/ItemController";

export default class PostRoutes {
  private router: Router = express.Router();
  private itemContoller: ItemController = new ItemController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    //POST /api/v1/post
    this.router.post("/", this.itemContoller.addItem);

    //GET /api/v1/post
    this.router.get("/", this.itemContoller.retrieveAllItems);
    
    //PUT /api/v1/post/:itemCode
    this.router.put("/:itemCode", this.itemContoller.updateItem);
    
    //DELETE /api/v1/post/:itemCode
    this.router.delete("/:itemCode", this.itemContoller.deleteItem);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
