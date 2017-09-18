import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInterviewDetailComponent } from './manage-interview-detail.component';

describe('ManageInterviewDetailComponent', () => {
  let component: ManageInterviewDetailComponent;
  let fixture: ComponentFixture<ManageInterviewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageInterviewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageInterviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
