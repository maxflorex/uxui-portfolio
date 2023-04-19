import { Component } from '@angular/core';
import { SharedService } from 'src/app/util/service/shared.service';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent {

  constructor(public sharedService: SharedService) { }

  openContact() {
    this.sharedService.toggleContact();
  }

}
