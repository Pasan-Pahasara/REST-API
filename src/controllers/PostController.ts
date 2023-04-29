import { RequestHandler, Request, Response } from "express";
import mongoose, { ClientSession } from "mongoose";

export default class PostController {
  createPost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //create operation
  //   let session:ClientSession | null=null;
  //   try{
  //     const{categoryName} =req.body;u

  //     session= await mongoose.startSession();
  //     session.startTransaction();


  // } catch (error: unknown) {
  //   if (error instanceof Error) {
  //     return res.status(500).json({ message: error.message });
  //   } else {
  //     return res.status(500).json({ message: "Unknown error occured." });
  //   }
  // }
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
