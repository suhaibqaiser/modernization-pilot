import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostOtherComponent } from './blog-post-other.component';

describe('BlogPostOtherComponent', () => {
  let component: BlogPostOtherComponent;
  let fixture: ComponentFixture<BlogPostOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
