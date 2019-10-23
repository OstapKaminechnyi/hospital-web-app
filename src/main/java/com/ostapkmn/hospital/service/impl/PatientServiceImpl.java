package com.ostapkmn.hospital.service.impl;

import com.ostapkmn.hospital.model.Patient;
import com.ostapkmn.hospital.repository.PatientRepository;
import com.ostapkmn.hospital.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository repository;

    @Override
    public Patient createPatient(Patient patient) {
        return repository.save(patient);
    }

    @Override
    public Patient updatePatient(Patient patient) {
        return repository.save(patient);
    }

    @Override
    public Patient deletePatient(int id) {
        Patient patient = findById(id);
        if (patient != null) {
            repository.delete(patient);
        }
        return patient;
    }

    @Override
    public Patient findById(int id) {
        return repository.findById(id);
    }

    @Override
    public List<Patient> findAllByFirstNameOrLastName(String firstName, String lastName) {
        return repository.findAllByFirstNameOrLastName(firstName, lastName);
    }

    @Override
    public List<Patient> findAll() {
        return repository.findAll();
    }

}
