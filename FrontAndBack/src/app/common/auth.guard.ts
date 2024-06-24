import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { CatalogRepository } from "../infrastructure/catalog.repository";
import { map, tap } from "rxjs";

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const repo = inject(CatalogRepository);
  const router = inject(Router);
  return repo.getCurrentUser().pipe(
    tap(user => {
      if (!user) {
        router.navigateByUrl("/register");
      }
    }),
    map(user => user!==null)
  );
  // const router = inject(Router);
  // console.log(repo.user);
  // if (!repo.user) {
  //   router.navigateByUrl("/register");
  //   return false;
  // }
  // return true;
};
