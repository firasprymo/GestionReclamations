import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowContactsComponent} from './show-contacts.component';
import {ContactsResolvers} from '../../../../../shared/resolver/contacts-resolvers.service';

const routes: Routes = [{
    path: '',
    component: ShowContactsComponent,

    resolve: {
        contacts: ContactsResolvers
    }
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowContactsRoutingModule {
}
