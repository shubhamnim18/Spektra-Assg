import { Component } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {  
  countries:string[]=['India','USA','Australia','Japan'];
  selectedCountry:string='';

  onSelect(){
    console.log(this.selectedCountry);
  }
}

