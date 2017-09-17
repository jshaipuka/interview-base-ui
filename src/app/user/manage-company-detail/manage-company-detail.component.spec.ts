import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCompanyDetailComponent } from './manage-company-detail.component';

describe('ManageCompanyDetailComponent', () => {
  let component: ManageCompanyDetailComponent;
  let fixture: ComponentFixture<ManageCompanyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCompanyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCompanyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
