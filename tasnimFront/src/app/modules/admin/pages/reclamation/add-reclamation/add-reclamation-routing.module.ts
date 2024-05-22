import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddReclamationComponent} from './add-reclamation.component';

const routes: Routes = [{
    path: '',
    component: AddReclamationComponent,
    resolve: {
    }
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddReclamationRoutingModule {
}
