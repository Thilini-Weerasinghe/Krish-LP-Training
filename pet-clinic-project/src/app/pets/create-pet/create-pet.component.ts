import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
// import { Owner } from '../Owners.model';
import { PetsModule } from '../pets.module';
import { HttpService } from 'src/app/shared/http.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'pc-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit {
  [x: string]: any;

  formValue !: FormGroup;
  //ownersModelObj : Owner = new Owner();

  constructor(
    private formBuilder: FormBuilder,
    private httpService : HttpService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({
      id : [''],
      pettName : [''],
      ownerName : [''],
      age: ['']
    })
  }

  postPetDetails(){
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

}
