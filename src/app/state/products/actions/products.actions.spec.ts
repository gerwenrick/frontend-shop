import {
  addProductToWishlistAction,
  getAllProductsAction,
  getAllProductsErrorAction,
  getAllProductsSuccessAction,
  removeProductFromWishlistAction,
  updateProductQuantityAction,
} from "./products.actions";

describe("ProductsActions", () => {
  describe("getAllProductsAction", () => {
    it("has the correct type", () => {
      const action = getAllProductsAction();

      expect(action.type).toEqual("[Products] Get All Products");
    });
  });

  describe("getAllProductsSuccessAction", () => {
    it("has the correct type", () => {
      const action = getAllProductsSuccessAction({ updatedProducts: [] });

      expect(action.type).toEqual("[Products] Get All Products Success");
    });
  });

  describe("getAllProductsErrorAction", () => {
    it("has the correct type", () => {
      const action = getAllProductsErrorAction({ error: "" });

      expect(action.type).toEqual("[Products] Get All Products Error");
    });
  });

  describe("addProductToWishlistAction", () => {
    it("has the correct type", () => {
      const action = addProductToWishlistAction({ productId: 0 });

      expect(action.type).toEqual("[Products] Add Product To Wishlist");
    });
  });

  describe("removeProductFromWishlistAction", () => {
    it("has the correct type", () => {
      const action = removeProductFromWishlistAction({ productId: 0 });

      expect(action.type).toEqual("[Products] Remove Product To Wishlist");
    });
  });

  describe("updateProductQuantityAction", () => {
    it("has the correct type", () => {
      const action = updateProductQuantityAction({ productId: 0, newQuantity: 42 });

      expect(action.type).toEqual("[Products] Update Product Quantity");
    });
  });
});
