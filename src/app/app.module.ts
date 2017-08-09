import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {appRoutes} from './app.routes';
import {AppComponent} from './app.component';
import {NavComponent} from './components/common/nav/nav.component';
import {FooterComponent} from './components/common/footer/footer.component';
import {SidebarComponent} from './components/common/sidebar/sidebar.component';
import {NotfoundComponent} from './components/common/notfound/notfound.component';
import {HomeComponent} from './components/content/home/home.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ContactComponent} from './components/content/contact/contact.component';
import {BlogComponent} from './components/content/blog/blog.component';
import {HelpComponent} from './components/content/help/help.component';
import {LoginComponent} from './components/security/login/login.component';
import {RegisterComponent} from './components/security/register/register.component';
import {NewsComponent} from './components/content/news/news.component';
import {BlognewsComponent} from './components/subcontent/blognews/blognews.component';
import {BlogsuggestComponent} from './components/subcontent/blogsuggest/blogsuggest.component';
import {BlogreviewComponent} from './components/subcontent/blogreview/blogreview.component';
import {BlograndomComponent} from './components/subcontent/blograndom/blograndom.component';
import {BlogdetailComponent} from './components/subcontent/blogdetail/blogdetail.component';
import {BlogsService} from "./services/blogs.service";
import { AuthorDetailComponent } from './components/sub2content/author-detail/author-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    NotfoundComponent,
    HomeComponent,
    ContactComponent,
    BlogComponent,
    HelpComponent,
    LoginComponent,
    RegisterComponent,
    NewsComponent,
    BlognewsComponent,
    BlogsuggestComponent,
    BlogreviewComponent,
    BlograndomComponent,
    BlogdetailComponent,
    AuthorDetailComponent
  ],
  imports: [
    BrowserModule,
    appRoutes,
    FormsModule,
    HttpModule
  ],
  providers: [BlogsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
