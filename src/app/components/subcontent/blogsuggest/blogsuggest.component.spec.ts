import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsuggestComponent } from './blogsuggest.component';

describe('BlogsuggestComponent', () => {
  let component: BlogsuggestComponent;
  let fixture: ComponentFixture<BlogsuggestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsuggestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
