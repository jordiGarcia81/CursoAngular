import { Component ,EventEmitter,Input,Output} from '@angular/core';


@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent  {
  @Input() lessons;
  @Output() selected =  new EventEmitter();

  
}
