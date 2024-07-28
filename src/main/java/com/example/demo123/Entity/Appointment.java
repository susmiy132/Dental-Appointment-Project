package com.example.demo123.Entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "Appointments")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class Appointment {

    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "appointment_seq_gen")
    @SequenceGenerator(name = "appointment_seq_gen", sequenceName = "appointment_seq_gen", allocationSize = 1)

    @Id
    private Integer appointment_id;

    private Date date;
    @Enumerated(EnumType.STRING)
    private Status status;

//    @ManyToOne
//    @JoinColumn(name = "patientId")
//    private Patient patient;
//
//    @ManyToOne
//    @JoinColumn(name = "dentistId")
//    private Dentist dentist;

    public enum Status{
        SCHEDULED, COMPLETED, CANCELED
    }
}
