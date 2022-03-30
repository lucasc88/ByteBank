import { Component, Input, OnInit } from '@angular/core';
import { Transfer } from '../models/transfer.model';
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

  //service injection
  constructor(private service: TransferService) { }

  
  ngOnInit(): void {
    this.service.allTransfers().subscribe((transfers: Transfer[]) => {
      console.table(transfers);
      this.receiverObjectsTransfer = transfers;
    })
  }

}
