package com.ostapkmn.hospital.service.impl;

import com.ostapkmn.hospital.model.Comment;
import com.ostapkmn.hospital.repository.CommentRepository;
import com.ostapkmn.hospital.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository repository;

    @Override
    public Comment createComment(Comment comment) {
        System.out.println(comment.toString());
        return repository.save(comment);
    }

    @Override
    public Comment deleteComment(int id) {
        Comment comment = (Comment) findById(id);
        if (comment != null) {
            repository.delete(comment);
        }
        return comment;
    }

    @Override
    public Comment findById(int id) {
        return repository.findById(id);
    }

    @Override
    public Comment findByIdAndPatient_Id(int id, int patientID) {
        return repository.findByIdAndPatient_Id(id, patientID);
    }

    @Override
    public List<Comment> findCommentByPatient_Id(int patientID) {
        return repository.findCommentByPatient_Id(patientID);
    }

    @Override
    public List<Comment> findAll() {
        return repository.findAll();
    }


}
