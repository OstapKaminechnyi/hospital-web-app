import {Patient} from './patient.model';

export class Comment {
  id: number;
  comment: string;
  dateOfWriting: Date;
  patient: Patient;
}
