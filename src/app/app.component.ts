import {Component} from '@angular/core';
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('NG Angular 3', 'http://angular.io', 3),
      new Article('Clean Code', 'http://cleancode.io', 2),
      new Article('FrontEnd for Dummies', 'http://dummies.io', 1)
    ];

  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {

    // console.log(`Addin article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;

  }

  articlesSorted(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
