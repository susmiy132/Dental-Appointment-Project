package com.example.demo123.Pojo;

import ch.qos.logback.core.status.Status;
import lombok.*;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class AppointmentPojo {

    private Integer appointment_id;
    private Date date;
    private Status status;
}
