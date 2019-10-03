import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { JobspostsService } from '../job-posts/jobsposts.service'

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements OnInit {
  displayedColumns: string[] = ['Interview', 'Interviewer', 'Date', 'Result'];
  dataSource: any;

  interview_table: Array<any> = [];

  constructor(private shared: SharedModule, private http: HttpClient, private service: JobspostsService) {

    this.shared.interviewing_candidate.subscribe(value => {
      this.interviewing(value);
    })
  }

  ngOnInit() {
  }

  interviewing(selected_candidate) {



    this.service.jobposts().subscribe(resp => {
      this.interview_table = [];
      console.log("after clear", this.interview_table);

      for (let i = 0; i < resp.length; i++) {
        if (selected_candidate == resp[i].candidate_name) {
          this.interview_table.push({ interview: resp[i].interview, interviewer: resp[i].interviewer, date: resp[i].date_interviews, result: resp[i].result })
        }

      }
      if (this.interview_table.length == 0) {
        this.interview_table = [];

      }

      console.log("shortlisted array", this.interview_table);
      this.dataSource = this.interview_table
    })

  }

}
