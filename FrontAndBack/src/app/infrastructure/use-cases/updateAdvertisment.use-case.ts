import { Injectable } from '@angular/core';
import { Observable, map, raceWith } from 'rxjs';
import { IAdvertisment } from '../../common/types';
import { IUseCase } from '../../common/types';
import { Store } from '@ngrx/store';
import { IStoreState } from '../../store/catalog.reducers';
import { CatalogFacade } from '../../store/catalog.facade';
import { updateAdvertisment } from '../../store/catalog.actions';

interface IUpdateAdvertismentUseCaseResult {
  advertisment?: IAdvertisment;
  status: number;
}

@Injectable()
export class UpdateAdvertismentUseCase
  implements IUseCase<{advertisment: IAdvertisment}, IUpdateAdvertismentUseCaseResult>
{
  constructor(
    private readonly store: Store<IStoreState>,
    private readonly facade: CatalogFacade
  ) {}
  execute({advertisment}: {advertisment: IAdvertisment}): Observable<IUpdateAdvertismentUseCaseResult> {
    this.store.dispatch(updateAdvertisment({advertisment}));
    return this.facade.updateAdvertismentSuccess$.pipe(
      raceWith(this.facade.updateAdvertismentFailure$),
      map((res) => ({ status: 200, ...res }))
    );
  }
}
