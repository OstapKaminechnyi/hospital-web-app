import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { PatientCreatedNotifierService } from "../service/patient-created-notifier.service";
import { Patient } from '../models/patient.model';
import { PatientService } from "../service/patient.service";

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient: Patient = new Patient();

  constructor(private location: Location,
    private patientService: PatientService, private patientNotifier: PatientCreatedNotifierService) {
  }

  ngOnInit() {
  }

  createPatient(): void {
    this.patientService.createPatient(this.patient)
      .subscribe(data => {
        this.patientNotifier.subject.next("New Patient")
        console.log(data);
        this.location.back();
      },
        error => console.log(error));
  }

}
