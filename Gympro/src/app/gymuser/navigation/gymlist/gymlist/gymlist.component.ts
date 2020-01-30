import { DataSource } from '@angular/cdk/table';
import { GymDetailsComponent } from './../gym-details/gym-details.component';

import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Gymlist } from './gymlist';
import { GymuserService } from 'src/app/gymuser/gymuser.service';


@Component({
  selector: 'app-gymlist',
  templateUrl: './gymlist.component.html',
  styleUrls: ['./gymlist.component.scss']
})
export class GymlistComponent implements OnInit {
  //row: Object;
  gymlist:any;

  displayedColumns: string[] = ['Gymid', 'GymName', 'Address', 'Contact','mfee','view'];
  dataSource: MatTableDataSource<Gymlist>;
  @Input('rating') private gymrow: string;
   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dt: MatTableDataSource<Gymlist>;
  //selectedUser: any;

  
  constructor(
    private apiservice:GymuserService,
    private router : Router,
    private dialog:MatDialog
    ) { 
  
  }
  ngOnInit() {
    // this.gymdetails();

   // this.apiservice.getdata().subscribe(data=>{
     // console.log(data);
    // var tabltedt= JSON.parse(JSON.stringify(data));
    //  this.gymlist=tabltedt;
      this.gymlist=[{GymId:'001',Gym_Name:'Multi-Fit',Gym_Owner_Name:'Ajay Shinde',Gym_Address:'Pune',phonenumber:'9874512454',Monthly_Fees_Amount:'500',Quarterly_Fees_Amount:'2000',Yearly_Fees_Amount:'5000'},
      {GymId:'002',Gym_Name:'Boost',Gym_Owner_Name:'Ajay Shinde',Gym_Address:'Phalatan',phonenumber:'9874512454',Monthly_Fees_Amount:'500',Quarterly_Fees_Amount:'2000',Yearly_Fees_Amount:'5000'},
      {GymId:'003',Gym_Name:'Multi-Fit',Gym_Owner_Name:'Akshay Marne',Gym_Address:'Pune',phonenumber:'9874512784',Monthly_Fees_Amount:'500',Quarterly_Fees_Amount:'2000',Yearly_Fees_Amount:'5000'},
      {GymId:'004',Gym_Name:'Pahilwan',Gym_Owner_Name:'Vinayak Pedkar',Gym_Address:'Satara',phonenumber:'98745125412',Monthly_Fees_Amount:'500',Quarterly_Fees_Amount:'2000',Yearly_Fees_Amount:'5000'},
      {GymId:'005',Gym_Name:'Multi-Fit',Gym_Owner_Name:'Ajay Shinde',Gym_Address:'Baramati',phonenumber:'9874512454',Monthly_Fees_Amount:'500',Quarterly_Fees_Amount:'2000',Yearly_Fees_Amount:'5000'}
      ]
      this.dataSource = new MatTableDataSource(this.gymlist);
        this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dt=this.dataSource;
      console.log(this.gymlist);
   // })
   
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
  
  gymdetails(GymId:string,Gymname:string,gymAddress:string,GymOwnerName:string,phonenumber:string,monthlyfee:string,QuarterlyFee:string,YearlyFee:string):void{
  //alert(GymId+""+Gymname+""+GymOwnerName+""+gymAddress+""+phonenumber+""+monthlyfee+""+QuarterlyFee+""+YearlyFee+"")
    const dialogRef = this.dialog.open(GymDetailsComponent, {
    height:'auto',
    width: 'auto', 
    data:{id:GymId,Name:Gymname,Address:gymAddress,Phone:phonenumber,Mfee:monthlyfee,Qfee:QuarterlyFee,YFee:YearlyFee}
   // declare variable in component.
    //  this.gymrow=this.dt;

  });   }
    
   
 
 

}
