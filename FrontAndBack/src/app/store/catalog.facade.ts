import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import * as ApiActions from './catalog.actions';
import { map, raceWith } from 'rxjs';

@Injectable()
export class CatalogFacade {
  constructor(private readonly actions: Actions) {}

  getProductsSuccess$ = this.actions.pipe(
    ofType(ApiActions.getProductsSuccess)
  );
  getProductsFailure$ = this.actions.pipe(
    ofType(ApiActions.getProductsFailure)
  );
  deleteProductSuccess$ = this.actions.pipe(
    ofType(ApiActions.deleteProductSuccess)
  );
  deleteProductFailure$ = this.actions.pipe(
    ofType(ApiActions.deleteProductFailure)
  );
  updateProductSuccess$ = this.actions.pipe(
    ofType(ApiActions.updateProductSuccess)
  );
  updateProductFailure$ = this.actions.pipe(
    ofType(ApiActions.updateProductFailure)
  );

  getAdvertismentsSuccess$ = this.actions.pipe(
    ofType(ApiActions.getAdvertismentsSuccess)
  );
  getAdvertismentsFailure$ = this.actions.pipe(
    ofType(ApiActions.getAdvertismentsFailure)
  );
  deleteAdvertismentSuccess$ = this.actions.pipe(
    ofType(ApiActions.deleteAdvertismentSuccess)
  );
  deleteAdvertismentFailure$ = this.actions.pipe(
    ofType(ApiActions.deleteAdvertismentFailure)
  );
  updateAdvertismentSuccess$ = this.actions.pipe(
    ofType(ApiActions.updateAdvertismentSuccess)
  );
  updateAdvertismentFailure$ = this.actions.pipe(
    ofType(ApiActions.updateAdvertismentFailure)
  );

  getCategoriesSuccess$ = this.actions.pipe(
    ofType(ApiActions.getCategoriesSuccess)
  );
  getCategoriesFailure$ = this.actions.pipe(
    ofType(ApiActions.getCategoriesFailure)
  );
  deleteCategorySuccess$ = this.actions.pipe(
    ofType(ApiActions.deleteCategorySuccess)
  );
  deleteCategoryFailure$ = this.actions.pipe(
    ofType(ApiActions.deleteCategoryFailure)
  );
  updateCategorySuccess$ = this.actions.pipe(
    ofType(ApiActions.updateCategorySuccess)
  );
  updateCategoryFailure$ = this.actions.pipe(
    ofType(ApiActions.updateCategoryFailure)
  );

  getUserSuccess$ = this.actions.pipe(ofType(ApiActions.getUserSuccess));
  getUserFailure$ = this.actions.pipe(ofType(ApiActions.getUserFailure));

  registerUserSuccess$ = this.actions.pipe(
    ofType(ApiActions.registerUserSuccess)
  );
  registerUserFailure$ = this.actions.pipe(
    ofType(ApiActions.registerUserFailure)
  );

  loginUserSuccess$ = this.actions.pipe(ofType(ApiActions.loginUserSuccess));
  loginUserFailure$ = this.actions.pipe(ofType(ApiActions.loginUserFailure));
}
