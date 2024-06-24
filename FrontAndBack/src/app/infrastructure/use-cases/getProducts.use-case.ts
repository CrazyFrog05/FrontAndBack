import { Injectable } from '@angular/core';
import { Observable, map, raceWith } from 'rxjs';
import { IProduct } from '../../common/types';
import { IUseCase } from '../../common/types';
import { Store } from '@ngrx/store';
import { ICatalogState, IStoreState } from '../../store/catalog.reducers';
import { CatalogFacade } from '../../store/catalog.facade';
import { getProducts } from '../../store/catalog.actions';

interface IGetProductsUseCaseResult {
  products?: IProduct[];
  status: number;
}

@Injectable()
export class GetProductsUseCase
  implements IUseCase<void, IGetProductsUseCaseResult>
{
  constructor(
    private readonly store: Store<IStoreState>,
    private readonly facade: CatalogFacade
  ) {}
  execute(): Observable<IGetProductsUseCaseResult> {
    this.store.dispatch(getProducts());
    return this.facade.getProductsSuccess$.pipe(
      raceWith(this.facade.getProductsFailure$),
      map((res) => ({ status: 200, ...res }))
    );
  }
}
