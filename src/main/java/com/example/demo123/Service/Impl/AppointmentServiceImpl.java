package com.example.demo123.Service.Impl;

import com.example.demo123.Entity.Appointment;
import com.example.demo123.Pojo.AppointmentPojo;
import com.example.demo123.Repository.AppointmentRepo;
import com.example.demo123.Service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor

public class AppointmentServiceImpl implements AppointmentService {

    private final AppointmentRepo appointmentRepo;

    @Override
    public List<Appointment> getAllAppointment() {
        return appointmentRepo.findAll();
    }

    @Override
    public Optional<Appointment> getAppointmentById(Integer id) {
        return appointmentRepo.findById(id);
    }

    @Override
    public Appointment saveAppointment(AppointmentPojo appointmentPojo) {
        Appointment appointment = new Appointment();
        appointment.setAppointment_id(appointment.getAppointment_id());
        appointment.setDate(appointment.getDate());
        appointment.setStatus(appointment.getStatus());
        return appointmentRepo.save(appointment);
    }

    @Override
    public Appointment updateAppointment(Long id, Appointment appointmentDetails) {
        Optional<Appointment> optionalAppointment = appointmentRepo.findById(Math.toIntExact(id));
        if(optionalAppointment.isPresent()){
            Appointment appointment = optionalAppointment.get();
            appointment.setDate(appointment.getDate());
            appointment.setStatus(appointment.getStatus());
            return appointmentRepo.save(appointment);

        }else{
            return null;
        }
    }

    @Override
    public void deleteAppointment(Long id) {
        appointmentRepo.deleteById(Math.toIntExact(id));
    }
}
