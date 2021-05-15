import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from 'src/app/interfaces/IContact';

@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {
  contactId: string = '';
  
  constructor(
    private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.contactId = this.route.snapshot.paramMap.get("id") as string;

  }

}
