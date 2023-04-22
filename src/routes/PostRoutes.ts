import express, { Router } from "express";
import PostController from "../controllers/PostController";

export default class PostRoutes {
  private router: Router = express.Router();
  private postContoller: PostController = new PostController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    //POST /api/v1/post
    this.router.post("/", this.postContoller.createPost);

    //GET /api/v1/post
    this.router.get("/", this.postContoller.retrieveAllPost);
    
    //PUT /api/v1/post/:id
    this.router.put("/:id", this.postContoller.updatePost);
    
    //DELETE /api/v1/post/:id
    this.router.delete("/:id", this.postContoller.deletePost);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
