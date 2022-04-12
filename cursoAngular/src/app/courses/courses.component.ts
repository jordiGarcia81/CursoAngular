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
    this.loadCourses();
  }

  selectCourse(course){
    this.selectedCourse=course;
  }

  loadCourses(){
    this.coursesService.all()
      .subscribe( courses => this.courses = courses);
  }

  deleteCourse(courseId){
    this.coursesService.delete(courseId);
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

  saveCourse(course){
    if(course.id){
      this.coursesService.update(course);
    }else{
      this.coursesService.create(course)
      .subscribe( result => this.loadCourses());
    }
    
  }
}
