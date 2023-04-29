import { Document, Schema, model } from "mongoose";

interface ICustomer extends Document {
  nic: string;
  name: string;
  address: string;
}

const CustomerSchema = new Schema(
  {
    nic: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const customer = model<ICustomer>("Customer", CustomerSchema);
