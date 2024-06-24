import { Injectable } from '@angular/core';
import { Actions, act, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as ApiActions from './catalog.actions';
import { ApiService } from '../utils/api.service';
import {
  IAdvertisment,
  ICategory,
  IProduct,
  IUserGetDto,
} from '../common/types';

@Injectable()
export class ApiEffects {
  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiActions.getProducts),
      switchMap(() =>
        this.apiService.Get<{ products: IProduct[] }>(
          'http://localhost:3000/api/products'
        )
      ),
      map((resp) => ApiActions.getProductsSuccess(resp)),
      catchError((err, _) =>
        of(ApiActions.getProductsFailure({ status: err.status }))
      )
    )
  );
  deleteProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiActions.deleteProduct),
      switchMap(({id}) =>
        this.apiService.Post<{id: number}>(
          'http://localhost:3000/api/products/delete',
          {id}
        )
      ),
      map(({id}) => ApiActions.deleteProductSuccess({id})),
      catchError((err, _) =>
        of(ApiActions.deleteProductFailure({ status: err.status }))
      )
    )
  );
  updateProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiActions.updateProduct),
      switchMap(({product}) =>
        this.apiService.Post<{product: IProduct}>(
          'http://localhost:3000/api/products/update',
          {product}
        )
      ),
      map(({product}) => ApiActions.updateProductSuccess({product})),
      catchError((err, _) =>
        of(ApiActions.updateProductFailure({ status: err.status }))
      )
    )
  );

  getAdvertisments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiActions.getAdvertisments),
      switchMap(() =>
        this.apiService.Get<{ advertisments: IAdvertisment[] }>(
          'http://localhost:3000/api/advertisments'
        )
      ),
      map((resp) => ApiActions.getAdvertismentsSuccess(resp)),
      catchError((err, _) =>
        of(ApiActions.getAdvertismentsFailure({ status: err.status }))
      )
    )
  );
  deleteAdvertisment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiActions.deleteAdvertisment),
      switchMap(({id}) =>
        this.apiService.Post<{id: number}>(
          'http://localhost:3000/api/advertisments/delete',
          {id}
        )
      ),
      map(({id}) => ApiActions.deleteAdvertismentSuccess({id})),
      catchError((err, _) =>
        of(ApiActions.deleteAdvertismentFailure({ status: err.status }))
      )
    )
  );
  updateAdvertisment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiActions.updateAdvertisment),
      switchMap(({advertisment}) =>
        this.apiService.Post<{advertisment: IAdvertisment}>(
          'http://localhost:3000/api/advertisments/update',
          {advertisment}
        )
      ),
      map(({advertisment}) => ApiActions.updateAdvertismentSuccess({advertisment})),
      catchError((err, _) =>
        of(ApiActions.updateAdvertismentFailure({ status: err.status }))
      )
    )
  );

  getCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiActions.getCategories),
      switchMap(() =>
        this.apiService.Get<{ categories: ICategory[] }>(
          'http://localhost:3000/api/categories'
        )
      ),
      map((resp) => ApiActions.getCategoriesSuccess(resp)),
      catchError((err, _) =>
        of(ApiActions.getCategoriesFailure({ status: err.status }))
      )
    )
  );
  deleteCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiActions.deleteCategory),
      switchMap(({id}) =>
        this.apiService.Post<{id: number}>(
          'http://localhost:3000/api/categories/delete',
          {id}
        )
      ),
      map(({id}) => ApiActions.deleteCategorySuccess({id})),
      catchError((err, _) =>
        of(ApiActions.deleteCategoryFailure({ status: err.status }))
      )
    )
  );
  updateCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiActions.updateCategory),
      switchMap(({category}) =>
        this.apiService.Post<{category: ICategory}>(
          'http://localhost:3000/api/categories/update',
          {category}
        )
      ),
      map(({category}) => ApiActions.updateCategorySuccess({category})),
      catchError((err, _) =>
        of(ApiActions.updateCategoryFailure({ status: err.status }))
      )
    )
  );


  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiActions.getUser),
      switchMap((action) =>
        this.apiService.Post<{ user: IUserGetDto }>(
          'http://localhost:3000/api/user',
          { id: action.id }
        )
      ),
      map((resp) => ApiActions.getUserSuccess(resp)),
      catchError((err, _) =>
        of(ApiActions.getUserFailure({ status: err.status }))
      )
    )
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiActions.registerUser),
      switchMap((action) =>
        this.apiService.Post<{ user: IUserGetDto }>(
          'http://localhost:3000/api/register',
          action.user
        )
      ),
      map((resp) => ApiActions.registerUserSuccess(resp)),
      catchError((err, _) =>
        of(ApiActions.registerUserFailure({ status: err.status }))
      )
    )
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiActions.loginUser),
      switchMap((action) =>
        this.apiService.Post<{ user: IUserGetDto }>(
          'http://localhost:3000/api/login',
          action.user
        )
      ),
      map((resp) => ApiActions.registerUserSuccess(resp)),
      catchError((err, _) =>
        of(ApiActions.registerUserFailure({ status: err.status }))
      )
    )
  );

  // getCatalogInfoSuccess$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ApiActions.getProductsSuccess),
  //     tap((action)=> {
  //       console.log("getCatalogInfoSuccess: ", JSON.stringify(action.products));
  //     })
  //   ),
  //   {dispatch: false}
  // );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
