import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { TripsAppComponent } from './trips-app.component';
import { TripsListComponent } from './trips/trips-list.component';
import { TripThumbnailComponent } from './trips/trip-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import {DataStorageService} from './services/data-storage.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    TripsAppComponent,
    TripsListComponent,
    TripThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataStorageService],
  bootstrap: [TripsAppComponent]
})
export class AppModule { }
