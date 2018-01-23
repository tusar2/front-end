import { Component, OnInit } from '@angular/core';
import {TableService} from '../../../../service/basicComponent/table.service'

@Component({
  selector: 'app-sdrc-table',
  templateUrl: './sdrc-table.component.html',
  styleUrls: ['./sdrc-table.component.scss'],
  providers: [TableService]
})
export class SdrcTableComponent implements OnInit {
  tableData:any;
  tableColumns: any;
  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.tableService.getTableData().subscribe(data=>{
      this.tableData = data;
      this.tableColumns = Object.keys(data[0]);
    })
  }

}
