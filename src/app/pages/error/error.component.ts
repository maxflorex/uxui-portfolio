import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  product_id: any
  items$: Observable<boolean> = new Observable()

  constructor(private route: ActivatedRoute, private store: Store) {

    this.product_id = this.route.snapshot.url[0].path
    
    console.log(this.product_id);    
  }
  
  ngOnInit(): void {
    // this.items$ = this.store.select(selectLoading)
    
  }

}
