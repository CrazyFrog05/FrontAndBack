import { Injectable } from '@angular/core';
import { Observable, map, raceWith } from 'rxjs';
import { IProduct } from '../../common/types';
import { IUseCase } from '../../common/types';
import { Store } from '@ngrx/store';
import { ICatalogState, IStoreState } from '../../store/catalog.reducers';
import { CatalogFacade } from '../../store/catalog.facade';
import { deleteProduct } from '../../store/catalog.actions';

interface IDeleteProductsUseCaseResult {
  id?: number;
  status: number;
}

@Injectable()
export class DeleteProductUseCase
  implements IUseCase<{id: number}, IDeleteProductsUseCaseResult>
{
  constructor(
    private readonly store: Store<IStoreState>,
    private readonly facade: CatalogFacade
  ) {}
  execute({id}: {id: number}): Observable<IDeleteProductsUseCaseResult> {
    this.store.dispatch(deleteProduct({id}));
    return this.facade.deleteProductSuccess$.pipe(
      raceWith(this.facade.deleteProductFailure$),
      map((res) => ({ status: 200, ...res }))
    );
  }
}
