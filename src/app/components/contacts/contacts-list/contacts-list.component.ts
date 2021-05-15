import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/interfaces/IContact';
import { ContactsService } from 'src/app/services/contacts.service';
import { IContactResponse } from 'src/app/interfaces/IContactResponse';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts!: Array<IContact>;

  constructor(
    private contactsService: ContactsService
  ) {
  }

  ngOnInit(): void {
    // this.contacts = this.contactsService.getContacts();
    console.log("ssss");
    this.contactsService.getContacts().subscribe(
      (res: any) => {
        const contacts = res.results;
        // this.contacts = 
      }
    );
  }

}
