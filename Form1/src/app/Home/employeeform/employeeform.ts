import { Component } from '@angular/core';

interface Student{
  id:Number;
  Name:string,
  Place:string
}
@Component({
  selector: 'app-employeeform',
  imports: [],
  templateUrl: './employeeform.html',
  styleUrl: './employeeform.css',
})
export class Employeeform {

student:Student={id:1,Name:'Mahesh',Place:'Kanyakumari'}
}
