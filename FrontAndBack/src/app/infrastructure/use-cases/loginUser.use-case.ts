import { Injectable } from '@angular/core';
import { Observable, map, raceWith } from 'rxjs';
import { IUserGetDto, IUserLoginDto } from '../../common/types';
import { IUseCase } from '../../common/types';
import { Store } from '@ngrx/store';
import { ICatalogState, IStoreState } from '../../store/catalog.reducers';
import { CatalogFacade } from '../../store/catalog.facade';
import { loginUser } from '../../store/catalog.actions';

interface ILoginUserUseCaseResult {
  user?: IUserGetDto;
  status: number;
}

@Injectable()
export class LoginUserUseCase
  implements IUseCase<IUserLoginDto, ILoginUserUseCaseResult>
{
  constructor(
    private readonly store: Store<IStoreState>,
    private readonly facade: CatalogFacade
  ) {}
  execute(userLoginDto: IUserLoginDto): Observable<ILoginUserUseCaseResult> {
    this.store.dispatch(loginUser({ user: userLoginDto }));
    return this.facade.loginUserSuccess$.pipe(
      raceWith(this.facade.loginUserFailure$),
      map((res) => ({ status: 200, ...res }))
    );
  }
}
