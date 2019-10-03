import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobPostsComponent } from 'src/app/job-posts/job-posts.component';
import { InterviewsComponent } from 'src/app/interviews/interviews.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ShortlistsComponent } from 'src/app/shortlists/shortlists.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'jobposts', component: JobPostsComponent },
  { path: 'interview', component: InterviewsComponent },
  { path: 'shortlist', component: ShortlistsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
