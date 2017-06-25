import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePostFollowingComponent } from './profile-post-following.component';

describe('ProfilePostFollowingComponent', () => {
  let component: ProfilePostFollowingComponent;
  let fixture: ComponentFixture<ProfilePostFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePostFollowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePostFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
