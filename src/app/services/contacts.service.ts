import { Injectable } from '@angular/core';
import { IContact } from '../interfaces/IContact';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { IContactResponse } from '../interfaces/IContactResponse';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  contacts: Array<IContact>
  readonly radomUserApiUrl: string = "https://randomuser.me/api";

  constructor(
    private http: HttpClient
  ) { 
    this.contacts = [
      {
        id: "123",
        name: "Daniel Bar-Kedem",
        pic: "/assets/temp/contact_pic.jpeg",
        email: "Danbk@mail.com",
        address: "Hod Hasharon Rashi st.",
        phone: "08-9702827"
      },
      {
        id: "2222",
        name: "Mor Dusha Bar Kedem",
        pic: "/assets/temp/contact_pic.jpeg",
        email: "dusha@mail.com",
        address: "Hod Hasharon Rashi st.",
        phone: "08-9702827"
      },
      {
        id: "3333",
        name: "Moran Taltalazh",
        pic: "/assets/temp/contact_pic.jpeg",
        email: "moran@mail.com",
        address: "Tel Aviv Florentine st.",
        phone: "08-9702827"
      },
      {
        id: "44444",
        name: "Michal Zion",
        pic: "/assets/temp/contact_pic.jpeg",
        email: "moran@mail.com",
        address: "Tel Aviv Florentine st.",
        phone: "08-9702827"
      },
      {
        id: "123",
        name: "Daniel Bar-Kedem",
        pic: "/assets/temp/contact_pic.jpeg",
        email: "Danbk@mail.com",
        address: "Hod Hasharon Rashi st.",
        phone: "08-9702827"
      },
      {
        id: "2222",
        name: "Mor Dusha Bar Kedem",
        pic: "/assets/temp/contact_pic.jpeg",
        email: "dusha@mail.com",
        address: "Hod Hasharon Rashi st.",
        phone: "08-9702827"
      },
      {
        id: "3333",
        name: "Moran Taltalazh",
        pic: "/assets/temp/contact_pic.jpeg",
        email: "moran@mail.com",
        address: "Tel Aviv Florentine st.",
        phone: "08-9702827"
      },
      {
        id: "44444",
        name: "Michal Zion",
        pic: "/assets/temp/contact_pic.jpeg",
        email: "moran@mail.com",
        address: "Tel Aviv Florentine st.",
        phone: "08-9702827"
      }
    ]
  }

  getContacts(): Observable<object> {
    // return this.contacts;
    return this.http
      .get<IContactResponse>(this.radomUserApiUrl )
      .pipe(
        tap((res) => console.log("fetched user ", res)),
        catchError(this.handleError<object>("getSchoolById", {}))
      );
  }

  getContact(id: string): any{
    const contact = this.contacts.find((c=>c.id == id));
    return contact;
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
