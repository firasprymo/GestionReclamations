import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowEquipmentsComponent} from './show-equipments.component';
import {EquipmentsResolvers} from '../../../../../shared/resolver/equipments-resolvers.service';


const routes: Routes = [{
    path: '',
    component: ShowEquipmentsComponent,
    resolve: {
        equipments: EquipmentsResolvers,
    }
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowEquipmentsRoutingModule {
}
