import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogPost } from '../blog-post';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-blog-post',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.styl']
})
export class BlogPostComponent implements OnInit {

  public blogPost: BlogPost;
  constructor(
    private apiService: ApiService
  ) { }

  getPost(): void {
    this.apiService.getPost()
    .subscribe(blogPost => {
        this.blogPost = blogPost;
      }
    );
      
  }

  ngOnInit() {
    this.getPost();
  }

}
