import { TMouse } from "./mouse.interface";
import { MouseModel } from "./mouse.model";


const createMouseIntoDatabase= async(mouse:TMouse)=>{

   const result =  await MouseModel.create(mouse)
    return result;
}


export const  MouseService = {
    createMouseIntoDatabase
}