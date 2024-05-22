import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddCategoryComponent} from './add-category.component';
import {CategoryByIdResolver} from '../../../../../shared/resolver/categories-resolvers.service';

const routes: Routes = [{
    path: '',
    component: AddCategoryComponent,
    resolve: {
        category: CategoryByIdResolver,
    }
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddCategoryRoutingModule {
}
