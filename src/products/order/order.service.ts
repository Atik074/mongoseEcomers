import { TOrder } from "./order.interface";
import { Order } from "./order.model"


const createOrderFromDB = async(orderData:TOrder)=>{
    const result = await Order.create(orderData)
     return result ;

}

const getAllOrdersFromDB =async()=>{
    const result = await Order.find()
    return result ;

}


const findOrderEmail =async(email:any)=>{
    const result = await Order.find({email:email})
    return result ;
}

export const OrderService = {
    createOrderFromDB ,
    getAllOrdersFromDB ,
    findOrderEmail
}