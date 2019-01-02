
import { DOCUMENT } from '@angular/common';
import { Component, ViewEncapsulation, Renderer2, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) document, private renderer: Renderer2) {
    renderer.addClass(document.body, 'rr-body');
    renderer.addClass(document.body, 'hide-desktop-tablet-sub-header');
    renderer.addClass(document.body, 'hide-mobile-fylp');
    renderer.addClass(document.body, 'no-franchise-location');
  }
  title = 'rr-web-new roto';
}
