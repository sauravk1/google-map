import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavigationBarComponent } from './app-navigation-bar/app-navigation-bar.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { MapMarkerComponent } from './map-marker/map-marker.component';
import { MapPolygonComponent } from './map-polygon/map-polygon.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationBarComponent,
    GooglemapComponent,
    MapMarkerComponent,
    MapPolygonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
