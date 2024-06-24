import { Injectable } from '@angular/core';
import { Observable, map, raceWith } from 'rxjs';
import { IUserGetDto } from '../../common/types';
import { IUseCase } from '../../common/types';
import { Store } from '@ngrx/store';
import { IStoreState } from '../../store/catalog.reducers';
import { CatalogFacade } from '../../store/catalog.facade';
import { getUser } from '../../store/catalog.actions';

interface IGetUserUseCaseResult {
  user?: IUserGetDto;
  status: number;
}

@Injectable()
export class GetUserUseCase implements IUseCase<number, IGetUserUseCaseResult> {
  constructor(
    private readonly store: Store<IStoreState>,
    private readonly facade: CatalogFacade
  ) {}
  execute(id: number): Observable<IGetUserUseCaseResult> {
    this.store.dispatch(getUser({ id }));
    return this.facade.getUserSuccess$.pipe(
      raceWith(this.facade.getUserFailure$),
      map((res) => ({ status: 200, ...res }))
    );
  }
}
