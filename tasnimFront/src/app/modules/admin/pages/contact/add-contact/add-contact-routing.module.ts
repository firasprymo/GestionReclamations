import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddContactComponent} from './add-contact.component';
import {ContactByIdResolvers} from '../../../../../shared/resolver/contacts-resolvers.service';

const routes: Routes = [
    {
        path: '',
        component: AddContactComponent,
        resolve: {
            contact: ContactByIdResolvers
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddContactRoutingModule {
}
