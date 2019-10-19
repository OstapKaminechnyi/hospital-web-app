package com.ostapkmn.hospital.repository;

import com.ostapkmn.hospital.model.Comment;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface CommentRepository extends Repository<Comment, Integer> {

    Comment save(Comment comment);

    void delete(Comment comment);

    Comment findByIdAndPatient_Id(int id, int patientID);

    List<Comment> findCommentByPatient_Id(int patientID);

    Comment findById(int id);

    List<Comment> findAll();

}
