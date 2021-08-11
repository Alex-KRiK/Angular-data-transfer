import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const loadAllUsers = createAction('[loadUsers] Load All Users');
export const resetUsers = createAction('[resetUsers] Reset All Users');
export const setAllUsers = createAction('[setUsers] Set All Users',
  props<{ users: User[] }>()
);
