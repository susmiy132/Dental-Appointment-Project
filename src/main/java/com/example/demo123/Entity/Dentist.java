package com.example.demo123.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.*;

@Entity
@Table(name = "dentists")
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Getter

public class Dentist {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "dentist_seq_gen")
    @SequenceGenerator(name = "dentist_seq_gen", sequenceName = "dentist_seq_gen", allocationSize = 1)

    private Long dentistId;
    private String name;
    private String specialization;
    private String phone;
    private String email;
    private String officeAddress;

//    @OneToOne
//    @MapsId
//    @JoinColumn(name="dentistId")
//    private User user;
}
