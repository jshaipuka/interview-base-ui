import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBoardComponent } from './company-board.component';

describe('CompanyBoardComponent', () => {
  let component: CompanyBoardComponent;
  let fixture: ComponentFixture<CompanyBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
