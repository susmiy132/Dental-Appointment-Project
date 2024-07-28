package com.example.demo123.Service.Impl;

import com.example.demo123.Entity.User;
import com.example.demo123.Pojo.UserPojo;
import com.example.demo123.Repository.UserRepo;
import com.example.demo123.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor

public class UserServiceImpl implements UserService {
    private final UserRepo userRepo;

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public Optional<User> getUserById(Integer id) {
        return userRepo.findById(id);
    }


    @Override
    public User saveUser(UserPojo user) {
        User users = new User();
        users.setUser_name(user.getUser_name());
        users.setPassword(user.getPassword());
        users.setRole(user.getRole());
        users.setEmail(user.getEmail());
        users.setPhoneNumber(user.getPhoneNumber());
        return userRepo.save(users);
    }

    @Override
    public void deleteUser(Long id) {
        userRepo.deleteById(Math.toIntExact(id));

    }

    @Override
    public User updateUser(Long id, User userDetails) {
        Optional<User> optionalUser = userRepo.findById(Math.toIntExact(id));
        if(optionalUser.isPresent()){
            User user = optionalUser.get();
            user.setUser_name(user.getUser_name());
            user.setPhoneNumber(user.getPhoneNumber());
            user.setPassword(user.getPassword());
            return userRepo.save(user);

        }else{
            return null;
        }
    }
}
