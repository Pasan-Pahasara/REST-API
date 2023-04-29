import { RequestHandler, Request, Response } from "express";

export default class OrderController {
  addOrder: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //create operation
    return res;
  };

  retrieveAllOrders: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //read operation
    return res;
  };

  updateOrder: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //update operation
    return res;
  };

  deleteOrder: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //delete operation
    return res;
  };
}
