import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddEquipmentComponent} from './add-equipment.component';

const routes: Routes = [{
    path: '',
    component: AddEquipmentComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddEquipmentRoutingModule {
}
