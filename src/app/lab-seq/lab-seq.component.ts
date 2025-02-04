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

  constructor(private labSeqService: LabSeqService) {
    this.isFetching = false;
   }

  ngOnInit(): void {
    this.valueComputedSubs = this.labSeqService.valueChanged.subscribe(result => {
      this.valueComputed = result;
      this.isFetching = false;
    });
  }

  compute() {
    this.isFetching = true;
    this.valueComputed = this.labSeqService.computeSequence(this.valueToCompute);
  }

  reset() {
    this.valueComputed = undefined;
    this.valueToCompute = undefined;
  }

  ngOnDestroy(): void {
    this.valueComputedSubs?.unsubscribe();
  }

}
