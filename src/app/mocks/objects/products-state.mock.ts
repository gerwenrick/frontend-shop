import { ProductFeatureState } from "../../state/products/products.reducer";
import { createMockProduct } from "./product.mock";

export const createMockProductsState = (): ProductFeatureState => {
  return {
    shopName: "mockShopName",
    shopKeeper: "mockShopKeeper",
    wishlistItems: [1, 3, 5],
    items: [
      { ...createMockProduct(), id: 1, name: "mockName-1" },
      { ...createMockProduct(), id: 2, name: "mockName-2" },
      { ...createMockProduct(), id: 3, name: "mockName-3" },
      { ...createMockProduct(), id: 4, name: "mockName-4" },
      { ...createMockProduct(), id: 5, name: "mockName-5" },
    ],
  };
};
