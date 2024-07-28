package com.example.demo123.Service.Impl;


import com.example.demo123.Entity.Dentist;
import com.example.demo123.Pojo.DentistPojo;
import com.example.demo123.Repository.DentistRepo;
import com.example.demo123.Service.DentistService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor


public class DentistServiceImpl implements DentistService {

    private final DentistRepo dentistRepo;

    @Override
    public List<Dentist> getAllDentist() {
        return dentistRepo.findAll();
    }

    @Override
    public Optional<Dentist> getDentistById(Integer id) {
        return dentistRepo.findById(id);
    }

    @Override
    public Dentist saveDentist(DentistPojo dentistPojo) {
        Dentist dentists = new Dentist();
        dentists.setDentistId(dentists.getDentistId());
        dentists.setName(dentists.getName());
        dentists.setEmail(dentists.getEmail());
        dentists.setOfficeAddress(dentists.getOfficeAddress());
        dentists.setPhone(dentists.getPhone());
        dentists.setSpecialization(dentists.getSpecialization());
        return dentistRepo.save(dentists);
    }

    @Override
    public Dentist updateDentist(Long id, Dentist dentistDetails) {
        Optional<Dentist> optionalDentist = dentistRepo.findById(Math.toIntExact(id));
        if(optionalDentist.isPresent()){
            Dentist dentist = optionalDentist.get();
            dentist.setName(dentist.getName());
            dentist.setPhone(dentist.getPhone());
            dentist.setEmail(dentist.getEmail());
            dentist.setOfficeAddress(dentist.getOfficeAddress());
            return dentistRepo.save(dentist);

        }else{
            return null;
        }
    }

    @Override
    public void deleteDentist(Long id) {
        dentistRepo.deleteById(Math.toIntExact(id));
    }
}
