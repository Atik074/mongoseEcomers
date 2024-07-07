import { z } from 'zod';

const VariantProductSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const InventoryProductSchema = z.object({
  quantity: z.number().int().positive(),
  inStock: z.boolean(),
});


const productValidateSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(VariantProductSchema),
  inventory: InventoryProductSchema,
});


export default productValidateSchema ;

