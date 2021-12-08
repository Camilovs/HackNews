import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { SearchNewResponse } from "../interfaces/news.interface";

@Injectable({
  // Servicio global
  providedIn: 'root' 
})
export class NewsService { 

  // URL de la Api para obtener las mejores historias
  private _urlTopStories  :string     = 'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty'

  //HttpClient utilizado para las consultas Http hacia la api de HackNews
  constructor(private http:HttpClient) {
  
  }

  // Metodo para consultar por las mejores historias y retornar el Objeto Observable
  searchTopNews():Observable<string[]>{
    return this.http.get<string[]>(this._urlTopStories)
  }

   // Metodo para consultar por una historia en particular y retornar el Objeto Observable
  searchNews(id:string):Observable<SearchNewResponse>{
    return this.http.get<SearchNewResponse>(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  }
}