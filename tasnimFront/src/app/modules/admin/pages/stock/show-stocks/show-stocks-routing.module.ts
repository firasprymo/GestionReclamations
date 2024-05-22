import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowStocksComponent} from './show-stocks.component';
import {StocksResolver} from '../../../../../shared/resolver/stocks-resolver.service';

const routes: Routes = [{
    path: '',
    component: ShowStocksComponent,
    resolve: {
        stocks: StocksResolver
    }
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowStocksRoutingModule {
}
