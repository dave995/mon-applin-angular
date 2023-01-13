import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcometoComponent } from './welcometo.component';

describe('WelcometoComponent', () => {
  let component: WelcometoComponent;
  let fixture: ComponentFixture<WelcometoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcometoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcometoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
