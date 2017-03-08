package com.filadeatras.fila_de_atras;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{
	
	//Como en teoría no se puede repetir nombre de usuario solamente un usuario tendría ese nombre
	User findByusername(String username);
	
	//List<User> finduserFollowersByusername(String username);
	//List<User> finduserFollowingByusername(String username);

}
