import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title='Hello Workshop';
  themeColor='blue';
  currentLesson = null;
  courseLessons = null;

  constructor(private lessonsServices : LessonsService) { }

  ngOnInit(): void {
    this.courseLessons = this.lessonsServices.all();
  }

  updateColor(){
    
    this.themeColor='red';
  }

  selectLesson(lesson){
    this.currentLesson = lesson;

  }
}
