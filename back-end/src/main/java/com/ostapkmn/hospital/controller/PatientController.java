package com.ostapkmn.hospital.controller;


import com.ostapkmn.hospital.model.Patient;
import com.ostapkmn.hospital.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/patient/"})
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping
    public Patient createPatient(@RequestBody Patient patient) {
        return patientService.createPatient(patient);
    }

    @PutMapping(path = {"/{id}/"})
    public Patient updatePatient(@PathVariable("id") int id, @RequestBody Patient patient) {
        patient.setId(id);
        return patientService.updatePatient(patient);
    }

    @DeleteMapping(path = {"/{id}/"})
    public Patient deletePatient(@PathVariable("id") int id) {
        return patientService.deletePatient(id);
    }

    @GetMapping(path = {"/{id}/"})
    public Patient findById(@PathVariable("id") int id) {
        return patientService.findById(id);
    }

    @GetMapping(path = {"/search/{name}/"})
    public List<Patient> findAllByFirstNameOrLastName(@PathVariable("name") String request) {
        return patientService.findAllByFirstNameOrLastName(request, request);
    }

    @GetMapping
    public List<Patient> findAll() {
        return patientService.findAll();
    }
}