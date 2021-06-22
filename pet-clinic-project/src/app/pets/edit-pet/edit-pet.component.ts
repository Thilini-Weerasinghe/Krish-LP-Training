import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';
import { Pet } from '../Pets.model';

@Component({
  selector: 'pc-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent implements OnInit {

  petsModelObj : Pet = new Pet();
  formValue !: FormGroup;
  ownerData !: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private httpService : HttpService
  ) { }

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({
      id : [''],
      petName : [''],
      ownerName : [''],
      age: ['']
    })
  }

  editPetsDetails(){
    this.petsModelObj.id = this.formValue.value.id;
    this.petsModelObj.petName = this.formValue.value.petName;
    this.petsModelObj.ownerName = this.formValue.value.ownerName;
    this.petsModelObj.age = this.formValue.value.age;

        this.httpService.updatePet(this.petsModelObj, this.petsModelObj.id)
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
