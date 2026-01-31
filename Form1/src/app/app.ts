import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Employeeform } from './Home/employeeform/employeeform';
import { Contact } from './Home/contact/contact';
import{Router} from '@angular/router'
import { About } from './Home/about/about';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Employeeform,Contact,About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Form1');

  constructor(private route:Router){

  }

getNextPage(){
  this.route.navigate(['Contact',1])
}
}
