import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { SearchNewResponse } from '../../interfaces/news.interface';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
})
export class TopComponent implements OnInit {

  private _topResults     :string[]   = [] //Arreglo que contiene todos las id de las noticias
  private _limit          :number = 50; //Limite de noticias por pagina
  public page             :number = 0; //pagina actual donde nos encontramos (0 es la primera pagina)
  private _topResultsPag  :string[] = [] //Arreglo de id de noticias paginados segun el limite
  private _newsResults    :SearchNewResponse[] = [] //Arreglo de noticias luego de consultar cada una de las id de noticias


  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.searchTop()
  }
  get newResults(){
    return this._newsResults
  }
  get limit(){
    return this._limit
  }
  nextPage=():void =>{
    this.page+=1;
    this.paginateSearch()
  }

  previousPage = ():void =>{
    if(this.page>0){
      this.page-=1
      this.paginateSearch()
    }
  }

  paginateSearch(){
    this._newsResults = []
    this._topResultsPag = this._topResults.slice(this.page * this._limit, this._limit * (this.page+1))
    this._topResultsPag.forEach(item => {

      this.newsService.searchNews(item)
        .subscribe((resp:SearchNewResponse)=>{
          this._newsResults.push(resp)
        })

    });

  }

  searchTop(){
    this.newsService.searchTopNews().
      subscribe((data)=>{
        this._topResults = data
        this.paginateSearch()
      })
  }
}
