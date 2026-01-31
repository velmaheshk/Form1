import { Routes } from '@angular/router';
import { Contact } from './Home/contact/contact';
import { Employeeform } from './Home/employeeform/employeeform';
import { About } from './Home/about/about';
 
export const routes: Routes = [
     {path:'contact',component:Contact},
     {path:'employeeform',component:Employeeform},
     {path:'about',component:About}
      
];
