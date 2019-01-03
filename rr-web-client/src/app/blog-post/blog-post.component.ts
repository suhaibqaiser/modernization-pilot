import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogPost } from '../blog-post';

import { makeStateKey, TransferState} from '@angular/platform-browser';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

// make state key in state to store data
const STATE_KEY_BLOGPOST = makeStateKey('blogpostdata');
@Component({
  selector: 'app-blog-post',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.styl']
})
export class BlogPostComponent implements OnInit {
  public blogpostdata: any = {};

  constructor(
    private apiService: ApiService,
    private state: TransferState,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.blogpostdata = this.state.get(STATE_KEY_BLOGPOST, <any>{});

    if(!this.blogpostdata.hasOwnProperty('contentlets')){
      
      this.http.get('http://localhost:7000/blogs')
      .subscribe((data) => {
        this.blogpostdata = data;
        this.state.set(STATE_KEY_BLOGPOST, <any>this.blogpostdata)
      }, (err) => {
        console.log('error getting data', err)
      })
    } else {
      console.log('did not fetch data', this.blogpostdata);
    }
  }

}
