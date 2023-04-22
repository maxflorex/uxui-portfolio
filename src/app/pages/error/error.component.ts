import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  product_id: any
  items$: Observable<boolean> = new Observable()

  constructor(private route: ActivatedRoute, private renderer: Renderer2) {

    this.product_id = this.route.snapshot.url[0].path
  }

  scrollToTop() {
    this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
    this.renderer.setProperty(document.body, 'scrollTop', 0);
  }

}
