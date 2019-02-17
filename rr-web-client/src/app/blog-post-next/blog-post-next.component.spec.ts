import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostNextComponent } from './blog-post-next.component';

describe('BlogPostNextComponent', () => {
  let component: BlogPostNextComponent;
  let fixture: ComponentFixture<BlogPostNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
