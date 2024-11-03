import { Component } from '@angular/core';
import {Article} from'../models/article.model';
import { AddArticleComponent } from "../add-article/add-article.component";

@Component({
  selector: 'app-liste-article',
  standalone: true,
  imports: [AddArticleComponent],
  templateUrl: './liste-article.component.html',
  styleUrl: './liste-article.component.css'
})
export class ListeArticleComponent {
  Articles = [
    new Article("Article 1", "photo1","02/11/2024","description1", 0),
  ]
  chercher(searchInput: string) {
   this.Articles=this.Articles.filter(Article => Article.title.includes(searchInput));

  }

  addarticle(newarticle: Article) {
   this.Articles.push(newarticle); 
  }

  plusVote(article: Article) {
    article.plus();
  }

  minusVote(article: Article) {
    article.moin();
  }
  action="";
  changeAction(action: string) {
    this.action = action;
  }
}
