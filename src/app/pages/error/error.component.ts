import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  
  product_id: any

  constructor(private route: ActivatedRoute) {
    this.product_id = this.route.snapshot.url[0].path

    console.log(this.product_id);
    
  }
  

 

}
