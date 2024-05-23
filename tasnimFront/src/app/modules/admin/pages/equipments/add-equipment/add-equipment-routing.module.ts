import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddEquipmentComponent} from './add-equipment.component';
import {CategoriesResolvers} from '../../../../../shared/resolver/categories-resolvers.service';

const routes: Routes = [{
    path: '',
    component: AddEquipmentComponent,
    resolve:{
        categories:CategoriesResolvers
    }
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddEquipmentRoutingModule {
}
