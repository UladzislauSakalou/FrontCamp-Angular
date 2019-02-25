import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { AddEditArticleComponent } from './add-edit-article/add-edit-article.component';
import { CONFIG } from '../core';

const routes: Routes = [
  { path: '', component: ArticleDetailsComponent },
  { path: 'add', component: AddEditArticleComponent, data: { method: CONFIG.baseSettings.addActionName } },
  { path: 'edit', component: AddEditArticleComponent, data: { method: CONFIG.baseSettings.editActionName } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleDetailsRoutingModule { }
