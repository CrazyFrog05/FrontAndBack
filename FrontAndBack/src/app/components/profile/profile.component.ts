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
import { ICategory, IFilterOptions, IProduct } from '../../common/types';
import { UiFilterComponent } from '../ui-filter/ui-filter.component';
import { Store } from '@ngrx/store';
import { ICatalogState, IStoreState } from '../../store/catalog.reducers';
import { MyCommonModule } from '../../common/myCommon.module';
import { CatalogService } from '../../infrastructure/catalog.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    UiHeaderComponent,
    InfrastructureModule,
    MyCommonModule,
  ],
})
export class ProfileComponent {
  user$ = this.repo.getCurrentUser();

  constructor(
    private readonly repo: CatalogRepository,
  ) {
  }

  ngOnInit() {
  }
}
