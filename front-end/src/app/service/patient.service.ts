import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Patient} from '../models/patient.model';
import {PatientListComponent} from "../patient-list/patient-list.component";


@Injectable()
export class PatientService {
  patient: PatientListComponent;

  constructor(private http: HttpClient) {
  }

  private baseUrl = '/';

  public getPatients() {
    return this.http.get<Patient[]>(this.baseUrl);
  }

  public deletePatient(patient) {
    return this.http.delete(this.baseUrl + '/' + patient.id+ '/');
  }

  public createPatient(patient) {
    return this.http.post<Patient>(this.baseUrl, patient);
  }

  public getPatientСomments(id) {
    return this.http.get<Comment[]>(this.baseUrl + '/' + id + '/comments/');
  }

  updatePatient(patient) {
    return this.http.put(this.baseUrl + '/' + patient.id + '/', patient);
  }

  getPatient(id: number) {
    return this.http.get<Patient>(this.baseUrl + '/' + id + '/');
  }

  searchPatient(term: string): Observable<Patient[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Patient[]>(this.baseUrl + '/search/' + term + '/');
  }
}
