package com.cs2001groupprojectblue27.neoterra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cs2001groupprojectblue27.neoterra.model.Users;
import com.cs2001groupprojectblue27.neoterra.processing.CarbonCalculator;
import com.cs2001groupprojectblue27.neoterra.repository.UsersRepository;

@RestController
@RequestMapping("/")
public class UsersController 

{
	@Autowired
    CarbonCalculator calc;
	
	@Autowired
	UsersRepository repository;
	
    @GetMapping("/users")
    public List<Users> getAll() 
    {

        return repository.findAll();
    }
	
	@PostMapping("/users")
	public Users addUser(@RequestBody Users user) {
		repository.save(calc.Calculate(user.getId(), user.getEmail(), user.getAnswers(), user.getScore()));
		return calc.Calculate(user.getId(), user.getEmail(), user.getAnswers(), user.getScore());
	}
    // Using Postman
//  {
//      "id":null,
//      "ip": "178.123.45.546.808",
//      "email": "random@email.com",
//      "answers": "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18"
//  }
    @GetMapping("/users/{id}")
    public Users getUserById(@PathVariable(value = "id") String Id)
    {
        return repository.findById(Id).orElseThrow(RuntimeException::new);
    }

    @DeleteMapping("/users/{id}")
    void deleteUser(@PathVariable(value = "id") String Id) 
    {
    	repository.deleteById(Id);
    }
}
