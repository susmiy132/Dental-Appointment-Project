package com.example.demo123.Pojo;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.*;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DentistPojo {
    private Long dentistId;

    private String name;
    private String specialization;
    private String phone;
    private String email;
    private String officeAddress;
}
