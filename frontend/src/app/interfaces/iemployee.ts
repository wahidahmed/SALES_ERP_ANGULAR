import { IemployeeSkill } from "./iemployeeSkill";

export interface Iemployee {
  EmployeeId:number;
  FullName:string;
  contactPreference:string;
  Email:string;
  Phone:string;
  Skills:IemployeeSkill[];
}
