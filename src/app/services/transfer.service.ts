import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//do the http requestes
import { Observable } from 'rxjs';
import { Transfer } from '../models/transfer.model';

//metadata that allows the injection in others Components using the Constructor
@Injectable({
  //using root, it means this service can be created in any module just using the its constructor
  providedIn: 'root'
})
export class TransferService {

  private transfersList: any[];
  private url = 'http://localhost:3000/transfers';

  constructor(private httpClient: HttpClient) {
    this.transfersList = [];
  }

  get transfers() {
    return this.transfersList;
  }

  //Observable is an asynchronous method, it will return when the response happens
  allTransfers(): Observable<Transfer[]>{
    return this.httpClient.get<Transfer[]>(this.url);
  }

  add(transfer: Transfer): Observable<Transfer> {
    this.addDate(transfer);
    return this.httpClient.post<Transfer>(this.url, transfer);
  }

  private addDate(transfer: any) {
    transfer.date = new Date();
  }
}
