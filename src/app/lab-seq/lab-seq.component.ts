import { Component, OnDestroy, OnInit } from '@angular/core';
import { LabSeqService } from './lab-seq.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lab-seq',
  templateUrl: './lab-seq.component.html',
  styleUrls: ['./lab-seq.component.css']
})
export class LabSeqComponent implements OnInit, OnDestroy {

  private valueComputedSubs: Subscription | undefined;

  valueToCompute: any;
  valueComputed: any;
  isFetching: boolean;
  checkParameter: boolean;

  constructor(private labSeqService: LabSeqService) {
    this.isFetching = false;
    this.checkParameter = false;
   }

  ngOnInit(): void {
    this.valueComputedSubs = this.labSeqService.valueChanged.subscribe(result => {
      this.valueComputed = result;
      this.isFetching = false;
    });
  }

  compute() {
    if(!this.valueToCompute || this.valueToCompute < 0)
      this.checkParameter = true;
    else {
      this.isFetching = true;
      this.checkParameter = false;
      this.valueComputed = this.labSeqService.computeSequence(this.valueToCompute);
    }
  }

  reset() {
    this.valueComputed = undefined;
    this.valueToCompute = undefined;
    this.checkParameter = false;
  }

  ngOnDestroy(): void {
    this.valueComputedSubs?.unsubscribe();
  }

}
