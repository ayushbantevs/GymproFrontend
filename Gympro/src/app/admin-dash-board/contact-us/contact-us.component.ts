import { AdminServiceService } from './../../Services/admin-service.service';
import { ContactUsMesgComponent } from './../contact-us-mesg/contact-us-mesg.component';

import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddNewAdminComponent } from '../add-new-admin/add-new-admin.component';
import { AdvertisePageComponent } from '../advertise-page/advertise-page.component';
import { interval } from 'rxjs';


export interface UserData {
  Name: string;
  Message: string;
  Contact: string;
  email: string;
  date:string;
  action:string;
}



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],


})
export class ContactUsComponent implements OnInit {
   
  message:string="b";
  DataSource1:any[];
  cantactus:any;


  displayedColumns: string[] = ['Name', 'Message', 'Contact', 'email','date','action'];
 // expandedElement: UserData | null;

  dataSource: MatTableDataSource<UserData>;
 

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public dialog: MatDialog,private httpservice:AdminServiceService) { 

    // this.DataSource1 =[{Name:"Amar",Message:this.message,Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
    // {Name:"Amar",Message:this.message,Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
    // {Name:"Amar",Message:"hii demo message",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
    // {Name:"Amar",Message:this.message,Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
    // {Name:"Amar",Message:this.message,Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
    // {Name:"Amar",Message:this.message,Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
    // {Name:"Amar",Message:this.message,Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"}
    // ]; 

    // this.dataSource = new MatTableDataSource(this.DataSource1);
  }

 

  ngOnInit() {


    interval(1000).subscribe(x => 
      {
        this.httpservice.getAllContactMessage().subscribe(data=>{ 

      // console.log(data)
        var result = JSON.parse(JSON.stringify(data))
      
       // console.log(result);
        this.cantactus=result;
        this.dataSource = new MatTableDataSource(this.cantactus);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
          });
      });


 
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  openDialog(Message:string,email:string,Name:string):void{
    const dialogRef = this.dialog.open(ContactUsMesgComponent, {
       width: 'auto',
       height:'auto',  
       data: {message: Message, email: email,name:Name}
    });

   
  }

}






