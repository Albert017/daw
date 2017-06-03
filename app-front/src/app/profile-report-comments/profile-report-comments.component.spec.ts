import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReportCommentsComponent } from './profile-report-comments.component';

describe('ProfileReportCommentsComponent', () => {
  let component: ProfileReportCommentsComponent;
  let fixture: ComponentFixture<ProfileReportCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileReportCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileReportCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
