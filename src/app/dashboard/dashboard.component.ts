import { Component, OnInit } from '@angular/core';
import { ApiService } from "../core/api.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    let resp = this.apiService.getIssuesList().subscribe(data => console.log(data));
  }

}
