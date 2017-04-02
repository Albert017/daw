


package com.filadeatras.fila_de_atras.restcontrollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.filadeatras.fila_de_atras.services.UserService;
import com.filadeatras.fila_de_atras.UserComponent;
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.models.User.ViewUser;

@RestController
@RequestMapping("/api/user")
public class UserRestController {

	@Autowired
	private UserService serviceUser;
	
	@Autowired UserComponent userComponent;
	
	@JsonView(ViewUser.class)
	@RequestMapping(value = "/{id}", method=RequestMethod.GET)
	public ResponseEntity<User> getUser (@PathVariable long id){
		
		User userFound = serviceUser.findById(id);
		if(userFound==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(userFound,HttpStatus.OK);
	}
	
	@JsonView(ViewUser.class)
	@RequestMapping(value = "/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<User> deleteUser (@PathVariable long id){
		
		User userDeleted = serviceUser.findById(id);
		if(userDeleted==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		serviceUser.delete(userDeleted);
		return new ResponseEntity<>(userDeleted,HttpStatus.OK);
	}
	
	@JsonView(ViewUser.class)
	@RequestMapping(value = "/{id}", method=RequestMethod.PUT)
	public ResponseEntity<User> putUser (@PathVariable long id, @RequestBody User updateUser){
		User userFound = serviceUser.findById(id);
		if(userFound==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if(updateUser.getId()!=id){
			updateUser.setId(id);
		}
		serviceUser.save(updateUser);
		return new ResponseEntity<>(updateUser,HttpStatus.OK);
	}
	
	@JsonView(ViewUser.class)
	@RequestMapping(value = "/", method=RequestMethod.POST)
	public ResponseEntity<User> postUser (@RequestBody User newUser){
		
		serviceUser.save(newUser);
		return new ResponseEntity<>(newUser,HttpStatus.CREATED);
	}
	
	@JsonView(ViewUser.class)
	@RequestMapping(value = "/", method=RequestMethod.GET)
	public ResponseEntity<User> getMyUser (){
		
		if(userComponent.isLoggedUser()){
			User userC = serviceUser.findById(userComponent.getLoggedUser().getId());
			return new ResponseEntity<>(userC,HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		
		
	}
	
	@JsonView(ViewUser.class)
	@RequestMapping(value = "/name/{username}", method=RequestMethod.GET)
	public ResponseEntity<User> getUser (@PathVariable String username){
		
		User userFound = serviceUser.findByusername(username);
		if(userFound==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(userFound,HttpStatus.OK);
	}
}
