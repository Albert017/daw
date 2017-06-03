import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReportUsersComponent } from './profile-report-users.component';

describe('ProfileReportUsersComponent', () => {
  let component: ProfileReportUsersComponent;
  let fixture: ComponentFixture<ProfileReportUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileReportUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileReportUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
