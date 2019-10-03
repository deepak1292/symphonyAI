import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  open: any;
  close: any;
  constructor(private shared: SharedModule) { }

  ngOnInit() {
  }

  search_title(title) {
    this.shared.title_search(title);

  }

  open_status(event) {
    // this.open=true;
    this.close = false;
    console.log(event.checked);
    if (event.checked == true) {
      this.shared.open("open")
    }
  }

  closed_status(event) {
    // this.close=true;
    this.open = false;
    console.log(event.checked);
    if (event.checked == true) {
      this.shared.close("closed")
    }
  }

}
