import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogreviewComponent } from './blogreview.component';

describe('BlogreviewComponent', () => {
  let component: BlogreviewComponent;
  let fixture: ComponentFixture<BlogreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
