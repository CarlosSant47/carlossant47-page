import {Component, Input} from '@angular/core';
import {Experience, Work} from "../../../../models/profile";

@Component({
  selector: 'me-page-experience-item',
  templateUrl: './experience-item.component.html'
})
export class ExperienceItemComponent {
  // @ts-ignore
  @Input("experience") experience: Work;
}
