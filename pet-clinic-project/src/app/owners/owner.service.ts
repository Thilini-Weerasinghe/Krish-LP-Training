import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/http.service';
import { Owner } from './Owners.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  Owner: any;

  constructor( private httpService: HttpService) { }

  // getOwners(): Observable <Owner[]> {
  //   return this.httpService.getAllOwners();
  // }

  // deleteOwner(id: number) : Observable <void> {
  //      return this.httpService.deleteOwner( id);
  // }
}
