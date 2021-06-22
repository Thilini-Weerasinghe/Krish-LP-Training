import { HttpClient } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import {Owner} from "../owners/Owners.model";
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private ownerUrl: string = 'http://localhost:3000/posts'
  private _ngxModal_edit: any;

  constructor(private http: HttpClient) {

   }

  //  getAllOwners():Observable <Owner[]> {
  //    return this.http.get <Owner[]> (this.ownerUrl);
  //  }

  getAllOwners(){
    return this.http.get <any> (this.ownerUrl)
    .pipe(map((res:any)=> {
      return res;
    }))
  }

  getAllOwnerById(id: number){
    return this.http.get <any> (this.ownerUrl+"/"+id)
    .pipe(map((res:any)=> {
      return res;
    }))
  }

   postOwner(data: any){
     return this.http.post <any> (this.ownerUrl , data)
     .pipe(map((res:any)=> {
       return res;
     }))
   }

   updateOwner(data: any, id: number){
    return this.http.put <any> (this.ownerUrl +"/" + id, data)
    .pipe(map((res:any)=> {
      return res;
    }))
  }

  deleteOwners( id: number){
    return this.http.delete <any> (this.ownerUrl+"/" + id)
    .pipe(map((res:any)=> {
      return res;
    }))
  }

}
