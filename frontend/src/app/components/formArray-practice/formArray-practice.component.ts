import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formArray-practice',
  templateUrl: './formArray-practice.component.html',
  styleUrls: ['./formArray-practice.component.css']
})
export class FormArrayPracticeComponent implements OnInit {


  title = 'FormArray Example in Angular Reactive forms';

  skillsForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]) ,
    });
  }

  get getSkills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }

  addSkills() {
    this.getSkills.push(this.newSkill());
  }

  removeSkill(i:number) {
    this.getSkills.removeAt(i);
  }

  onSubmit() {
    console.log(this.skillsForm.value);
  }

}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
