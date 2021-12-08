import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { SearchNewResponse } from "../interfaces/news.interface";

@Injectable({
  // Global Service
  providedIn: 'root' 
})
export class NewsService { 
  
  private _urlTopStories  :string     = 'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty'
  private _urlStory       :string     = 'https://hacker-news.firebaseio.com/v0/item/29480392.json?print=pretty'
  

  //HttpClient utilizado para las consultas Http hacia la api de HackNews
  constructor(private http:HttpClient) {
  
  }

  searchTopNews():Observable<string[]>{
    return this.http.get<string[]>(this._urlTopStories)
  }
  searchNews(id:string):Observable<SearchNewResponse>{
    return this.http.get<SearchNewResponse>(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  }
}