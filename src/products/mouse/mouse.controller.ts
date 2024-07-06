import { Request, Response } from "express";
import { MouseService } from "./mouse.service";

const createMouseProduct= async(req:Request ,res:Response)=>{
  
try{

    const mouse = req.body
    const result = await MouseService.createMouseIntoDatabase(mouse)

    res.status(200).json({
        success:true ,
        message:"Product created successfully!",
        data:result 
    })


}catch(err){
    console.log(err);
}


}


 export const MouseController ={
    createMouseProduct
 }