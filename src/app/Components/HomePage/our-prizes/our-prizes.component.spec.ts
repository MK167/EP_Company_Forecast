import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPrizesComponent } from './our-prizes.component';

describe('OurPrizesComponent', () => {
  let component: OurPrizesComponent;
  let fixture: ComponentFixture<OurPrizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurPrizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPrizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
