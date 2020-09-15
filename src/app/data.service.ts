import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private HttpClient: HttpClient) {
    console.log('working');
   }
   getData(){
     return this.HttpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
   }
}
