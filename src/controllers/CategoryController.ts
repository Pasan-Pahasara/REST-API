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

      return res.status(200).json({
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
    try {
      let categories = Category.find();
      return res.status(200).json({ responseData: categories });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured!" });
      }
    }
  };

  updateCategory: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //update operation
    try {
      //destructuring assignment
      const { id } = req.params;

      let updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
        new: true,
      }); //new true karanna ona live update vennanam response eka
      return res
        .status(200)
        .json({
          message: "Updated Category Successfully..!",
          responseData: updatedCategory,
        });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured!" });
      }
    }
  };

  deleteCategory: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //delete operation
    try {
        //destructuring assignment
        const { id } = req.params;
  
        let deletedCategory = await Category.findByIdAndDelete(id); //new true karanna ona live update vennanam response eka

        if (!deletedCategory) {
            throw new Error("Faild to Delete Category!")
        }

        return res
          .status(200)
          .json({
            message: "Deleted Category Successfully..!",
            responseData: deletedCategory,
          });
      } catch (error: unknown) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        } else {
          return res.status(500).json({ message: "Unknown error occured!" });
        }
      }
  };
}
