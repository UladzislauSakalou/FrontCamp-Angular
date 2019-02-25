import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ArticleDetailsResolverService, ArticleService, Article } from '../../models';
import { CONFIG } from '../../core';

@Component({
  selector: 'add-edit-article',
  templateUrl: './add-edit-article.component.html',
  styleUrls: ['./add-edit-article.component.scss']
})
export class AddEditArticleComponent implements OnInit, OnDestroy {
  sub: any;
  method: string;
  articleForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    urlToImage: ['']
  });

  articleFormErrorMessage = 'Please fill Title and Content fields';

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private articleDetailsResolverService: ArticleDetailsResolverService 
    ) { }

  ngOnInit() {
    this.sub = this.route.data.subscribe(data => {
        this.method = data.method;
        this.fillForm();
      });
  }

  public onSaveClick() {
    if (this.method == CONFIG.baseSettings.addActionName) {
      this.articleService.createLocalArticle(this.articleForm.value)
      .subscribe(data => {
        this.router.navigate(['dashboard']);
      });
    } else {
      let article: Article = {
        _id: this.articleDetailsResolverService.getSelectedArticle()._id,
        title: this.articleForm.value.title,
        content: this.articleForm.value.content,
        urlToImage: this.articleForm.value.urlToImage
      }
      
      this.articleService.updateLocalArticle(article)
      .subscribe(data => {
        this.router.navigate(['dashboard']);
      });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private fillForm() {
    if (this.method == CONFIG.baseSettings.editActionName) {
      let article = this.articleDetailsResolverService.getSelectedArticle();
      this.articleForm.patchValue(article);
    }
  }

}
