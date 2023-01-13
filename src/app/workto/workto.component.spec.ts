import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorktoComponent } from './workto.component';

describe('WorktoComponent', () => {
  let component: WorktoComponent;
  let fixture: ComponentFixture<WorktoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorktoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorktoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
