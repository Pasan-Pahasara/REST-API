import { Document, Schema, model } from "mongoose";

interface IOrder extends Document {
  orderID: string;
  itemCode: string;
  qty: string;
  price: number;
}

const OrderSchema = new Schema(
  {
    orderID: {
      type: String,
      required: true,
    },
    itemCode: {
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
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const user = model<IOrder>("Order", OrderSchema);
