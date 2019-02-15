import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostOtherComponent } from './blog-post-other/blog-post-other.component';
import { BlogPostNextComponent } from './blog-post-next/blog-post-next.component';
import { BlogPostAnotherComponent } from './blog-post-another/blog-post-another.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    BlogPostOtherComponent,
    BlogPostNextComponent,
    BlogPostAnotherComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: []
})
export class AppModule { }
