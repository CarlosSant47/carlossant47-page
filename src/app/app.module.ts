import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactameFormComponent } from './components/contactame-form/contactame-form.component';
import { SkillsItemComponent } from './components/ui/skills-item/skills-item.component';
import { ExperienceItemComponent } from './components/ui/experience-item/experience-item.component';
import { EducationItemComponent } from './components/ui/education-item/education-item.component';
import { ProjectItemComponent } from './components/ui/project-item/project-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactameFormComponent,
    SkillsItemComponent,
    ExperienceItemComponent,
    EducationItemComponent,
    ProjectItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
