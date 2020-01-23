import { GymuserService } from './../../../gymuser.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { Gymlist } from './gymlist';


@Component({
  selector: 'app-gymlist',
  templateUrl: './gymlist.component.html',
  styleUrls: ['./gymlist.component.scss']
})
export class GymlistComponent implements OnInit {
  //row: Object;
  gymlist:any;

  displayedColumns: string[] = ['id', 'name', 'progress', 'color','mfee','qfee','yfee','view'];
  dataSource: MatTableDataSource<Gymlist>;

   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(
    private apiservice:GymuserService,
    private router : Router
    ) { 
  
  }
  ngOnInit() {
    this.apiservice.getdata().subscribe(data=>{
      console.log(data);

     var tabltedt= JSON.parse(JSON.stringify(data));
      this.gymlist=tabltedt;
      this.dataSource = new MatTableDataSource(this.gymlist);
        this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
   
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
  remove_update(){
    this.router.navigate(['/gymadmin']);
  }

}
