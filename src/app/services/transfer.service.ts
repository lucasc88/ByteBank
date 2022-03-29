import { Injectable } from '@angular/core';

//metadata that allows the injection in others Components using the Constructor
@Injectable({
  //using root, it means this service is active in any module
  providedIn: 'root'
})
export class TransferService {

  private transfersList: any[];

  constructor() {
    this.transfersList = [];
  }

  get transfers() {
    return this.transfersList;
  }

  add(transfer: any) {
    this.addDate(transfer);
    this.transfersList.push(transfer);
  }

  private addDate(transfer: any) {
    transfer.data = new Date();
  }
}
