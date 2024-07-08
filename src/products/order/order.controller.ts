
import { Request, Response } from "express";
import { OrderService } from "./order.service";
import orderValidatedSchema from "./orderValidated";

const createOrder =async(req:Request , res:Response)=>{
    try{
        const {data:orderData} = req.body
         
          const validatedOrder = orderValidatedSchema.parse(orderData)

        const result = await OrderService.createOrderFromDB(validatedOrder)
     
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

//get all orderes 
const getAllOrders = async(req:Request , res:Response)=>{
   
    try{

        const email = req.query.email
      
        if(!email){
            const result = await OrderService.getAllOrdersFromDB()
            res.status(200).json({
                status:'success',
                message:'Orders fetched successfully!',
                data:result
            })
     }


        if(email){

              const result = await OrderService.findOrderEmail(email)

            res.status(200).json({
                status:'success',
                message:'Orders fetched successfully for user email!',
                data:result
            })

        }

    }catch(error:any){
        res.status(500).json({
            success:false ,
            message:error.message || "Orders fetched error" ,
            error:error
        })

    }

}

export const OrderController ={
    createOrder ,
    getAllOrders
}