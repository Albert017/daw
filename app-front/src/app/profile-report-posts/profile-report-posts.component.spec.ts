import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReportPostsComponent } from './profile-report-posts.component';

describe('ProfileReportPostsComponent', () => {
  let component: ProfileReportPostsComponent;
  let fixture: ComponentFixture<ProfileReportPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileReportPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileReportPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
