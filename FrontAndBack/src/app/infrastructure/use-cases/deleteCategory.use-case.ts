import { Injectable } from '@angular/core';
import { Observable, map, raceWith } from 'rxjs';
import { IUseCase } from '../../common/types';
import { Store } from '@ngrx/store';
import { IStoreState } from '../../store/catalog.reducers';
import { CatalogFacade } from '../../store/catalog.facade';
import { deleteCategory } from '../../store/catalog.actions';

interface IDeleteCategorysUseCaseResult {
  id?: number;
  status: number;
}

@Injectable()
export class DeleteCategoryUseCase
  implements IUseCase<{id: number}, IDeleteCategorysUseCaseResult>
{
  constructor(
    private readonly store: Store<IStoreState>,
    private readonly facade: CatalogFacade
  ) {}
  execute({id}: {id: number}): Observable<IDeleteCategorysUseCaseResult> {
    this.store.dispatch(deleteCategory({id}));
    return this.facade.deleteCategorySuccess$.pipe(
      raceWith(this.facade.deleteCategoryFailure$),
      map((res) => ({ status: 200, ...res }))
    );
  }
}
