import { Component } from '@angular/core';

@Component({
  //to use <app-root></app-root>
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //to use this value in the html like this {{title}}
  name:string = 'angular-todo-list';

  constructor(){
    this.changeName("john");
    console.log(this.name);
  }

  changeName(name:string):void{
    this.name = name;
  }

}
