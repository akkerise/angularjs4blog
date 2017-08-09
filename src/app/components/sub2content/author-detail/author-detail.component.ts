import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from "@angular/router"
import {Subscription} from "rxjs/Subscription"
import {BlogsService} from "../../../services/blogs.service"

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent implements OnInit, OnDestroy {
  public _id: number
  private _subscription: Subscription
  public blog: any

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private blogsService: BlogsService) {

  }

  ngOnInit() {

    this.blog = {}

    this._subscription = this.activatedRoute.parent.params.subscribe((param: any) => {
      this._id = param['id']
      this.blogsService.getBlogById(this._id).subscribe((blog: any) => {
        this.blog = blog
      })
    })

  }

  UpdateAuthor = (data: any) => {
    this.blogsService.UpdateBlogById(this._id, data).subscribe((res: any) => {
      if (res) {
        alert('Update Author Success')
        this.router.navigate(['/blog-detail/' + this._id])
      }
    })
  }

  ngOnDestroy() {
    this._subscription.unsubscribe()
  }
}
