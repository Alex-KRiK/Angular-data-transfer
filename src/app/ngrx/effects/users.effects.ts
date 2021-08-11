import { Injectable } from "@angular/core";
import { EntityActionFactory, EntityOp } from "@ngrx/data";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, switchMap } from "rxjs/operators";
import { UsersActions } from "../actions";
import { AppEntities } from "../metadata/app-entity-metadata";
import { UserResponse } from "../models/user.model";
import { UsersService } from "../services/users.service";

@Injectable()
export class UsersEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly entityActionFactory: EntityActionFactory,
    private readonly usersService: UsersService
  ) {}

  loadAllUsers$ = createEffect(() => 
    this.actions$.pipe(
      ofType(UsersActions.loadAllUsers),
      switchMap(() =>
        this.usersService.loadAllUsers().pipe(
          switchMap((response: UserResponse) => 
            [
              this.entityActionFactory.create(
                AppEntities.Users,
                EntityOp.REMOVE_ALL
              ),
              this.entityActionFactory.create(
                AppEntities.Users,
                EntityOp.ADD_MANY,
                response.data || []
              )
            ]
          )
        )
      ),
      catchError(error => { throw error })
    )
  );
}
