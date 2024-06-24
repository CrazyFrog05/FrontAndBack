import { Injectable } from '@angular/core';
import { Observable, map, raceWith } from 'rxjs';
import { IUserGetDto, IUserRegisterDto } from '../../common/types';
import { IUseCase } from '../../common/types';
import { Store } from '@ngrx/store';
import { ICatalogState, IStoreState } from '../../store/catalog.reducers';
import { CatalogFacade } from '../../store/catalog.facade';
import { registerUser } from '../../store/catalog.actions';

interface IRegisterUserUseCaseResult {
  user?: IUserGetDto;
  status: number;
}

@Injectable()
export class RegisterUserUseCase
  implements IUseCase<IUserRegisterDto, IRegisterUserUseCaseResult>
{
  constructor(
    private readonly store: Store<IStoreState>,
    private readonly facade: CatalogFacade
  ) {}
  execute(
    userRegisterDto: IUserRegisterDto
  ): Observable<IRegisterUserUseCaseResult> {
    this.store.dispatch(registerUser({ user: userRegisterDto }));
    return this.facade.registerUserSuccess$.pipe(
      raceWith(this.facade.registerUserFailure$),
      map((res) => ({ status: 200, ...res }))
    );
  }
}
