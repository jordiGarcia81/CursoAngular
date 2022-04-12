import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private model = 'courses';
  private courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript',
      description: 'Learn JavaScript',
      percentComplete: 56,
      favorite: true
    }
  ];

  constructor(private http: HttpClient) {}

  all(){
    return this.http.get(this.getUrl());
  }

  find(courseId){
    
  }

  create(course){
    return this.http.post(this.getUrl(), course);
  }

  update(course){
    
  }

  delete(courseId){

  }

  private getUrl(){
    return `${BASE_URL}${this.model}`;
  }
}
