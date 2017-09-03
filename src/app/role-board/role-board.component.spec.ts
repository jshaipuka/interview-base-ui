import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBoardComponent } from './role-board.component';

describe('RoleBoardComponent', () => {
  let component: RoleBoardComponent;
  let fixture: ComponentFixture<RoleBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
