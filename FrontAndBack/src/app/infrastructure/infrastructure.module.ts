import { NgModule } from '@angular/core';
import { CatalogRepository } from './catalog.repository';
import { CommonModule } from '@angular/common';
import { CatalogFacade } from '../store/catalog.facade';
import { GetProductsUseCase } from './use-cases/getProducts.use-case';
import { GetAdvertismentsUseCase } from './use-cases/getAdvertisments.use-case';
import { GetCategoriesUseCase } from './use-cases/getCategories.use-case';
import { GetUserUseCase } from './use-cases/getUser.use-case';
import { RegisterUserUseCase } from './use-cases/registerUser.use-case';
import { LoginUserUseCase } from './use-cases/loginUser.use-case';
import { CatalogService } from './catalog.service';
import { StoreModule } from '@ngrx/store';
import { catalogFeatureKey, catalogReducer } from '../store/catalog.reducers';
import { DeleteProductUseCase } from './use-cases/deleteProduct.use-case';
import { UpdateProductUseCase } from './use-cases/updateProduct.use-case';
import { DeleteAdvertismentUseCase } from './use-cases/deleteAdvertisment.use-case';
import { UpdateAdvertismentUseCase } from './use-cases/updateAdvertisment.use-case';
import { DeleteCategoryUseCase } from './use-cases/deleteCategory.use-case';
import { UpdateCategoryUseCase } from './use-cases/updateCategory.use-case';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(catalogFeatureKey, catalogReducer)],
  declarations: [],
  providers: [
    GetProductsUseCase,
    DeleteProductUseCase,
    UpdateProductUseCase,
    GetAdvertismentsUseCase,
    DeleteAdvertismentUseCase,
    UpdateAdvertismentUseCase,
    GetCategoriesUseCase,
    DeleteCategoryUseCase,
    UpdateCategoryUseCase,
    DeleteCategoryUseCase,
    GetUserUseCase,
    RegisterUserUseCase,
    LoginUserUseCase,
    CatalogFacade,
    CatalogRepository,
    CatalogService,
  ],
  exports: [],
})
export class InfrastructureModule {}
