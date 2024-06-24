import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
import { DeleteProductUseCase } from './use-cases/deleteProduct.use-case';
import { UpdateProductUseCase } from './use-cases/updateProduct.use-case';
import { DeleteAdvertismentUseCase } from './use-cases/deleteAdvertisment.use-case';
import { UpdateAdvertismentUseCase } from './use-cases/updateAdvertisment.use-case';
import { DeleteCategoryUseCase } from './use-cases/deleteCategory.use-case';
import { UpdateCategoryUseCase } from './use-cases/updateCategory.use-case';

@Injectable()
export class CatalogService {
  constructor(
    private readonly getProductsUseCase: GetProductsUseCase,
    private readonly deleteProductUseCase: DeleteProductUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase,
    private readonly getAdvertismentsUseCase: GetAdvertismentsUseCase,
    private readonly deleteAdvertismentUseCase: DeleteAdvertismentUseCase,
    private readonly updateAdvertismentUseCase: UpdateAdvertismentUseCase,
    private readonly getCategoriesUseCase: GetCategoriesUseCase,
    private readonly deleteCategoryUseCase: DeleteCategoryUseCase,
    private readonly updateCategoryUseCase: UpdateCategoryUseCase,
    private readonly getUserUseCase: GetUserUseCase,
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly loginUserUseCase: LoginUserUseCase
  ) {}

  getProducts(): void {
    this.getProductsUseCase.execute();
  }
  deleteProduct(id: number): void {
    this.deleteProductUseCase.execute({id});
  }
  updateProduct(product: IProduct): void {
    this.updateProductUseCase.execute({product});
  }

  getAdvertisments(): void {
    this.getAdvertismentsUseCase.execute();
  }
  deleteAdvertisment(id: number): void {
    this.deleteAdvertismentUseCase.execute({id});
  }
  updateAdvertisment(advertisment: IAdvertisment): void {
    this.updateAdvertismentUseCase.execute({advertisment});
  }

  getCategories(): void {
    this.getCategoriesUseCase.execute();
  }
  deleteCategory(id: number): void {
    this.deleteCategoryUseCase.execute({id});
  }
  updateCategory(category: ICategory): void {
    this.updateCategoryUseCase.execute({category});
  }

  getUser(id: number): void {
    this.getUserUseCase.execute(id);
  }
  registerUser(
    userRegisterDto: IUserRegisterDto
  ): void {
    this.registerUserUseCase.execute(userRegisterDto);
  }
  loginUser(
    userLoginDto: IUserLoginDto
  ): void {
    this.loginUserUseCase.execute(userLoginDto);
  }
}
