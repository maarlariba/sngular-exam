import { Component } from '@angular/core';
import { ResultInfoService } from '../services/result-info.service';

@Component({
  selector: 'app-result-comp',
  templateUrl: './result-comp.component.html',
  styleUrls: ['./result-comp.component.scss']
})
export class ResultCompComponent {
  constructor(private results: ResultInfoService) {}

  result: number = 0;

  ngOnInit(): void {
    this.result = this.results.getResult();
  }
}
