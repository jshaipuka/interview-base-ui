import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInterviewsComponent } from './manage-interviews.component';

describe('ManageInterviewsComponent', () => {
  let component: ManageInterviewsComponent;
  let fixture: ComponentFixture<ManageInterviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageInterviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
