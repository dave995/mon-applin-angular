import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmobileComponent } from './cardmobile.component';

describe('CardmobileComponent', () => {
  let component: CardmobileComponent;
  let fixture: ComponentFixture<CardmobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardmobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
