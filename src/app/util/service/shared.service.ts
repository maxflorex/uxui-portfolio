import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public contactState = false;

  constructor() { }

  toggleContact() {
    this.contactState = !this.contactState;
  }

}
