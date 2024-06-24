import { Injectable } from '@angular/core';
import { Observable, map, raceWith } from 'rxjs';
import { ICategory } from '../../common/types';
import { IUseCase } from '../../common/types';
import { Store } from '@ngrx/store';
import { ICatalogState, IStoreState } from '../../store/catalog.reducers';
import { CatalogFacade } from '../../store/catalog.facade';
import { getCategories } from '../../store/catalog.actions';

interface IGetCategoriesUseCaseResult {
  categories?: ICategory[];
  status: number;
}

@Injectable()
export class GetCategoriesUseCase
  implements IUseCase<void, IGetCategoriesUseCaseResult>
{
  constructor(
    private readonly store: Store<IStoreState>,
    private readonly facade: CatalogFacade
  ) {}
  execute(): Observable<IGetCategoriesUseCaseResult> {
    const res = this.facade.getCategoriesSuccess$.pipe(
      raceWith(this.facade.getCategoriesFailure$),
      map((res) => ({ status: 200, ...res }))
    );
    this.store.dispatch(getCategories());
    return res;
  }
}
