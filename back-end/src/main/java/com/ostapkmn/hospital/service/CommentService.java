package com.ostapkmn.hospital.service;

import com.ostapkmn.hospital.model.Comment;

import java.util.List;

public interface CommentService {

    Comment createComment(Comment comment);

    Comment deleteComment(int id);

    Comment findByIdAndPatient_Id(int id, int patientID);

    List<Comment> findCommentByPatient_Id(int patientID);

    Comment findById(int id);

    List<Comment> findAll();

}
