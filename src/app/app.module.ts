import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { MatTableModule } from '@angular/material/table';

import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobPostsComponent } from './job-posts/job-posts.component';
import { ShortlistsComponent } from './shortlists/shortlists.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { HomeComponent } from './home/home.component';

import { JobspostsService } from './job-posts/jobsposts.service';

@NgModule({
  declarations: [
    AppComponent,
    JobPostsComponent,
    ShortlistsComponent,
    InterviewsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    SharedModule,
    MatTableModule,
    ToastrModule.forRoot()
  ],
  providers: [JobspostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
