import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabSeqComponent } from './lab-seq.component';

describe('LabSeqComponent', () => {
  let component: LabSeqComponent;
  let fixture: ComponentFixture<LabSeqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabSeqComponent]
    });
    fixture = TestBed.createComponent(LabSeqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
