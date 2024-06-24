import { createReducer, on } from '@ngrx/store';
import * as ApiActions from './catalog.actions';
import {
  IAdvertisment,
  ICategory,
  IProduct,
  IUserGetDto,
} from '../common/types';

export interface ICatalogState {
  products: IProduct[];
  advertisments: IAdvertisment[];
  categories: ICategory[];
  user: IUserGetDto | null;
}

export const initialState: ICatalogState = {
  products: [],
  advertisments: [],
  categories: [],
  user: null,
};

export const catalogFeatureKey = 'catalog';

export interface IStoreState {
  [catalogFeatureKey]: ICatalogState;
}

export const catalogReducer = createReducer(
  initialState,
  on(ApiActions.getProductsSuccess, (state, resp) => ({
    ...state,
    products: resp.products,
  })),
  on(ApiActions.deleteProductSuccess, (state, resp) => ({
    ...state,
    products: state.products.filter((p) => p.id !== resp.id),
  })),
  on(ApiActions.updateProductSuccess, (state, resp) => {
    const idx = state.products.map(p => p.id).indexOf(resp.product.id);
    if (idx !== -1) {
      return {
        ...state,
        products: state.products.map((p) => p.id !== resp.product.id ? p : resp.product),
      };
    } else {
      return {
        ...state,
        products: [...state.products, resp.product],
      }
    }
  }),

  on(ApiActions.getAdvertismentsSuccess, (state, resp) => ({
    ...state,
    advertisments: resp.advertisments,
  })),
  on(ApiActions.deleteAdvertismentSuccess, (state, resp) => ({
    ...state,
    advertisments: state.advertisments.filter((p) => p.id !== resp.id),
  })),
  on(ApiActions.updateAdvertismentSuccess, (state, resp) => {
    const idx = state.advertisments.map(p => p.id).indexOf(resp.advertisment.id);
    if (idx !== -1) {
      return {
        ...state,
        advertisments: state.advertisments.map((p) => p.id !== resp.advertisment.id ? p : resp.advertisment),
      };
    } else {
      return {
        ...state,
        advertisments: [...state.advertisments, resp.advertisment],
      }
    }
  }),

  on(ApiActions.getCategoriesSuccess, (state, resp) => ({
    ...state,
    categories: resp.categories,
  })),
  on(ApiActions.deleteCategorySuccess, (state, resp) => ({
    ...state,
    categories: state.categories.filter((p) => p.id !== resp.id),
  })),
  on(ApiActions.updateCategorySuccess, (state, resp) => {
    const idx = state.categories.map(p => p.id).indexOf(resp.category.id);
    if (idx !== -1) {
      return {
        ...state,
        Categorys: state.categories.map((p) => p.id !== resp.category.id ? p : resp.category),
      };
    } else {
      return {
        ...state,
        categories: [...state.categories, resp.category],
      }
    }
  }),

  on(ApiActions.getUserSuccess, (state, resp) => ({
    ...state,
    user: resp.user,
  })),
  on(ApiActions.getUserFailure, (state, resp) => ({
    ...state,
    user: null,
  })),
  on(ApiActions.registerUserSuccess, (state, resp) => ({
    ...state,
    user: resp.user,
  })),
  on(ApiActions.registerUserFailure, (state, resp) => ({
    ...state,
    user: null,
  })),
  on(ApiActions.loginUserSuccess, (state, resp) => ({
    ...state,
    user: resp.user,
  })),
  on(ApiActions.loginUserFailure, (state, resp) => ({
    ...state,
    user: null,
  }))
);
