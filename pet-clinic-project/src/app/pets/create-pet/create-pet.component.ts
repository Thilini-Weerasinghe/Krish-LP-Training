import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { PetsModule } from '../pets.module';
import { HttpService } from 'src/app/shared/http.service';
import { Router, RouterModule } from '@angular/router';
import { Pet } from '../Pets.model';

@Component({
  selector: 'pc-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit {
  [x: string]: any;

  formValue !: FormGroup;
  petsModelObj : Pet = new Pet();

  constructor(
    private formBuilder: FormBuilder,
    private httpService : HttpService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({
      id : [''],
      petName : [''],
      ownerName : [''],
      age: ['']
    })
  }

  postPetDetails(){
    this.petsModelObj.id = this.formValue.value.id;
    this.petsModelObj.petName = this.formValue.value.petName;
    this.petsModelObj.ownerName = this.formValue.value.ownerName;
    this.petsModelObj.age = this.formValue.value.age;

        this.httpService.postOwner(this.petsModelObj)
      .subscribe((res: any) => {
        console.log(res);
        alert("Added pet successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.router.navigateByUrl('/pets/list');
      },
        (      err: any) => {
        alert("something went wrong");
      })
  }

}
