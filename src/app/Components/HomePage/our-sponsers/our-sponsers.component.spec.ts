import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSponsersComponent } from './our-sponsers.component';

describe('OurSponsersComponent', () => {
  let component: OurSponsersComponent;
  let fixture: ComponentFixture<OurSponsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurSponsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSponsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
