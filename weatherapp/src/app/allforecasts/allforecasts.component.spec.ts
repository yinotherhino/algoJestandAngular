import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllforecastsComponent } from './allforecasts.component';

describe('AllforecastsComponent', () => {
  let component: AllforecastsComponent;
  let fixture: ComponentFixture<AllforecastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllforecastsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllforecastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
