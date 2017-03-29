package com.filadeatras.fila_de_atras.restcontrollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.filadeatras.fila_de_atras.repositories.UserRepository;
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.models.User.ViewUser;

@RestController
@RequestMapping("/api/user")
public class UserRestController {

	@Autowired
	private UserRepository userRepository;
	
	@JsonView(ViewUser.class)
	@RequestMapping(value = "/{id}", method=RequestMethod.GET)
	public ResponseEntity<User> postController (@PathVariable long id){
		
		User userFound = userRepository.getOne(id);
		if(userFound==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(userFound,HttpStatus.OK);
	}
}
