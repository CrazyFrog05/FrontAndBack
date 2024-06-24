import { Injectable } from '@angular/core';
import { Observable, map, raceWith } from 'rxjs';
import { IProduct } from '../../common/types';
import { IUseCase } from '../../common/types';
import { Store } from '@ngrx/store';
import { ICatalogState, IStoreState } from '../../store/catalog.reducers';
import { CatalogFacade } from '../../store/catalog.facade';
import { deleteProduct, updateProduct } from '../../store/catalog.actions';

interface IUpdateProductUseCaseResult {
  product?: IProduct;
  status: number;
}

@Injectable()
export class UpdateProductUseCase
  implements IUseCase<{product: IProduct}, IUpdateProductUseCaseResult>
{
  constructor(
    private readonly store: Store<IStoreState>,
    private readonly facade: CatalogFacade
  ) {}
  execute({product}: {product: IProduct}): Observable<IUpdateProductUseCaseResult> {
    this.store.dispatch(updateProduct({product}));
    return this.facade.updateProductSuccess$.pipe(
      raceWith(this.facade.updateProductFailure$),
      map((res) => ({ status: 200, ...res }))
    );
  }
}
