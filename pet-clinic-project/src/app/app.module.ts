import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateComponent } from './owners/create/create.component';
import { EditComponent } from './owners/edit/edit.component';
import { ListComponent } from './owners/list/list.component';
import { OwnersModule } from './owners/owners.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http' 
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePetComponent } from './pets/create-pet/create-pet.component';
import { ListPetComponent } from './pets/list-pet/list-pet.component';
import { EditPetComponent } from './pets/edit-pet/edit-pet.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    OwnersModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
     {path: 'owners/list', component: ListComponent}, 
     {path: 'owners/edit', component: EditComponent}, 
     {path: 'owners/create', component: CreateComponent},  
     {path: 'home', component:HomeComponent},
     {path: '', redirectTo:'home', pathMatch:'full'},
     {path: 'pets/list' , component: ListPetComponent},
     {path: 'pets/edit' , component: EditPetComponent},
     {path: 'pets/create' , component: CreatePetComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
