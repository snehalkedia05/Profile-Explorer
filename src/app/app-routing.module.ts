import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

const routes: Routes = [
  { path: '', redirectTo: '/profiles', pathMatch: 'full' }, // Default route
  { path: 'profiles', component: ProfileListComponent },  // Profile List route
  { path: 'profile/:id', component: ProfileDetailsComponent }, // Profile Details route
  { path: 'admin', component: AdminPanelComponent },  // Admin Panel route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
