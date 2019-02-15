import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostComponent }  from './blog-post/blog-post.component';
import { BlogPostOtherComponent }  from './blog-post-other/blog-post-other.component';
import { BlogPostNextComponent }  from './blog-post-next/blog-post-next.component';
import { BlogPostAnotherComponent }  from './blog-post-another/blog-post-another.component';

const routes: Routes = [
  { path: '', redirectTo: '/blog1', pathMatch: 'full'},
  { path: 'blog1', component: BlogPostComponent },
  { path: 'blog2', component: BlogPostOtherComponent },
  { path: 'blog3', component: BlogPostNextComponent },
  { path: 'blog4', component: BlogPostAnotherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
