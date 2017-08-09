import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlognewsComponent } from './blognews.component';

describe('BlognewsComponent', () => {
  let component: BlognewsComponent;
  let fixture: ComponentFixture<BlognewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlognewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlognewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
