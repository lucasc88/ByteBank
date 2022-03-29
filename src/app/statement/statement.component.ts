import { Component, Input, OnInit } from '@angular/core';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  //@Input allows a property biding receives the event emmited from NewTransferCompomemt
  //@Input()
  receiverObjectsTransfer: any = [];

  constructor(private service: TransferService) { }

  ngOnInit(): void {
    this.receiverObjectsTransfer = this.service.transfers;
  }

}
