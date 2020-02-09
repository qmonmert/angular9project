import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloContainer } from './hello.container';

describe('HelloContainer', () => {
  let component: HelloContainer;
  let fixture: ComponentFixture<HelloContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
