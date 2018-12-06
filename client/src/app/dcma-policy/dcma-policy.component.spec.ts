import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcmaPolicyComponent } from './dcma-policy.component';

describe('DcmaPolicyComponent', () => {
  let component: DcmaPolicyComponent;
  let fixture: ComponentFixture<DcmaPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcmaPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcmaPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
