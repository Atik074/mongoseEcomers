import { z } from "zod";


const orderValidatedSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number(),
  quantity: z.number()
  });

  // const ordersSchema = z.array(orderSchema);



  export default orderValidatedSchema ;


