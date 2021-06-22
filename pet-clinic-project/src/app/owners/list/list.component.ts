import { Component, OnInit, TemplateRef } from '@angular/core';
import { OwnerService } from '../owner.service';
import { Owner } from '../Owners.model';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormGroup } from '@angular/forms';
// import owners from '../data/owners.json';

@Component({
  selector: 'pc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  [x: string]: any;
  formValue !: FormGroup;
  ownerData !: any;
  

  constructor(private httpService : HttpService,
    private router: Router) { }

  ngOnInit(): void {
 
    this.getOwners();

  }

  btnClick=  () => {
    this.router.navigateByUrl('/owners/create');
};

getOwners(){
  this.httpService.getAllOwners()
  .subscribe ((res: any) => {
   this.ownerData = res;
  })

}

deleteOwner(id: number){
  this.httpService.deleteOwners(id)
  .subscribe ((res: any) => {
    alert("Owner deleted");
   this.getOwners();
  })

}

onEdit(id: number){
  this.router.navigateByUrl('/owners/edit');
  this.httpService.getAllOwnerById(id)
  .subscribe ((res: any) => {
   this.ownerData = res;
   console.log(res);
  })
  }
}
