import { Document, Schema, model } from "mongoose";

interface ICategory extends Document {
    category: string;
  }

const CategorySchema = new Schema(
  {
    categoryName: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

export const category = model<ICategory>("Category", CategorySchema);
