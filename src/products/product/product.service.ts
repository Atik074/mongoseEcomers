
import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductFromDatabase = async (productData: TProduct) => {
  const result = await ProductModel.create(productData);
  return result;
};

const getProductFromDatabase = async() => {
  const result = await ProductModel.find();
  return result;
};

const findProductFromDatabase = async (id: string) => {
  const result = await ProductModel.findOne({ _id:id });
  return result;
};

//update product 
const updateProductFromDatabase =async(id:string , updateDoc:any) => {
  
    const result = await ProductModel.findByIdAndUpdate({ _id:id} ,{$set:updateDoc} ,{ new: true })  
    return result; 
  

}

// delete product 
const deleteProductFromDatabase =async(id: string) => {
    const result = await ProductModel.deleteOne({ _id:id})
    return result; 

}


const  searchProductFromDatabase = async(searchTerm:any)=>{
  const result = await ProductModel.find({name:searchTerm}) 
   return result ;
}

export const ProductService = {
  createProductFromDatabase ,
  getProductFromDatabase ,
  findProductFromDatabase,
  updateProductFromDatabase ,
  deleteProductFromDatabase,
  searchProductFromDatabase
 
  
};
