package com.cs2001groupprojectblue27.neoterra.repository;

import com.cs2001groupprojectblue27.neoterra.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, String>{

}