import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { USERS, usersProvider } from '../../providers/users.provider';
import { UsersFacade } from './users.facade';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersFacade, usersProvider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {

  constructor(
    private readonly usersFacade: UsersFacade,
    @Inject(USERS) public readonly users$: Observable<User[]>
  ) { }

  ngOnInit(): void {
  }

  clearUsers(): void {
    this.usersFacade.clearUsers();
  }

  goToParentState(): void {
    this.usersFacade.goToParentState();
  }

  getUsers(): void {
    this.usersFacade.getAllUsers();
  }

}
