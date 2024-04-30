import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultInfoService {

  constructor() { }

  result : number = 0
  
  setResult(res : number){
    this.result = res ;
  }


  getResult(){
    return this.result
  }
}
