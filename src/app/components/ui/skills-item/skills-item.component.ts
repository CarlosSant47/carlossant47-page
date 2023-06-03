import {Component, Input} from '@angular/core';
import {Skill} from "../../../../models/profile";

@Component({
  selector: 'me-page-skills-item',
  templateUrl: './skills-item.component.html'
})
export class SkillsItemComponent {

  // @ts-ignore
  @Input('skill') skill: Skill;


}
