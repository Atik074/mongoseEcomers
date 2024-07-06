type TVariantProduct = {
  type: string;
  value: boolean;
};

type TProductInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariantProduct[];
  inventory: TProductInventory; 
};
