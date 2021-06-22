import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { Owner } from '../Owners.model';
import { OwnersModule } from '../owners.module';
import { HttpService } from 'src/app/shared/http.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'pc-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  [x: string]: any;

  formValue !: FormGroup;
  ownersModelObj : Owner = new Owner();

  constructor( private formBuilder: FormBuilder,
    private httpService : HttpService,
    private router : Router) { }

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({
      id : [''],
      firstName : [''],
      lastName : [''],
      address: [''],
      contactNumber: ['']
    })
  }

  postOwnerDetails(){
    this.ownersModelObj.id = this.formValue.value.id;
    this.ownersModelObj.firstName = this.formValue.value.firstName;
    this.ownersModelObj.lastName = this.formValue.value.lastName;
    this.ownersModelObj.address = this.formValue.value.address;
    this.ownersModelObj.contactNumber = this.formValue.value.contactNumber;

        this.httpService.postOwner(this.ownersModelObj)
      .subscribe((res: any) => {
        console.log(res);
        alert("Added owner successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.router.navigateByUrl('/owners/list');
      },
        (      err: any) => {
        alert("something went wrong");
      })
  }

  // onEdit(owner : any){
  //   this.router.navigateByUrl('/owners/create');
  //   this.formValue.controls['id'].setValue(owner.id);
  //   this.formValue.controls['firstName'].setValue(owner.firstName);
  //   this.formValue.controls['lastName'].setValue(owner.lastName);
  //   this.formValue.controls['address'].setValue(owner.address);
  //   this.formValue.controls['contactNumber'].setValue(owner.contactNumber);
  //   }

}
