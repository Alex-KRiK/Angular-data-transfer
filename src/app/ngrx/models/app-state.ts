import { usersFeatureKey, UsersState } from "../reducers/users.reducer";

export interface AppState {
  [usersFeatureKey]?: UsersState;
}
