package com.example.demo123.Pojo;

import lombok.*;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class UserPojo {
    private int user_id;
    private String user_name;
    private String password;
    private String email;
    private String phoneNumber;
    private String role;
}
