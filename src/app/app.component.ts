import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeArticleComponent } from "./liste-article/liste-article.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListeArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp-article';
}
