import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router"
import {Subscription} from "rxjs/Subscription"
import {BlogsService} from "../../../services/blogs.service"

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.scss']
})
export class BlogdetailComponent implements OnInit {
  private _id: number
  public _subscription: Subscription
  public blog: any = null
  private countData: number

  constructor(private activedRoute: ActivatedRoute, private router: Router, private blogsService: BlogsService) {

  }

  ngOnInit() {

    this.blog = {}
    this._subscription = this.activedRoute.params.subscribe(params => {
      this._id = params['id']
    })

    this.blogsService.getBlogById(this._id).subscribe((res: any) => {
      this.blog = res
    }, (err: any) => {
      console.log(err)
    })

    this.UpdateBlogByIdFake(this._id, this.blog)

    this.blogsService.getBlogs().subscribe((res: any) => {
      this.countData = res.length
    })

  }

  NextBlog = () => {
    this._id++
    this.GetBlogByIdRedirect(this._id)
    console.log(this._id)
  }

  PrevBlog = () => {
    this._id--
    this.GetBlogByIdRedirect(this._id)
  }

  GetBlogByIdRedirect = (id: number) => {
    if (id <= this.countData && id >= 0) {
      this.blogsService.getBlogById(id).subscribe((res: any) => {
        this.blog = res
        this.RefreshPage()
      }, (err: any) => {
        console.log(err)
      })
    } else {
      this.RefreshPage()
    }
  }

  RefreshPage = () => {
    this.router.navigate(['/blog-detail/' + this._id])
  }

  UpdateBlogByIdFake = (id: number, data: any) => {
    this.blogsService.updateBlogByIdFake(id, data).subscribe((res: any) => {
      if (res) {
        console.log('Updated Success')
        this.router.navigate(['/blog-detail/' + id])
      }
    })
  }

  ngOnDestroy() {
    this._subscription.unsubscribe()
  }

}
