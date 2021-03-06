import {bootstrap} from '@angular/platform-browser-dynamic';
import {provideRouter} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import ApplicationComponent from './components/application/application';
import HomeComponent from './components/home/home';
import ProductDetailComponent from './components/product-detail/product-detail';

bootstrap(ApplicationComponent, [
  provideRouter([
    {path: '', component: HomeComponent},
    {path: 'products/:prodTitle', component: ProductDetailComponent}
  ]),
  {provide: LocationStrategy, useClass: HashLocationStrategy}
]);
