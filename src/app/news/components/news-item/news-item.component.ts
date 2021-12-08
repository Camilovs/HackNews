import { Component, OnInit, Input } from '@angular/core';
import { SearchNewResponse } from '../../interfaces/news.interface';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styles: [
  ]
})
export class NewsItemComponent implements OnInit {

  @Input() item!: SearchNewResponse
  @Input() index: number = 0
  @Input() limit: number = 0
  @Input() page: number = 0

  public dateNew!: string 
  constructor() { }

  ngOnInit(): void {
    this.formateDate()
  }

  openItem(){
    window.open(this.item.url, '_blank')!.focus();
  }

  formateDate(){
    var dateUnix = new Date(this.item.time * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = dateUnix.getFullYear();
    var month = months[dateUnix.getMonth()];
    var date = dateUnix.getDate();
    this.dateNew = date + ' ' + month + ' ' + year;
  }

}
