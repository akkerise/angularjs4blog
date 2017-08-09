import {Component, OnInit, Directive, ViewContainerRef} from '@angular/core';
import {BlognewsComponent} from "../../subcontent/blognews/blognews.component"
import {BlogsuggestComponent} from "../../subcontent/blogsuggest/blogsuggest.component"
import {BlogreviewComponent} from "../../subcontent/blogreview/blogreview.component"
import {BlograndomComponent} from "../../subcontent/blograndom/blograndom.component"

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
