import { Component, DefaultIterableDiffer, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse= null;
  courses = null;

  constructor(private coursesService : CoursesService) { }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.courses=this.coursesService.courses;
  }

  selectCourse(course){
    this.selectedCourse=course;
  }

  deleteCourse(courseId){
    console.log('COURSE Deleted',courseId);
  }
  resetSelectedCourse(){
    const emptyCourse = {
      id:null,
      title:'',
      description:'',
      percentComplete:0,
      favorite:false
    };
    this.selectedCourse = emptyCourse;
  }

  cancel(){
    this.resetSelectedCourse();
  }

  saveCourse(){

  }
}
