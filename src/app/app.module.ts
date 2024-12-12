import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // <-- Add this import
import { FormsModule } from '@angular/forms';  // for ngModel
import { MatButtonModule } from '@angular/material/button';  // for Angular Material buttons
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent,
    ProfileDetailsComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([  // Add routes to your application here
      { path: '', component: ProfileListComponent },
      { path: 'profile/:id', component: ProfileDetailsComponent },
    ]),
    FormsModule,  // for ngModel
    AppRoutingModule,
    MatButtonModule  // for Angular Material buttons

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
