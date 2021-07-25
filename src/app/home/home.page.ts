import { variable } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare const H: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit{


  platform: any;

  constructor() {}

  ngOnInit() {
    //  this.platform = new H.service.Platform({
    //   apiKey: 'oJnJCaTbWm2ZP3urwuJS_4FDU9PqRC4b-5M39f8Nwz4'
    // });

  }

  ngAfterViewInit(){
//      const pixelRatio = window.devicePixelRatio || 1;

//      const defaultLayers = this.platform.createDefaultLayers();
//      const map = new H.Map(
//             document.getElementById('map'),
//             defaultLayers.vector.normal.map,
//             {
//               center: { lat: 7.1256, lng: 13.4 },
//               zoom: 10,
//               engineType: H.map.render.RenderEngine.EngineType.P2D,
//               //pixelRatio: window.devicePixelRatio || 1
//             }

//         );
//         document.addEventListener('touchstart', map, {passive: false});
//         ///map.setBaseLayer(defaultLayers.satellite.traffic);
//         // 'maptypes' variable holds the result of the H.service.Platform#createDefaultLayers call
//         const beha = new H.mapevents.MapEvents(map);

//         new H.mapevents.Behavior(beha);

//         //window.addEventListener('resize', () => map.getViewPort().resize());

// //Step 3: make the map interactive
// // MapEvents enables the event system
// // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
// // const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// // Create the default UI components
//  H.ui.UI.createDefault(map, defaultLayers);

  }

}
