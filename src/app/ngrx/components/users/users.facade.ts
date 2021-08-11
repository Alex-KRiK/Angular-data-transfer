import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { EntityActionFactory, EntityOp } from "@ngrx/data";
import { Store } from "@ngrx/store";
import { UsersActions } from "../../actions";
import { AppState } from "../../models/app-state";
import { AppEntities } from "../../metadata/app-entity-metadata";

@Injectable()
export class UsersFacade {

  constructor(
    private readonly router: Router,
    private readonly store$: Store<AppState>,
    private readonly entityActionFactory: EntityActionFactory,
  ) { }

  getAllUsers(): void {
    this.store$.dispatch(UsersActions.loadAllUsers());
  }

  goToParentState(): void {
    this.router.navigateByUrl('parent');
  }

  clearUsers(): void {
    this.store$.dispatch(
      this.entityActionFactory.create(
        AppEntities.Users,
        EntityOp.REMOVE_ALL
      ),
    );
  }
}
