import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article, ArticleDetailsResolverService, Source, ArticleService } from '../../models';
import { CONFIG } from '../../core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Output() articleDeleted: EventEmitter<any> = new EventEmitter();
  public selectedSource: Source;

  constructor(
    private articleService: ArticleService,
    private articleDetailsResolverService: ArticleDetailsResolverService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.selectedSource = this.articleDetailsResolverService.getSelectedSource();
  }

  public localSourceSelected(): boolean {
    if (!this.selectedSource) {
      return false;
    }

    return this.selectedSource.id == CONFIG.localSourceSettings.localSourceId;
  }

  public onReadMoreClick() {
    this.articleDetailsResolverService.setSelectedArticle(this.article);
    this.router.navigate(['article-details']);
  }

  public onDeleteButtonClick() {
    this.articleService.deleteLocalArticle(this.article)
      .subscribe(data => {
        this.articleDeleted.emit(null);
      });
  }

  public onEditButtonClick() {
    this.articleDetailsResolverService.setSelectedArticle(this.article);
    this.router.navigate(['article-details/edit']);
  }
}
