import { RequestHandler, Request, Response } from "express";

export default class ItemController {
  addItem: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //create operation
    return res;
  };

  retrieveAllItems: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //read operation
    return res;
  };

  updateItem: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //update operation
    return res;
  };

  deleteItem: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //delete operation
    return res;
  };
}
