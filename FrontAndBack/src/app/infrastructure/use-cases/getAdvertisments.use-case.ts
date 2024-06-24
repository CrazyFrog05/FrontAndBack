import { Injectable } from '@angular/core';
import { Observable, map, raceWith } from 'rxjs';
import { IAdvertisment } from '../../common/types';
import { IUseCase } from '../../common/types';
import { Store } from '@ngrx/store';
import { ICatalogState, IStoreState } from '../../store/catalog.reducers';
import { CatalogFacade } from '../../store/catalog.facade';
import { getAdvertisments } from '../../store/catalog.actions';

interface IGetAdvertismentsUseCaseResult {
  advertisments?: IAdvertisment[];
  status: number;
}

@Injectable()
export class GetAdvertismentsUseCase
  implements IUseCase<void, IGetAdvertismentsUseCaseResult>
{
  constructor(
    private readonly store: Store<IStoreState>,
    private readonly facade: CatalogFacade
  ) {}
  execute(): Observable<IGetAdvertismentsUseCaseResult> {
    const res = this.facade.getAdvertismentsSuccess$.pipe(
      raceWith(this.facade.getAdvertismentsFailure$),
      map((res) => ({ status: 200, ...res }))
    );
    this.store.dispatch(getAdvertisments());
    return res;
  }
}
