import { RequestHandler, Request, Response } from "express";
import mongoose, { ClientSession } from "mongoose";
import { Category } from "../models/Category";
import { Post } from "../models/Post";
import { Tag } from "../models/Tag";

export default class PostController {
  createPost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    let session: ClientSession | null = null;

    try {
      const { categoryName } = req.body;

      // start the session and transaction
      session = await mongoose.startSession();
      session.startTransaction();

      // check whether the relevant category already exists or not
      let category = await Category.findOne({
        categoryName: categoryName,
      }).session(session);

      if (!category) {
        // save category only if not exists
        category = new Category({ categoryName: categoryName });
        category = await category.save();
      }

      const post = new Post(req.body);
      // set the category id here
      post.categoryId = category._id.toString();
      // save Post details
      let newPost = await post.save();

      // getting the tags array from request body
      const tags = req.body.tags;

      // save tags
      if (tags.length > 0) {
        for (let i = 0; i < tags.length; i++) {
          // check whether the relevant tag already exists or not
          let tag = await Tag.findOne({ text: tags[i] }).session(session);
          if (!tag) {
            tag = new Tag({ text: tags[i] });
            await tag.save();
          }
        }
      }

      await session.commitTransaction();
      session.endSession();

      return res
        .status(200)
        .json({ message: "New Post created.", responseData: newPost });
    } catch (error: unknown) {
      if (session != null) {
        try {
          await session.abortTransaction();
        } catch (abortError) {
          console.log(`Error aborting transaction: ${abortError}`);
        }
      }

      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
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
