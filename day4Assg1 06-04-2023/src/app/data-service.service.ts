import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  private students=0;
  private males=0;
  private females=0;

  setData(student:number,males:number,females:number): void {
    this.students = student;
    this.males = males;
    this.females = females;
  }

  getStudent(): number{
    return this.students;
  }
  getMales(): number{
    return this.males;
  }
  getFemales(): number{
    return this.females;
  }
}
