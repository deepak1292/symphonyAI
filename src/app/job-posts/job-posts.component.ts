import { Component, OnInit } from '@angular/core';
import { JobspostsService } from './jobsposts.service';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-job-posts',
  templateUrl: './job-posts.component.html',
  styleUrls: ['./job-posts.component.scss']
})



export class JobPostsComponent implements OnInit {

  displayedColumns: string[] = ['Company', 'Title', 'Date_posted', 'Status'];
  dataSource: any;





  search_keyword: any;
  joblist: Array<any> = [];
  constructor(private service: JobspostsService,
    private http: HttpClient,
    private shared: SharedModule,
    private toastr: ToastrService
  ) {
    this.shared.search.subscribe(value => {
      this.job_posts(value);
    })

    this.shared.open_selected.subscribe(value => {
      this.job_posts(value);
    })

    this.shared.close_selected.subscribe(value => {
      this.job_posts(value);
    })

  }

  ngOnInit() {
  }


  job_posts(title) {
    this.joblist = [];
    this.search_keyword = title.toLocaleLowerCase();
    this.service.jobposts().subscribe(resp => {
      console.log(resp);

      for (let i = 0; i < resp.length; i++) {

        if (this.search_keyword == resp[i].title) {

          this.joblist.push({ company: resp[i].company, title: resp[i].title, date_posted: resp[i].date_posted, status: resp[i].status })


          console.log("job list", this.joblist);
        }

        else if (title == resp[i].status) {
          this.joblist.push({ company: resp[i].company, title: resp[i].title, date_posted: resp[i].date_posted, status: resp[i].status })

        }




      }
      if (this.joblist.length == 0) {
        this.toastr.warning('No job profile found');
        this.company('')
      }
      this.dataSource = this.joblist;



    })
  }


  company(element) {
    let company_name = element.company

    this.shared.shortlist(company_name)
  }


}


