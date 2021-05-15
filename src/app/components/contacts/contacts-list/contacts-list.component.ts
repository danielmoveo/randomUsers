import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/interfaces/IContact';
import { ContactsService } from 'src/app/services/contacts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  public readonly NUM_OF_CONTACTS = 10;

  contacts: Array<IContact> = [];
  sub!: Subscription;

  constructor(
    private contactsService: ContactsService
  ) {
  } 

  ngOnInit(): void {
    this.getContacts();
  }
  
  getContacts() {
    let contacts = this.contactsService.getRegisteredContacts();
    if(contacts.length == 0){
      // First Enter, Get users from API:
      this.getContactsHelper();
    }
    else{
      // Set contatcs:
      this.contacts = contacts;
    }
  }

  getContactsHelper() {
    this.sub = this.contactsService.getSingleContact().subscribe(
      (res: any) => {
        const contactsFromResult:Array<any> = res.results;
        if(contactsFromResult.length > 0){
          // Map results - Get Contact from response:
          this.contacts.push(this.mapSingleContact(contactsFromResult));
        }
        if(this.contacts.length < this.NUM_OF_CONTACTS){
          // Get another user:
          this.getContactsHelper();
        }
        else{
          // All users retrieved, update service:
          this.contactsService.setRegisteredContacts(this.contacts)
        }
      },
      this.handleError
    );
  }

  mapSingleContact(contactsFromResult: any[]): IContact {
    const c = contactsFromResult[0];

    return {
      id: c.login.uuid,
      name: `${c.name.first} ${c.name.last}`,
      pic: c.picture.large,
      email: c.email,
      address: `${c.location.street.name}, ${c.location.city}`,
      phone: c.phone
    };
  }

  private handleError(error:any) {
      console.error(error.message);
      this.contacts = [];
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
