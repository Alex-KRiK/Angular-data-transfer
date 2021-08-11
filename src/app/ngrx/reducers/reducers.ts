import { ActionReducerMap } from "@ngrx/store";
import { UsersReducer } from ".";
import { AppState } from "../models/app-state";
import { usersFeatureKey } from "./users.reducer";


export const reducers: ActionReducerMap<AppState> = {
  [usersFeatureKey]: UsersReducer.reducer,
};
