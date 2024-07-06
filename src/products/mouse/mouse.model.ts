import { model, Schema } from "mongoose";
import { TMouse } from "./mouse.interface";

 const mouseSchema = new Schema<TMouse>({

    // name:{type:String , required:true},
    // email: {type:String , required:true},
    // description:{type:String , required:true} ,
    // price:{type:Number , required:true},
    // category:{type:String , required:true},
    // tags:{type:[String], required:true},
    // variants:{type:String , required:true},
    // inventory:{type:String , required:true},


    name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      tags: {
        type: [String],
        required: true
      },
      variants: [
        {
          type: {
            type: String,
            enum: ['color'], 
            required: true
          },
          value: {
            type: String,
            required: true
          }
        }
      ],
      inventory: {
        quantity: {
          type: Number,
          required: true
        },
        inStock: {
          type: Boolean,
          required: true
        }
      }
    
    
   
})

export const MouseModel = model<TMouse>('MouseModel', mouseSchema);
