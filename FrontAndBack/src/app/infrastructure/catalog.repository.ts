import { Injectable } from '@angular/core';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import {
  IAdvertisment,
  ICategory,
  IProduct,
  IUserGetDto,
  IUserLoginDto,
  IUserRegisterDto,
} from '../common/types';
import { GetProductsUseCase } from './use-cases/getProducts.use-case';
import { GetAdvertismentsUseCase } from './use-cases/getAdvertisments.use-case';
import { GetCategoriesUseCase } from './use-cases/getCategories.use-case';
import { RegisterUserUseCase } from './use-cases/registerUser.use-case';
import { LoginUserUseCase } from './use-cases/loginUser.use-case';
import { GetUserUseCase } from './use-cases/getUser.use-case';
import { CatalogService } from './catalog.service';
import { Store } from '@ngrx/store';
import { ICatalogState, IStoreState } from '../store/catalog.reducers';
import {
  selectAdvertisments,
  selectCategories,
  selectProducts,
  selectUser,
} from '../store/catalog.selectors';

@Injectable()
export class CatalogRepository {
  constructor(
    private readonly store: Store<IStoreState>,
    private readonly catalogService: CatalogService
  ) {}

  user: IUserGetDto | null = null;

  getProducts(): Observable<IProduct[]> {
    this.catalogService.getProducts();
    return this.store.select(selectProducts);
  }
  deleteProduct(id: number): Observable<IProduct[]> {
    this.catalogService.deleteProduct(id);
    return this.store.select(selectProducts);
  }
  updateProduct(product: IProduct): Observable<IProduct[]> {
    this.catalogService.updateProduct(product);
    return this.store.select(selectProducts);
  }

  getAdvertisments(): Observable<IAdvertisment[]> {
    this.catalogService.getAdvertisments();
    return this.store.select(selectAdvertisments);
  }
  deleteAdvertisment(id: number): Observable<IAdvertisment[]> {
    this.catalogService.deleteAdvertisment(id);
    return this.store.select(selectAdvertisments);
  }
  updateAdvertisment(advertisment: IAdvertisment): Observable<IAdvertisment[]> {
    this.catalogService.updateAdvertisment(advertisment);
    return this.store.select(selectAdvertisments);
  }

  getCategories(): Observable<ICategory[]> {
    this.catalogService.getCategories();
    return this.store.select(selectCategories);
  }
  deleteCategory(id: number): Observable<ICategory[]> {
    this.catalogService.deleteCategory(id);
    return this.store.select(selectCategories);
  }
  updateCategory(category: ICategory): Observable<ICategory[]> {
    this.catalogService.updateCategory(category );
    return this.store.select(selectProducts);
  }

  getUser(id: number): Observable<IUserGetDto | null> {
    this.catalogService.getUser(id);
    return this.store.select(selectUser);
  }
  registerUser(user: IUserRegisterDto): Observable<IUserGetDto | null> {
    this.catalogService.registerUser(user);
    return this.store.select(selectUser);
  }
  loginUser(user: IUserLoginDto): Observable<IUserGetDto | null> {
    this.catalogService.loginUser(user);
    return this.store.select(selectUser);
  }
  getCurrentUser(): Observable<IUserGetDto | null> {
    return this.store.select(selectUser).pipe(map((user) => {
      this.user = user;
      if (user) {
        return user;
      }
      return null;
    }));
  }
}
