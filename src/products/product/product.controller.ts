import { Request, Response } from "express";
import { ProductService } from "./product.service";
import productValidateSchema from "./productValidateData";



const createProduct = async (req: Request, res: Response) => {
  try {

    const { data: productData } = req.body;
    const zodValidateProduct = productValidateSchema.parse(productData)
    const result = await ProductService.createProductFromDatabase(zodValidateProduct);

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

    const searchTerm = req.query.searchTerm

    if(!searchTerm){

        const result =await ProductService.getProductFromDatabase()
        res.status(200).json({
         succes: true,
         message: "get all product is found",
         data:result,
       })

    }
    if(searchTerm){
       const result = await ProductService.searchProductFromDatabase(searchTerm)
       res.status(200).json({
         succes: true,
         message: "Product searches successfully!",
         data: result,
       })
      }

  } catch (err){
     console.log(err )
  }
}


//getSingle Product
const findSingleProduct = async (req: Request, res: Response) => {
        
    try{
        
    const {productId} = req.params

    const result = await ProductService.findProductFromDatabase(productId)
   
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
    const { name, price, description } =req.body.data;
     
       const updateDoc = { name, price, description }


    const result = await ProductService.updateProductFromDatabase(productId , updateDoc)
    
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

    const result = await ProductService.deleteProductFromDatabase(productId)
   
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

// serch from database 
  // const searchProduct = async(req:Request,res:Response)=>{
   
  //   try{

  //     const searchTerm = req.query.searchTerm

  //      console.log(searchTerm);
  //      console.log('search product');

  //      if(searchTerm){
  //          const serchProduct = ProductService.searchProductIntoDatabase(searchTerm)

  //          res.status(200).json({
  //           succes: true,
  //           message: "Product search successfully!",
  //           data: serchProduct,
    
  //         })

  //      }

  //      if(!searchTerm){
  //         const result = await ProductService.searchAllProductIntoDatabase()

  //         res.status(200).json({
  //           succes: true,
  //           message: "Product search successfully!",
  //           data: result,
    
  //         })
           
  //      }
       

    


  //   }catch(error:any){
  //     res.status(500).json({
  //       succes:false,
  //       message:error.message || "Product search  is not sucessfully",
  //       error:error,
  //     })
  //   }


  // }

export const ProductController = {
  createProduct,
  getAllProducts,
  findSingleProduct ,
  updateProduct ,
  deleteProduct 
 
}
