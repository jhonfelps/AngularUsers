import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModalProductComponent } from './view-modal-product.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ViewModalProductComponent', () => {
  let component: ViewModalProductComponent;
  let fixture: ComponentFixture<ViewModalProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewModalProductComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
