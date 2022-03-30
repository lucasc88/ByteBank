import { Component, Output, EventEmitter } from '@angular/core';
import { Transfer } from '../models/transfer.model';
import { TransferService } from '../services/transfer.service';

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

  constructor(private service: TransferService) { }

  transfer() {
    const valueToSend: Transfer = { value: this.value, destination: this.destination };
    //this.afterSubmit.emit(valueToSend);
    this.service.add(valueToSend).subscribe(result => {
      console.log(result);
      this.clear();
    },
      (error) => console.error(error)
    );

  }

  clear() {
    this.value = 0;
    this.destination = 0;
  }
}