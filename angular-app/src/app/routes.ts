import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { A2sComponent } from './a2s/a2s.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    },
    {
        path: 'a2s',
        component: A2sComponent,
        title: 'A2s page'
    },
  ];
  
  export default routeConfig;