import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallCardComponent } from './tall-card.component';

describe('TallCardComponent', () => {
  let component: TallCardComponent;
  let fixture: ComponentFixture<TallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
