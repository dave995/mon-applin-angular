import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEndComponent } from './service-end.component';

describe('ServiceEndComponent', () => {
  let component: ServiceEndComponent;
  let fixture: ComponentFixture<ServiceEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
