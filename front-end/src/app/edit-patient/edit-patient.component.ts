import { Component, OnInit } from '@angular/core';
import { PatientService } from "../service/patient.service";
import { Patient } from "../models/patient.model";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { PatientCreatedNotifierService } from "../service/patient-created-notifier.service";

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  updatedPatient: Patient;
  patientId: number;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private patientService: PatientService,
    private patientNotifier: PatientCreatedNotifierService) {
  }

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.patientId = value.id;
      this.getPatient(value.id);
    });  }

  getPatient(id: number): void {
    this.patientService.getPatient(id)
      .subscribe(patient => {
        this.updatedPatient = patient;
      });
  }

  updatePatient(patient: Patient): void {
    this.patientService.updatePatient(patient).subscribe(value => {
      this.patientNotifier.subject.next("Patient Updated");
      console.log(value);
      this.location.back();
    });
  }

}
