import { Component } from '@angular/core';

interface contactDetails {
  id: Number,
  name: string,
  place: string,
  district: string,
}
@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  data: contactDetails[] = [
    { id: 1, name: 'Mahesh', place: 'KK Nagar', district: 'Chennai' },
    { id: 2, name: 'Suresh', place: 'Anna Nagar', district: 'Chennai' },
    { id: 3, name: 'Ramesh', place: 'Tambaram', district: 'Chengalpattu' },
    { id: 4, name: 'Karthik', place: 'Avadi', district: 'Chennai' },
    { id: 5, name: 'Vijay', place: 'Guindy', district: 'Chennai' },
    { id: 6, name: 'Ajith', place: 'Pollachi', district: 'Coimbatore' },
    { id: 7, name: 'Arun', place: 'Tiruppur', district: 'Tiruppur' },
    { id: 8, name: 'Bala', place: 'Salem', district: 'Salem' },
    { id: 9, name: 'Prakash', place: 'Erode', district: 'Erode' },
    { id: 10, name: 'Naveen', place: 'Hosur', district: 'Krishnagiri' },
    { id: 11, name: 'Senthil', place: 'Madurai', district: 'Madurai' }
  ]

}
