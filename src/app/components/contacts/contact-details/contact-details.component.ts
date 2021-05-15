import { Component, OnInit, Input } from '@angular/core';
import { IContact } from 'src/app/interfaces/IContact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  @Input() contactId!: string;
  contact!: IContact;

  constructor(
    private contactsService: ContactsService
  ) { }

  ngOnInit(): void {
    this.contact = this.contactsService.getContact(this.contactId);
  }

}
