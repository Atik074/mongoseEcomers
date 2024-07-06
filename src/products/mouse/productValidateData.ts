import { z } from 'zod';

const VariantMouseSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const InventoryMouseSchema = z.object({
  quantity: z.number().int().positive(),
  inStock: z.boolean(),
});


const MouseSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(VariantMouseSchema),
  inventory: InventoryMouseSchema,
});


