import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { TProduct } from "./product.interface";
import { string } from "zod";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { data: mouseData } = req.body;
    const result = await ProductService.createMouseIntoDatabase(mouseData);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// get allProducts

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductsIntoDatabase();

    res.status(200).json({
      succes: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {}
};

//getSingle Product
const findSingleProduct = async (req: Request, res: Response) => {
        
    try{
        
    const {productId} = req.params

    const result = await ProductService.findProductIntoDatabase(productId)
   
    res.status(200).json({
     succes: true,
     message: "Product is found successfully!",
     data: result,
   })
 }catch(error:any){

    res.status(500).json({
        succes:false,
        message:error.message || "Product found operation is not successfull",
        error:error,
      })
    
 }
};

//update  product 

const updateProduct = async (req: Request, res: Response) => {
        
    try{
        
    const {productId} = req.params
  
      
    const result = await ProductService.updateProductIntoDatabase(productId )
   
    res.status(200).json({
     succes: true,
     message: "Product updated successfully!",
     data: result,
   })
 }catch(error:any){

    res.status(500).json({
        succes:false,
        message:error.message || "Product udapted  is not sucessfully",
        error:error,
      })
    
 }
};

//delete product  

const deleteProduct = async (req: Request, res: Response) => {
        
    try{
        
    const {productId}  = req.params

    const result = await ProductService.deleteProductIntoDatabase(productId)
   
    res.status(200).json({
     succes: true,
     message: "Product deleted successfully!",
     data: result,
   })
 }catch(error:any){

    res.status(500).json({
        succes:false,
        message:error.message || "Product deleted  is not sucessfully",
        error:error,
      })
    
 }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  findSingleProduct ,
  updateProduct ,
  deleteProduct
};
