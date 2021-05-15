import { Injectable } from '@angular/core';
import { IContact } from '../interfaces/IContact';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { tap } from "rxjs/operators";
import { IContactResponse } from '../interfaces/IContactResponse';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  registeredContacts: Array<IContact> = [];
  readonly radomUserApiUrl: string = "https://randomuser.me/api";

  constructor(
    private http: HttpClient
  ) { 
   
  }

  getSingleContact(): Observable<object> {
    return this.http
      .get<IContactResponse>(this.radomUserApiUrl )
      .pipe(
        tap((res) => console.log("fetched user ", res)),
      );
  }

  getContact(id: string): any{
    const contact = this.registeredContacts.find((c=>c.id == id));
    return contact;
  }

  setRegisteredContacts(contacts: IContact[]) {
    this.registeredContacts = contacts;
  }

  getRegisteredContacts() {
    return this.registeredContacts;
  }
}
