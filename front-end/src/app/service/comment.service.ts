import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Comment} from '../models/comment.model';



@Injectable()
export class CommentService {

  constructor(private http: HttpClient) {
  }


  public getComments() {
    return this.http.get<Comment[]>('/');
  }

  public createComment(comment,patientId) {
    return this.http.post<Comment>("/" + 'patient/' + patientId + "/comments/", comment );
  }
}
