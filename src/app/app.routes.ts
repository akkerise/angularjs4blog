import {Routes, RouterModule} from "@angular/router"
import {NotfoundComponent} from "./components/common/notfound/notfound.component"
import {HomeComponent} from "./components/content/home/home.component"
import {ContactComponent} from "./components/content/contact/contact.component"
import {BlogComponent} from "./components/content/blog/blog.component"
import {HelpComponent} from "./components/content/help/help.component"
import {LoginComponent} from "./components/security/login/login.component"
import {RegisterComponent} from "./components/security/register/register.component"
import {NewsComponent} from "./components/content/news/news.component"
import {BlogdetailComponent} from "./components/subcontent/blogdetail/blogdetail.component"
import {AuthorDetailComponent} from "./components/sub2content/author-detail/author-detail.component"

const routing: Routes = [
  {path: "", redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent},
  {
    path: 'blog-detail/:id', component: BlogdetailComponent, children: [
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: ':author', component: AuthorDetailComponent}
  ]
  },
  {path: 'help', component: HelpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'news', component: NewsComponent},
  {path: "**", component: NotfoundComponent}
]

export const appRoutes = RouterModule.forRoot(routing)
