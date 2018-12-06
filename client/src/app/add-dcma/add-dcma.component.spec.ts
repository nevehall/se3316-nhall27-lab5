import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDcmaComponent } from './add-dcma.component';

describe('AddDcmaComponent', () => {
  let component: AddDcmaComponent;
  let fixture: ComponentFixture<AddDcmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDcmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDcmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
