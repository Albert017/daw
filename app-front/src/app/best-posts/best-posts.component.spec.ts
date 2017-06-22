import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPostsComponent } from './best-posts.component';

describe('BestPostsComponent', () => {
  let component: BestPostsComponent;
  let fixture: ComponentFixture<BestPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
