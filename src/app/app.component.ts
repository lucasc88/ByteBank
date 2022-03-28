import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  objectsTransfer: any[] = []; //objectsTransfer array initialized

  transfer($event) {
    console.log($event);

    //add date using spread operator, it gets only the data inside the array and add Date
    const transferWithDate = {...$event, date: new Date()};
    this.objectsTransfer.push(transferWithDate);
  }


}
