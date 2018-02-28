import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http"
import {Observable} from "rxjs/Observable"
import 'rxjs/add/operator/map'


@Injectable()
export class BlogsService {
  private apiBlogs = "https://5982e3db34e4a300116fea61.mockapi.io/api/blogs/"
  private typeIMG: any[] = ['sports', 'animals', 'business', 'cats', 'city', 'food', 'nightlife', 'fashion', 'people', 'nature', 'technics', 'transport']
  private imgLoremPixelURL: string = "http://lorempixel.com/500/500/"

  constructor(private http: Http) {
  }

  getBlogs = (): Observable<any[]> => {
    return this.http.get(this.apiBlogs).map((res: Response) => res.json())
  }

  getBlogById = (id: number): Observable<any> => {
    return this.http.get(this.apiBlogs + id).map((res: Response) => res.json())
  }

  updateBlogByIdFake = (id: number, data: any): Observable<any> => {
    data.image_url = this.imgLoremPixelURL + this.typeIMG[Math.floor(Math.random() * this.typeIMG.length)]
    data.updated_at = this.ConvertStringToFormatTime()
    return this.http.put(this.apiBlogs + id, data).map((res: Response) => res.json())
  }

  UpdateBlogById = (id: number, data: any): Observable<any> => {
    return this.http.put(this.apiBlogs + id, data).map((res: Response) => res.json())
  }

  private ConvertStringToFormatTime = () => {
    let d = new Date()
    let n = d.toString()
    return n
  }

}
