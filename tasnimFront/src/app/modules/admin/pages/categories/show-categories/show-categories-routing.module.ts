import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowCategoriesComponent} from './show-categories.component';
import {CategoriesResolvers} from '../../../../../shared/resolver/categories-resolvers.service';

const routes: Routes = [{
    path: '',
    component: ShowCategoriesComponent,
    resolve: {
        categories: CategoriesResolvers,
    }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowCategoriesRoutingModule { }
