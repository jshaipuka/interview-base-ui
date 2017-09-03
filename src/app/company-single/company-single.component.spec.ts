import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySingleComponent } from './company-single.component';

describe('CompanySingleComponent', () => {
  let component: CompanySingleComponent;
  let fixture: ComponentFixture<CompanySingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
