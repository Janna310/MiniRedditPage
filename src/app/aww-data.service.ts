import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AwwDataService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    const url = 'https://www.reddit.com/r/aww/.json?limit=10';
    return this.httpClient.get(url);
  }
}
