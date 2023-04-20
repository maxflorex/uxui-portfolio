import { Component, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { UrlState } from 'src/app/util/state/url-state/url.reducers';
import { resetURL } from 'src/app/util/state/url-state/url.actions';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {

  url$: Observable<string | null>;
  isUrlString: boolean = false;

  constructor(private store: Store<{ url: UrlState }>) {
    this.url$ = this.store.pipe(select(state => state.url?.url || null));
  }

  @HostListener('document:keydown.escape')
  onCloseModal() {
    this.store.dispatch(resetURL());
    document.body.style.overflow = 'auto';
  }

  ngOnInit() {
    this.url$.subscribe(value => {
      this.isUrlString = typeof value === 'string';
    });
  }

}
