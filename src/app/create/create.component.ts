import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(
    private service: ApiserviceService,
    private router: ActivatedRoute
  ) {}
  errormsg: any;
  successmsg: any;
  getparamid: any;
  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');
   
    if (this.getparamid) {
      this.service.getSingleData(this.getparamid).subscribe((res) => {
        console.log(res, 'res=>');
        this.userForm.patchValue({
          firstname: res.firstname,
          middlename: res.middlename,
          lastname: res.lastname,
          email:res.email,
          phone:res.phone,
          role:res.role,
          address:res.address,
          customer:res.customer,
        });
      });
    }
  }
  userForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    middlename: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    role: new FormControl('number', Validators.required),
    address: new FormControl('', Validators.required),
    customer: new FormControl('number', Validators.required),
  });

  userSubmit() {
    if (this.userForm.valid) {
      this.service.createData(this.userForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.userForm.reset();
        this.successmsg = res.message;
      });
    } else {
      
      this.errormsg = 'All field required';
    }
  }

  userUpdate() {
    console.log(this.userForm.value, 'updated');
    if (this.userForm.value) {
      this.service
        .updateData(this.userForm.value, this.getparamid)
        .subscribe((res) => {
          console.log(res, 'resupdated');
          this.successmsg = "Updated";
        });
    } else {
      this.errormsg = 'all field required';
    }
  }
}
