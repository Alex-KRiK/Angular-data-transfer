import { createReducer, on } from "@ngrx/store";
import { UsersActions } from "../actions";
import { User } from "../models/user.model";

export const usersFeatureKey = 'users';

export interface UsersState {
  users: User[];
}

export const initialState: UsersState = {
  users: []
};

export const reducer = createReducer(
  initialState,
  on(UsersActions.setAllUsers, (state, action) => ({
    ...state,
    users: action.users
  })),

  on(UsersActions.resetUsers , (state) => ({
    ...state,
    ...initialState
  }))
);
