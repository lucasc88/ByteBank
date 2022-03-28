import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {

  //metada to send for other component
  @Output() afterSubmit = new EventEmitter<any>();

  //attributes
  value: number;
  destination: number;

  transfer() {
    const valueToSend = {value: this.value, destination: this.destination};
    this.afterSubmit.emit(valueToSend);
    this.clear();
  }

  clear(){
    this.value = 0;
    this.destination = 0;
  }
}