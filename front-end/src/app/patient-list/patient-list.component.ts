import { Component, OnInit } from '@angular/core';

import { Patient } from '../models/patient.model';
import { PatientService } from '../service/patient.service';
import { PatientCreatedNotifierService } from "../service/patient-created-notifier.service";
import { SearchPatientService } from "../service/search-patient.service";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

@Component({
  selector: 'patient-list',
  templateUrl: './patient-list.component.html',
  styles: []
})
export class PatientListComponent implements OnInit {
  patients: Patient[];

  private searchRequests = new Subject<string>();

  constructor(
    private patientService: PatientService,
    private patientNotified: PatientCreatedNotifierService,
    private patientSearchService: SearchPatientService) {
  }

  ngOnInit() {
    this.patientNotified.subject.subscribe(value => {
      this.loadPatient();
    });

    this.patientSearchService.subjectSearch.subscribe(value => {
      this.searchRequests.next(value);

      this.searchRequests.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((request: string) => this.patientService.searchPatient(request)),
      ).subscribe(patients => {
        if (patients.length != 0) {
          this.patients = patients;
        } else {
          this.loadPatient();
        }
      });
    });

    this.loadPatient();
  }

  private loadPatient() {
    this.patientService.getPatients()
      .subscribe(data => {
        this.patients = data;
      });
  }
}
