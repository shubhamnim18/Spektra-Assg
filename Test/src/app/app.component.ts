import { Component } from '@angular/core';
import { MobileService } from './mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MobileService]
})
export class AppComponent {
  constructor(private mobile:MobileService){}
  title = 'Test';
}
