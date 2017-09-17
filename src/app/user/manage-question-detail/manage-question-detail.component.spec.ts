import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageQuestionDetailComponent } from './manage-question-detail.component';

describe('ManageQuestionDetailComponent', () => {
  let component: ManageQuestionDetailComponent;
  let fixture: ComponentFixture<ManageQuestionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageQuestionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageQuestionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
