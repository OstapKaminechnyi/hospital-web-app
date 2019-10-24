package com.ostapkmn.hospital.controller;

import com.ostapkmn.hospital.model.Comment;
import com.ostapkmn.hospital.model.Patient;
import com.ostapkmn.hospital.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping({"patient/{patientId}/comments/"})
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping
    public Comment createComment(@RequestBody Comment comment, @PathVariable("patientId") String patientId) {
        comment.setPatient(new Patient(patientId));
        comment.setDateOfWriting(new java.sql.Date(new Date().getTime()));
        return commentService.createComment(comment);
    }

    @DeleteMapping(path = {"/{id}/"})
    public Comment deleteComment(@PathVariable("id") int id) {
        return commentService.deleteComment(id);
    }

    @GetMapping
    public List<Comment> findByPatientId(@PathVariable("patientId") int patientId) {
        return commentService.findCommentByPatient_Id(patientId);
    }

    @GetMapping(path = {"/{id}/"})
    public Comment findByCommentId(@PathVariable("id") int id, @PathVariable("patientId") int patientId) {
        return commentService.findByIdAndPatient_Id(id, patientId);
    }


    @GetMapping(path = {"/all/"})
    public List<Comment> findAll() {
        return commentService.findAll();
    }
}