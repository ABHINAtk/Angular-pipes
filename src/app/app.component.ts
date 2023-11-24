import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  students = [
    { name: 'Anu', gender: 'Female' MarK:100 },
    { name: 'jasmin', gender: 'Female'  Mark:90},
    { name: 'Athul', gender: 'Male'  Mark:80},
    { name: 'Janaki', gender: 'Female'  Mark:70},
    { name: 'kiran', gender: 'Male' Mark:50},
    { name: 'vimal', gender: 'Male' Mark:50},
    
  ];

  public heading:string="welcome";
}
