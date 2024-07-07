import { Request, Response } from "express";
import { OrderService } from "./order.service";
import orderValidatedSchema from "./orderValidated";

const createOrder =async(req:Request , res:Response)=>{
    try{
        const {data:orderData} = req.body 
          console.log(orderData);

         const orderValidatedData = orderValidatedSchema.parse(orderData)
      
         console.log('valid' , orderValidatedData);
          
        const result = await OrderService.createOrderFromDB(orderValidatedData)
     
    res.status(200).json({
        status:'success',
        message:'order is created successfully',
        data:result
    })

    }catch(error:any){
         res.status(500).json({
            success:false ,
            message:error.message || "order created successful" ,
            error:error
        })
    }


}

export const OrderController ={
    createOrder
}