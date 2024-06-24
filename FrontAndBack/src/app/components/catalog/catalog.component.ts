import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiHeaderComponent } from '../ui-header/ui-header.component';
import { UiAdvertismentCardComponent } from '../ui-advertisment-card/ui-advertisment-card.component';
import { UiProductCardComponent } from '../ui-product-card/ui-product-card.component';
import { UiCarouselComponent } from '../ui-carousel/ui-carousel.component';
import { map, tap } from 'rxjs';
import { CatalogRepository } from '../../infrastructure/catalog.repository';
import { UiCategoryCardComponent } from '../ui-category-card/ui-category-card.component';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { CommonModule } from '@angular/common';
import { IAdvertisment, ICategory, IFilterOptions, IProduct } from '../../common/types';
import { UiFilterComponent } from '../ui-filter/ui-filter.component';
import { Store } from '@ngrx/store';
import { ICatalogState, IStoreState } from '../../store/catalog.reducers';
import { MyCommonModule } from '../../common/myCommon.module';
import { CatalogService } from '../../infrastructure/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: 'catalog.component.html',
  styleUrls: ['catalog.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    UiHeaderComponent,
    UiCarouselComponent,
    UiAdvertismentCardComponent,
    UiProductCardComponent,
    UiCategoryCardComponent,
    UiFilterComponent,
    InfrastructureModule,
    MyCommonModule,
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {
  products$ = this.repo.getProducts();//.pipe(tap((val) => console.log(val)));
  advertisments$ = this.repo
    .getAdvertisments();
    //.pipe(tap((val) => console.log(val)));
  categories$ = this.repo.getCategories();//.pipe(tap((val) => console.log(val)));

  selectedCategory?: ICategory;
  selectedProduct?: IProduct;

  filterOptions: IFilterOptions[] = [
    {
      title: 'Оперативная память',
      options: [
        { label: '> 4', value: false },
        { label: '4', value: false },
        { label: '2', value: false },
        { label: '1', value: false },
      ],
    },
    {
      title: 'Бренд',
      options: [
        { label: 'Apple', value: false },
        { label: 'Honor', value: false },
        { label: 'Samsung', value: false },
        { label: 'DEXP', value: false },
      ],
    },
    {
      title: 'Количество ядер',
      options: [
        { label: '8', value: false },
        { label: '6', value: false },
        { label: '4', value: false },
        { label: '2', value: false },
      ],
    },
  ];

  constructor(
    private readonly repo: CatalogRepository,
  ) {
  }

  ngOnInit() {

  }

  handleCategoryClick(category: ICategory) {
    this.selectedCategory = category;
  }

  handleFilterChange(newFilterOptions: IFilterOptions[]) {
    return true;
  }

  handleBackToCatalog() {
    this.selectedCategory = undefined;
  }
  
  handleDeleteProduct(product: IProduct) {
    this.repo.deleteProduct(product.id!);
  }
  handleUpdateProduct(product: IProduct) {
    this.repo.updateProduct(product);
  }
  handleAddProduct() {
    const newProduct: IProduct = {
      name: "",
      price: 0,
      count: 0,
      img: "",
    };
    this.repo.updateProduct(newProduct);
  }

  handleDeleteAdvertisment(advertisment: IAdvertisment) {
    this.repo.deleteAdvertisment(advertisment.id!);
  }
  handleUpdateAdvertisment(advertisment: IAdvertisment) {
    this.repo.updateAdvertisment(advertisment);
  }
  handleAddAdvertisment() {
    const newAdvertisment: IAdvertisment = {
      img: "",
      title: "",
      text: "",
    };
    this.repo.updateAdvertisment(newAdvertisment);
  }

  handleDeleteCategory(category: ICategory) {
    this.repo.deleteCategory(category.id!);
  }
  handleUpdateCategory(category: ICategory) {
    this.repo.updateCategory(category);
  }
  handleAddCategory() {
    const newCategory: ICategory = {
      img: "",
      name: "",
    };
    this.repo.updateCategory(newCategory);
  }
}
