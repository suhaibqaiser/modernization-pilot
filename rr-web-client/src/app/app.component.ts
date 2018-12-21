import { Component, ViewEncapsulation, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'rr-body');
    this.renderer.addClass(document.body, 'hide-desktop-tablet-sub-header');
    this.renderer.addClass(document.body, 'hide-mobile-fylp');
    this.renderer.addClass(document.body, 'no-franchise-location');
  }
  title = 'rr-web-new roto';
}
