package com.filadeatras.fila_de_atras.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired 
	private UserRepository repositoryUser;
	
	public User findByusername(String username){
		
		return repositoryUser.findByusername(username);
		
	}
	
	
	public User findById(long id){
		
		return repositoryUser.findById(id);
		
	}
	
	
	public List<User> findAllByreport(boolean report){
		
		return repositoryUser.findAllByreport(report);
		
	}

}
