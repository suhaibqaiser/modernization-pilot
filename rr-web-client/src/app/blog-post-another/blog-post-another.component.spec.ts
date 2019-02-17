import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostAnotherComponent } from './blog-post-another.component';

describe('BlogPostAnotherComponent', () => {
  let component: BlogPostAnotherComponent;
  let fixture: ComponentFixture<BlogPostAnotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostAnotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostAnotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
