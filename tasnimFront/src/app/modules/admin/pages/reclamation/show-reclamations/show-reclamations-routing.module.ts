import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    InventoryBrandsResolver,
    InventoryCategoriesResolver, InventoryVendorsResolver
} from '../../../apps/ecommerce/inventory/inventory.resolvers';
import {ShowReclamationsComponent} from './show-reclamations.component';
import {ReclamationsResolvers} from '../../../../../shared/resolver/reclamations.resolvers';

const routes: Routes = [{
    path: '',
    component: ShowReclamationsComponent,
    resolve: {
        reclamations: ReclamationsResolvers,
    }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowReclamationsRoutingModule { }
