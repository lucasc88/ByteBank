import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  //@Input allows a property biding receives the event emmited from NewTransferCompomemt
  @Input() receiverObjectTransfer: any;

  constructor() { }

  ngOnInit(): void {
  }

}
