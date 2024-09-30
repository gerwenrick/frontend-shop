import { createMockProduct } from "../../../mocks/objects/product.mock";
import { createMockAppState } from "../../../mocks/objects/state.mock";
import { Product } from "../types/product.type";
import {
  isProductInWishlistSelector,
  productsFeatureStateSelector,
  selectAllProducts,
  selectAllWishlistItems,
  selectProductCurrentStockById,
  selectProductsByIds,
} from "./products.selectors";

describe("ProductsSelectors", () => {
  describe("productsFeatureStateSelector", () => {
    it("selects the products slice of state", () => {
      const mockState = createMockAppState();
      const actual = productsFeatureStateSelector(mockState);

      expect(actual).toEqual(mockState.products);
    });
  });

  describe("selectAllProducts", () => {
    it("selects all product items", () => {
      const mockState = createMockAppState();
      const actual = selectAllProducts().projector(mockState.products);

      expect(actual).toEqual(mockState.products.items);
    });
  });

  describe("selectAllWishlistItems", () => {
    it("selects all product wishlist items", () => {
      const mockState = createMockAppState();
      const actual = selectAllWishlistItems().projector(mockState.products);

      expect(actual).toEqual(mockState.products.wishlistItems);
    });
  });

  describe("selectProductsByIds", () => {
    it("selects all product items by ids", () => {
      const mockProductIds = [1, 3, 5];
      const mockState = createMockAppState();

      const expectedProducts = mockState.products.items.filter((item) => mockProductIds.includes(item.id));
      const actual = selectProductsByIds(mockProductIds).projector(mockState.products);

      expect(actual).toEqual(expectedProducts);
    });
  });

  describe("isProductInWishlistSelector", () => {
    it("returns true if prodictId is in the wishlist", () => {
      const mockProductId = 3;
      const mockState = createMockAppState();

      const actual = isProductInWishlistSelector(mockProductId).projector(mockState.products);

      expect(actual).toEqual(true);
    });

    it("returns true if prodictId is in the wishlist", () => {
      const mockProductId = 42;
      const mockState = createMockAppState();

      const actual = isProductInWishlistSelector(mockProductId).projector(mockState.products);

      expect(actual).toEqual(false);
    });
  });

  describe("selectProductCurrentStockById", () => {
    it("returns null for non-existent product", () => {
      const mockProductId = 42;
      const mockState = createMockAppState();
      mockState.products.items.filter((item) => item.id !== mockProductId);

      const actual = selectProductCurrentStockById(mockProductId).projector(mockState.products);
      expect(actual).toBeNull();
    });

    it("returns current stock for product for positive stock", () => {
      const mockProductId = 5;
      const mockProductWithPositiveStock: Product = {
        ...createMockProduct(),
        id: mockProductId,
        stock: 100,
        wishQuantity: 10,
      };
      const mockState = createMockAppState();
      mockState.products.items[0] = mockProductWithPositiveStock;

      const expectedStock = mockProductWithPositiveStock.stock - mockProductWithPositiveStock.wishQuantity;

      const actual = selectProductCurrentStockById(mockProductId).projector(mockState.products);
      expect(actual).toEqual(expectedStock);
    });

    it("returns 0 for negative stock", () => {
      const mockProductId = 5;
      const mockProductWithPositiveStock: Product = {
        ...createMockProduct(),
        id: mockProductId,
        stock: 10,
        wishQuantity: 100,
      };
      const mockState = createMockAppState();
      mockState.products.items[0] = mockProductWithPositiveStock;

      const actual = selectProductCurrentStockById(mockProductId).projector(mockState.products);
      expect(actual).toEqual(0);
    });
  });
});
