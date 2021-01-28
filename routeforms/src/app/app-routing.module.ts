import { LoginComponent } from './login/login.component';
import { EditpComponent } from './editp/editp.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent} from './details/details.component';
import { SpecificComponent} from './specific/specific.component';

const routes: Routes = [ 
  
                          {path: 'dashboard', component: DashboardComponent},
                          {path: 'specific/:id', component: SpecificComponent},
                          {path: 'details/:id', component: DetailsComponent},
                          {path:  'editp/:id', component: EditpComponent},
                          {path: 'login', component: LoginComponent},
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
