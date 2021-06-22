import { Component } from '@angular/core';
import { OwnersModule } from './owners/owners.module';

@Component({
  selector: 'pc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PET CARE - Pet-Clinic-Project';
}
