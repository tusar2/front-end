import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()
export class TableService {

  constructor(private httpClient: HttpClient) { }
  getTableData(){
    return  this.httpClient.get('assets/tableData.json')
  }

}
