import {Article} from './article.model';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  constructor() {
    this.article = new Article('Hola Mundo' , 'https://www.google.com', 10);
  }


  ngOnInit(): void {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;

  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }


}
