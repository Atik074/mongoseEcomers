import { z } from "zod";



const orderValidatedSchema = z.object({
    email:z.string(),
    productId:z.string(),
    price:z.number(),
    quantity:z.number(),
  });

  export default orderValidatedSchema ;