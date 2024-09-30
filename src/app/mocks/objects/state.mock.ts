import { AppState } from "../../state/app.reducer";
import { createMockProductsState } from "./products-state.mock";

export const createMockAppState = (): AppState => {
  return {
    products: {
      ...createMockProductsState(),
    },
  };
};
