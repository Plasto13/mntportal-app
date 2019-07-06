import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrscanerPage } from './qrscaner.page';

describe('QrscanerPage', () => {
  let component: QrscanerPage;
  let fixture: ComponentFixture<QrscanerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrscanerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrscanerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
