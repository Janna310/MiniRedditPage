import { Component, OnInit } from '@angular/core';
import { AwwDataService } from '../aww-data.service';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css'],
})
export class RedditComponent implements OnInit {
  responseData: any;

  constructor(private awwDataService: AwwDataService) {}

  ngOnInit(): void {
    this.awwDataService.getData().subscribe((response) => {
      this.responseData = response;
    });
  }
}
