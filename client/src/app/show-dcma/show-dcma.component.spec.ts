import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDcmaComponent } from './show-dcma.component';

describe('ShowDcmaComponent', () => {
  let component: ShowDcmaComponent;
  let fixture: ComponentFixture<ShowDcmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDcmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDcmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
