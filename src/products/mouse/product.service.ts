

import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createMouseIntoDatabase = async (mouseData: TProduct) => {
  const result = await ProductModel.create(mouseData);
  return result;
};

const getAllProductsIntoDatabase = async () => {
  const result = await ProductModel.find();
  return result;
};

const findProductIntoDatabase = async (id: string) => {
  const result = await ProductModel.findOne({ _id:id });
  return result;
};

//update product 

const updateProductIntoDatabase =async(id:string) => {
    const result = await ProductModel.updateOne({ _id:id});
    return result; 

}

// delete product 

const deleteProductIntoDatabase =async(id: string) => {
    const result = await ProductModel.deleteOne({ _id:id})
    return result; 

}


export const ProductService = {
  createMouseIntoDatabase,
  getAllProductsIntoDatabase,
  findProductIntoDatabase,
  updateProductIntoDatabase ,
  deleteProductIntoDatabase
};
