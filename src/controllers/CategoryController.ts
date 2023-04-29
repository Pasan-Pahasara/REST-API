import { RequestHandler, Request, Response } from "express";

export default class CategoryController {
  createCategory: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //create operation
    return res;
  };

  retrieveAllCategories: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //read operation
    return res;
  };

  updateCategory: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //update operation
    return res;
  };

  deleteCategory: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //delete operation
    return res;
  };
}
