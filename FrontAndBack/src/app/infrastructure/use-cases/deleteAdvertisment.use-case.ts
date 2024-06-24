import { Injectable } from '@angular/core';
import { Observable, map, raceWith } from 'rxjs';
import { IUseCase } from '../../common/types';
import { Store } from '@ngrx/store';
import { IStoreState } from '../../store/catalog.reducers';
import { CatalogFacade } from '../../store/catalog.facade';
import { deleteAdvertisment } from '../../store/catalog.actions';

interface IDeleteAdvertismentUseCaseResult {
  id?: number;
  status: number;
}

@Injectable()
export class DeleteAdvertismentUseCase
  implements IUseCase<{id: number}, IDeleteAdvertismentUseCaseResult>
{
  constructor(
    private readonly store: Store<IStoreState>,
    private readonly facade: CatalogFacade
  ) {}
  execute({id}: {id: number}): Observable<IDeleteAdvertismentUseCaseResult> {
    this.store.dispatch(deleteAdvertisment({id}));
    return this.facade.deleteAdvertismentSuccess$.pipe(
      raceWith(this.facade.deleteAdvertismentFailure$),
      map((res) => ({ status: 200, ...res }))
    );
  }
}
