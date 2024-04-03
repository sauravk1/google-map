import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { MapMarkerComponent } from './map-marker/map-marker.component';
import { MapPolygonComponent } from './map-polygon/map-polygon.component';

const routes: Routes = [
  {path:'',component:GooglemapComponent},
  {path: 'map-marker', component: MapMarkerComponent},
  {path: 'map-polygon', component: MapPolygonComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
