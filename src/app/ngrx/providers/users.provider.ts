import { InjectionToken, Provider } from "@angular/core";
import { EntitySelectorsFactory } from "@ngrx/data";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { AppState } from "../models/app-state";
import { AppEntities } from "../metadata/app-entity-metadata";
import { User } from "../models/user.model";

export const USERS: InjectionToken<Observable<User[]>> = new InjectionToken<User[]>(
  'A stream with Users'
);

export const usersProvider: Provider = {
  provide: USERS,
  useFactory: (
    store$: Store<AppState>,
    entitySelectorsFactory: EntitySelectorsFactory,
  ) => store$.pipe(
    select(entitySelectorsFactory.create(AppEntities.Users).selectEntities),
    // filter(users => !!users?.length),
    // map((users: User[]) => users.map((user: User) => user.name))
  ),
  deps: [Store, EntitySelectorsFactory]
};