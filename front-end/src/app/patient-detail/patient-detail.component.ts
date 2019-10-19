import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PatientService } from "../service/patient.service";
import { Patient } from "../models/patient.model";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommentService } from "../service/comment.service";

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  selectedPatient: Patient;
  patients: Patient[];
  patientId: number;
  createdComment: Comment = new Comment();
  comments: Comment[];
  public age: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private patientService: PatientService,
    private commentService: CommentService) {
  }

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.patientId = value.id;
      this.getPatient(value.id);
    });
  }

  getAge(id: number): void {
    this.patientService.getPatient(id).subscribe(value => {
      var ageDifMs = Date.now() - new Date(value.dateOfBirth).getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      this.age = Math.abs((ageDate.getUTCFullYear() - 1970));
    });
  }

  getPatient(id: number): void {
    this.patientService.getPatient(id)
      .subscribe(patient => {
        this.selectedPatient = patient;
        this.getPatientСomments(id);
        this.getAge(id);
      });
    this.patientService.getPatients().subscribe(patients => {
      this.patients = patients;
    })
  }

  deletePatient(patient: Patient): void {
    this.patientService.deletePatient(patient)
      .subscribe(data => {
        this.patients = this.patients.filter(p => p !== patient);
        this.location.back();
        console.log(data);
      });
  }

  getPatientСomments(id: number): void {
    this.patientService.getPatientСomments(id).subscribe(data => {
      this.comments = data;
    });
  }

  createComment(): void {
    this.commentService.createComment(this.createdComment, this.patientId)
      .subscribe(data => {
        this.getPatientСomments(this.patientId);
        console.log(data);
      });
  }
}
