import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddStockComponent} from './add-stock.component';
import {EquipmentsResolvers} from '../../../../../shared/resolver/equipments-resolvers.service';

const routes: Routes = [{
    path: '',
    component: AddStockComponent,
    resolve: {
        equipments: EquipmentsResolvers
    }
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddStockRoutingModule {
}
