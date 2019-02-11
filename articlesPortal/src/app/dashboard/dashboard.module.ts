import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { ArticleComponent } from './article/article.component';
import { FormsModule } from '@angular/forms';
// import { MatSelectModule } from '@angular/material/select';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [DashboardComponent, DashboardHeaderComponent, ArticleComponent],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    FormsModule,
    // MatSelectModule,
    // BrowserAnimationsModule
  ]
})
export class DashboardModule { }
