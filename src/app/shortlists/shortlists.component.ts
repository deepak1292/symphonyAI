import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { JobspostsService } from '../job-posts/jobsposts.service'

@Component({
  selector: 'app-shortlists',
  templateUrl: './shortlists.component.html',
  styleUrls: ['./shortlists.component.scss']
})
export class ShortlistsComponent implements OnInit {

  displayedColumns: string[] = ['Candidate_Name', 'Work_At', 'Experience', 'CTC'];
  dataSource: any;

  shortlisted: Array<any> = [];

  constructor(private shared: SharedModule, private http: HttpClient, private service: JobspostsService) {

    this.shared.selectedcompany.subscribe(value => {
      this.shortlist(value);
    })
  }

  ngOnInit() {
  }

  shortlist(selected_company) {
    this.shortlisted = [];
    this.service.jobposts().subscribe(resp => {

      console.log("after clear", this.shortlisted);
      for (let i = 0; i < resp.length; i++) {
        if (selected_company == resp[i].company) {
          this.shortlisted.push({ name: resp[i].candidate_name, work_at: resp[i].work_at, exp: resp[i].exp, ctc: resp[i].ctc })
        }

      }

      if (this.shortlisted.length == 0) {
        this.shortlisted = [];
        this.interview('')

      }


      console.log("shortlisted array", this.shortlisted);
      this.dataSource = this.shortlisted
    })

  }


  interview(element) {
    let name = element.name

    this.shared.interviewing(name)
  }

}
