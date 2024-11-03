import { Component,EventEmitter,Output,Input } from '@angular/core';
import { Article } from '../models/article.model';
import { ListeArticleComponent } from '../liste-article/liste-article.component';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  @Output() articleAdded = new EventEmitter<Article>();

  addarticle(title : string, photo : string, publicationDate : string, description : string, score : number){
   const newarticle = new Article(title, photo, publicationDate, description, score)
    this.articleAdded.emit(newarticle);
}
}