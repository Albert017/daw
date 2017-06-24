import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeHeaderPageComponent } from './change-header-page.component';

describe('ChangeHeaderPageComponent', () => {
  let component: ChangeHeaderPageComponent;
  let fixture: ComponentFixture<ChangeHeaderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeHeaderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeHeaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
