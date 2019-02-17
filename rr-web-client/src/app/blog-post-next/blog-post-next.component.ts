import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { makeStateKey, TransferState} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

// make state key in state to store data
const STATE_KEY_BLOGPOST = makeStateKey('blogpostdata');

@Component({
  selector: 'app-blog-post-next',
  templateUrl: './blog-post-next.component.html',
  styleUrls: ['./blog-post-next.component.styl']
})
export class BlogPostNextComponent implements OnInit {

  public blogpostdata: any = {};

  constructor(
    private state: TransferState,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.blogpostdata = this.state.get(STATE_KEY_BLOGPOST, <any>{});

    if(!this.blogpostdata.hasOwnProperty('contentlets')){
      
      this.http.get('http://localhost:8000/blogs')
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
