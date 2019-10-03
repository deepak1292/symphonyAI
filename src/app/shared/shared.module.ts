import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs/Subject';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule {

  search: Subject<any> = new Subject();
  selectedcompany: Subject<any> = new Subject();
  interviewing_candidate: Subject<any> = new Subject();

  open_selected: Subject<any> = new Subject();
  close_selected: Subject<any> = new Subject();

  title_search(title) {

    this.search.next(title);
  }


  shortlist(name) {
    console.log("from shared", name);
    this.selectedcompany.next(name);
  }


  interviewing(name) {
    console.log("from shared", name);
    this.interviewing_candidate.next(name);
  }

  open(value) {

    this.open_selected.next(value);
  }


  close(value) {

    this.close_selected.next(value);
  }
}
