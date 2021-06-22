import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';
import { Owner } from '../Owners.model';

@Component({
  selector: 'pc-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  ownersModelObj : Owner = new Owner();
  formValue !: FormGroup;
  ownerData !: any;
  myGroup !: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private httpService : HttpService
  ) { }

  ngOnInit(): void {


    this.formValue = this.formBuilder.group({
      id : [''],
      firstName : [''],
      lastName : [''],
      address: [''],
      contactNumber: [''],
    })
  }

  getOwner(id: number){
    this.httpService.getAllOwnerById(id)
    .subscribe ((res: any) => {
     this.ownerData = res;
    })
  }

  editOwnerDetails(){
    
    this.ownersModelObj.id = this.formValue.value.id;
    this.ownersModelObj.firstName = this.formValue.value.firstName;
    this.ownersModelObj.lastName = this.formValue.value.lastName;
    this.ownersModelObj.address = this.formValue.value.address;
    this.ownersModelObj.contactNumber = this.formValue.value.contactNumber;


        this.httpService.updateOwner (this.ownersModelObj, this.ownersModelObj.id)
      .subscribe((res: any) => {
        console.log(res);
        alert("Edit owner details successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.router.navigateByUrl('/owners/list');
      },
        (      err: any) => {
        alert("something went wrong");
      })
  }

}
function id(ownersModelObj: Owner, id: any, Number: NumberConstructor) {
  throw new Error('Function not implemented.');
}

function onEdit(owner: any, any: any) {
  throw new Error('Function not implemented.');
}

