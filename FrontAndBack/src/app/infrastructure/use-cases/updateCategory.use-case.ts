import { Injectable } from '@angular/core';
import { Observable, map, raceWith } from 'rxjs';
import { ICategory } from '../../common/types';
import { IUseCase } from '../../common/types';
import { Store } from '@ngrx/store';
import { IStoreState } from '../../store/catalog.reducers';
import { CatalogFacade } from '../../store/catalog.facade';
import { updateCategory } from '../../store/catalog.actions';

interface IUpdateCategoryUseCaseResult {
  category?: ICategory;
  status: number;
}

@Injectable()
export class UpdateCategoryUseCase
  implements IUseCase<{category: ICategory}, IUpdateCategoryUseCaseResult>
{
  constructor(
    private readonly store: Store<IStoreState>,
    private readonly facade: CatalogFacade
  ) {}
  execute({category}: {category: ICategory}): Observable<IUpdateCategoryUseCaseResult> {
    this.store.dispatch(updateCategory({category}));
    return this.facade.updateCategorySuccess$.pipe(
      raceWith(this.facade.updateCategoryFailure$),
      map((res) => ({ status: 200, ...res }))
    );
  }
}
