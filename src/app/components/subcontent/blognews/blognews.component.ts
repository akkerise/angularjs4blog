import {Component, OnInit} from '@angular/core';
import {BlogsService} from "../../../services/blogs.service"
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-blognews',
  templateUrl: './blognews.component.html',
  styleUrls: ['./blognews.component.scss']
})
export class BlognewsComponent implements OnInit {
  public blogs: any[]
  public nineBlog: any[]
  private totalPage: number
  private perPage: number = 9
  public page: any[]
  private blog

  constructor(private blogsService: BlogsService, private router: Router, private activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {

    this.blog = {}
    this.blogsService.getBlogs().subscribe((res: any[]) => {
      this.blogs = res
      this.nineBlog = this.blogs.slice(0, this.perPage)
      this.totalPage = Math.ceil(this.blogs.length / this.perPage)
      let arr = []
      for (let i = 1; i <= this.totalPage; i++) {
        arr.push(i)
      }
      this.page = arr
    })

  }


  UpdateBlogByIdFake = (id: number) => {

    this.blogsService.getBlogById(id).subscribe((res: any) => {
      this.blog = res
    })

    this.blogsService.updateBlogByIdFake(id, this.blog).subscribe((res: any) => {
      if (res) {
        console.log('Updated Success')
        this.router.navigate(['/blog-detail/' + id])
      }
    })

  }

  getPagePerNumber = (p: number) => {
    let blogPerPage = this.blogs.slice((p - 1) * this.perPage, p * this.perPage)
    this.nineBlog = blogPerPage
  }

  SortObjectByTime = (list: any[]) => {

    let count = list.length;
    for (let i = 0; i < count - 1; i++) {
      for (let j = i + 1; j < count; j++) {
        if (list[i].created_time < list[j].created_time) {
          let temp = list[i];
          list[i] = list[j];
          list[j] = temp;
        }
      }
      return list;
    }

  }
}
