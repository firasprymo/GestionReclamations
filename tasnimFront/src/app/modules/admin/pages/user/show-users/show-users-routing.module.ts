import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowUsersComponent} from './show-users.component';
import {UsersResolvers} from '../../../../../shared/resolver/users.resolvers';

const routes: Routes = [{
    path: '',
    component: ShowUsersComponent,
    resolve: {
        users: UsersResolvers,
    }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowUsersRoutingModule { }
