import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlgorithmsService } from '../services/algorithms.service';
import { ResultInfoService } from '../services/result-info.service';

@Component({
  selector: 'app-number-form',
  templateUrl: './number-form.component.html',
  styleUrls: ['./number-form.component.scss']
})
export class NumberFormComponent {
  resultNum: number = 0;
  constructor(
    private _algorithmSer: AlgorithmsService,
    private results: ResultInfoService,
    private router: Router
  ) {}
  

  number: FormGroup = new FormGroup({
    num: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
    ]),
  });

  serieCalculator() {
    const n = this.number.get('num')!.value;
    this.resultNum =
      (2 *
        this._algorithmSer.primeNumbers(n - 2)! *
        3 *
        this._algorithmSer.trinagular(n - 2)) /
      (7 * this._algorithmSer.fibonnacci(n - 1));
    //console.log(number)
    this.results.setResult(this.resultNum)
    this.router.navigateByUrl('/results');
  }
}
