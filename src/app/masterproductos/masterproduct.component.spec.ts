import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterProductosComponent } from './masterproduct.component';

describe('MasterProductosComponent', () => {
  let component: MasterProductosComponent;
  let fixture: ComponentFixture<MasterProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
