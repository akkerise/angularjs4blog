import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlograndomComponent } from './blograndom.component';

describe('BlograndomComponent', () => {
  let component: BlograndomComponent;
  let fixture: ComponentFixture<BlograndomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlograndomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlograndomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
