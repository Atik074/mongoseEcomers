import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const VariantProductSchema = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const InventoryProductSchema = new Schema({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [VariantProductSchema], required: true },
  inventory: { type: InventoryProductSchema, required: true },
});




export const ProductModel = model<TProduct>("ProductModel", productSchema );



