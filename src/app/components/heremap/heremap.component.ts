import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
declare const H: any;
@Component({
  selector: 'app-heremap',
  templateUrl: './heremap.component.html',
  styleUrls: ['./heremap.component.scss'],
})
export class HeremapComponent implements OnInit, AfterViewInit {

  @ViewChild('mapContainer') public mapElement: ElementRef;

  @Input() apiKey: any;
  platform: any;

  constructor() { }

  ngOnInit() {
    this.platform = new H.service.Platform({
      apikey : this.apiKey
    });
    console.log(this.apiKey);

  }

  ngAfterViewInit() {
     const maptypes = this.platform.createDefaultLayers();

    const map = new H.Map(
    document.getElementById('mapContainer'),
      maptypes.vector.normal.map,
      {
        center: {lng: 13.4, lat: 52.51},
        engineType: H.map.render.RenderEngine.EngineType.P2D,
        pixelRatio: window.devicePixelRatio || 1,
        zoom:10
      }
    );
   // map.setBaseLayer(maptypes.raster.satellite.traffic);

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    const ui = H.ui.UI.createDefault(map, maptypes);
    const mapSettings = ui.getControl('mapsettings');
    const zoom = ui.getControl('zoom');
    const scalebar = ui.getControl('scalebar');

    mapSettings.setAlignment('top-left');
    const bubble = new H.ui.InfoBubble({lng: 13.4, lat:55.51}, {
      content: '<b>Hello world. Its working</b>'
    });
    ui.addBubble(bubble);

    console.log(map);/*  */

  }

}
