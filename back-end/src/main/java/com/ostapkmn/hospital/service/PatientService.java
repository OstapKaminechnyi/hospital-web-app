package com.ostapkmn.hospital.service;

import com.ostapkmn.hospital.model.Patient;

import java.util.List;

public interface PatientService {

    Patient createPatient(Patient patient);

    Patient deletePatient(int id);

    Patient updatePatient(Patient patient);

    Patient findById(int id);

    List<Patient> findAllByFirstNameOrLastName(String firstName, String lastName);

    List<Patient> findAll();


}
