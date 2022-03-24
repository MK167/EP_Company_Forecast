import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BGHeaderComponent } from './bg-header.component';

describe('BGHeaderComponent', () => {
  let component: BGHeaderComponent;
  let fixture: ComponentFixture<BGHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BGHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BGHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
