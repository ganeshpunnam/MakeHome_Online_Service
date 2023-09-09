import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bill2Component } from './bill2.component';

describe('Bill2Component', () => {
  let component: Bill2Component;
  let fixture: ComponentFixture<Bill2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bill2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bill2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
