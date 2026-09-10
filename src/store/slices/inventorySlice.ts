import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Product = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

export type NewProduct = Omit<Product, 'id'>;

export type InventoryState = {
  products: Product[];
};

const initialState: InventoryState = {
  products: [],
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<NewProduct>) => {
      const product = {
        id: String(Date.now()),
        ...action.payload,
      };

      state.products.push(product);
      console.log('[Redux] Producto agregado:', product);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    clearProducts: (state) => {
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, clearProducts } = inventorySlice.actions;
export default inventorySlice.reducer;
