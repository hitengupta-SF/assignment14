import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  isEditable:boolean[]=[];
  oldCustomer:[]=[];
  cust:[]=[];

  constructor(private service:ApiserviceService) { }
  customerData:any;
  successmsg:any;
  ngOnInit(): void {
    this.getAllCustomer
  }
  deleteID(id:any)
  {
  console.log(id,"deleted");
  this.service.deleteDataCustomer(id).subscribe((res)=>{
  console.log("deleted from database");
  this.successmsg=res.message;
  this.getAllCustomer();
  });
  
  }
  getAllCustomer(){
    this.service.getAllCustomer().subscribe((res)=>{
      console.log(res,'res==>');
      this.customerData=res;
      alert("hello");
      
    });
  }



  update(index: number)
  {
    this.oldCustomer = JSON.parse(JSON.stringify(this.cust));
    this.isEditable[index] = true;
  }
  save(index: number,row: HTMLTableRowElement)
  {
    this.isEditable[index] = false;;
  }
  delete(i: number)
  {
    this.isEditable.splice(i,1);
  }
  cancel(index: number)
  {
    this.isEditable[index] = false;
  }












}
