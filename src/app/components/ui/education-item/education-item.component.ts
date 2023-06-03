import {Component, Input} from '@angular/core';
import {Education} from "../../../../models/profile";

@Component({
  selector: 'me-page-education-item',
  templateUrl: './education-item.component.html'
})
export class EducationItemComponent {
  // @ts-ignore
  @Input() education: Education;
}
