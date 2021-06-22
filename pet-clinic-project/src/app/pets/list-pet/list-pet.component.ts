import { Component, OnInit, TemplateRef } from '@angular/core';
import { Pet } from '../Pets.model';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pc-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrls: ['./list-pet.component.scss']
})
export class ListPetComponent implements OnInit {

  [x: string]: any;
  formValue !: FormGroup;
  petData !: any;

  constructor(private httpService : HttpService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPets();
  }

  btnClick=  () => {
    this.router.navigateByUrl('/pets/create');
};

getPets(){
  this.httpService.getAllPets()
  .subscribe ((res: any) => {
   this.petData = res;
  })

}

deletePet(id: number){
  this.httpService.deletePets(id)
  .subscribe ((res: any) => {
    alert("Pet deleted");
   this.getPets();
  })

}

onEdit(id: number){
  this.router.navigateByUrl('/pets/edit');
  this.httpService.getPetById(id)
  .subscribe ((res: any) => {
   this.petData = res;
   console.log(res);
  })
  }
}
