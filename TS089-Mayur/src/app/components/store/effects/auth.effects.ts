import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signup),
      mergeMap(action =>
        this.authService.signup(action.name, action.email, action.password).pipe(
          map(user => AuthActions.signupSuccess({ user })),
          catchError(error => of(AuthActions.signupFailure({ error })))
        )
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(action =>
        this.authService.login(action.email, action.password).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}
