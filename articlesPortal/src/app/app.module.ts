import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleService } from './models';
import { SourceService } from './models';
import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule }          from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // MatButtonModule, 
    // MatCheckboxModule,
    // MaterialModule,
    FormsModule,
    // MatCommonModule,
    BrowserModule,
    // ReactiveFormsModule,
    AppRoutingModule,
    // MatSelectModule,
    // BrowserAnimationsModule
  ],
  providers: [ArticleService, SourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
