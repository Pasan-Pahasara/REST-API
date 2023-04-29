import { RequestHandler, Request, Response } from "express";
import { Category } from "../models/Category";

export default class CategoryController {
  createCategory: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //create operation
    try {
      let category = new Category(req.body);
      let newCategory = await category.save();

      return res.status(200)
        .json({
          message: "New Category Added Successfully..!",
          responseData: newCategory,
        });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured!" });
      }
    }
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
