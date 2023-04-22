import { RequestHandler, Request, Response } from "express";

export default class PostController {
  createPost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //create operation
    return res;
  };

  retrieveAllPost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //read operation
    return res;
  };

  updatePost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //update operation
    return res;
  };

  deletePost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //delete operation
    return res;
  };
}
