import { Location } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-footer-next',
  templateUrl: './footer-next.component.html',
  styleUrls: ['./footer-next.component.scss']
})
export class FooterNextComponent {
  constructor(private location: Location, private renderer: Renderer2) { }

  goBack(): void {
    this.location.back();
  }

  scrollToTop() {
    this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
    this.renderer.setProperty(document.body, 'scrollTop', 0);
  }
}
