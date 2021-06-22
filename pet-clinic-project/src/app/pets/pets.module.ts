import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { ListPetComponent } from './list-pet/list-pet.component';



@NgModule({
  declarations: [
   CreatePetComponent,
   EditPetComponent,
   ListPetComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PetsModule { }