import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  objectTransfer: any; //objectTransfer was not initilized but its template is using ? symbol

  transfer($event){
    console.log($event);
    this.objectTransfer = $event;
  }

  
}
