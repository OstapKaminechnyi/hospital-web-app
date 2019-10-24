import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Comment} from '../models/comment.model';



@Injectable()
export class CommentService {

  private baseUrl = "http://localhost:8080/api/";

  constructor(private http: HttpClient) {
  }


  public getComments() {
    return this.http.get<Comment[]>(this.baseUrl);
  }

  public createComment(comment,patientId) {
    return this.http.post<Comment>(this.baseUrl + 'patient/' + patientId + "/comments/", comment );
  }
}
