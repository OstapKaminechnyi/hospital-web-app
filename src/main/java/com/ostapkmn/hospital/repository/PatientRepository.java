package com.ostapkmn.hospital.repository;

import com.ostapkmn.hospital.model.Patient;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface PatientRepository extends Repository<Patient, Integer> {

    Patient save(Patient patient);

    void delete(Patient patient);

    Patient findById(int id);

    List<Patient> findAllByFirstNameOrLastName(String firstName, String lastName);

    List<Patient> findAll();

}
