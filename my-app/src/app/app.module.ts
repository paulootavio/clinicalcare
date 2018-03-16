import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { TrackingComponent } from './tracking/tracking.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckinComponent } from './checkin/checkin.component';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:4200', options: {} };

// ROUTES
const appRoutes: Routes = [
  { path: 'tracking', component: TrackingComponent },
  { path: 'checkin', component: CheckinComponent },
  // {
  //   path: 'tracking',
  //   component: TrackingComponent,
  //   data: { title: 'Heroes List' }
  // },
 // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TrackingComponent,
    CheckinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    SocketIoModule.forRoot(config) 
  ],
  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { 

 

}
