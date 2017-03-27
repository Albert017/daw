package com.filadeatras.fila_de_atras.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.filadeatras.fila_de_atras.models.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	//Como en teoría no se puede repetir nombre de usuario solamente un usuario tendría ese nombre
	User findByusername(String username);
	User findById(long id);
	
	List<User> findAllByreport(boolean report);
	
	//List<User> finduserFollowersByusername(String username);
	//List<User> finduserFollowingByusername(String username);

}
