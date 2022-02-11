import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMasterproductComponent } from './add-edit-masterproduct.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AddEditMasterproductComponent', () => {
  let component: AddEditMasterproductComponent;
  let fixture: ComponentFixture<AddEditMasterproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMasterproductComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMasterproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
