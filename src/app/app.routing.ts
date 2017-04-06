import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FundraiserDetailComponent } from './fundraiser-detail/fundraiser-detail.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'fundraisers/:id',
    component: FundraiserDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }, 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
