import { Document, Schema, model } from "mongoose";

interface IItem extends Document {
  itemCode: string;
  name: string;
  description: string;
  qty: number;
  unitPrice: number;
}

const ItemSchema = new Schema(
  {
    itemCode: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const user = model<IItem>("Item", ItemSchema);
