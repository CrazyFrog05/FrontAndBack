import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICatalogState, IStoreState, catalogFeatureKey } from './catalog.reducers';

export const selectCatalog = (state: IStoreState) => state[catalogFeatureKey];

export const selectProducts = createSelector(
  selectCatalog,
  (state: ICatalogState) => state.products
);
export const selectAdvertisments = createSelector(
  selectCatalog,
  (state: ICatalogState) => state.advertisments
);
export const selectCategories = createSelector(
  selectCatalog,
  (state: ICatalogState) => state.categories
);
export const selectUser = createSelector(
  selectCatalog,
  (state: ICatalogState) => state.user
);
