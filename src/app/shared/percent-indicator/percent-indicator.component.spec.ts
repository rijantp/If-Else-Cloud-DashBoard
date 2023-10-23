import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentIndicatorComponent } from './percent-indicator.component';

describe('PercentIndicatorComponent', () => {
  let component: PercentIndicatorComponent;
  let fixture: ComponentFixture<PercentIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PercentIndicatorComponent]
    });
    fixture = TestBed.createComponent(PercentIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
