package com.filadeatras.fila_de_atras.restcontrollers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.annotation.JsonView;
import com.filadeatras.fila_de_atras.UserComponent;
import com.filadeatras.fila_de_atras.models.Message;
import com.filadeatras.fila_de_atras.models.Message.ViewMessage;
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.repositories.MessageRepository;
import com.filadeatras.fila_de_atras.services.MessageService;
import com.filadeatras.fila_de_atras.services.UserService;
import java.util.List;

@RestController
@RequestMapping("/api/mensajes")
public class MessagesRestController {
	
	@Autowired
	private MessageService serviceMessage;
	
	@Autowired
	private UserService serviceUser;
	
	@Autowired
	private UserComponent userComponent;
	
	@JsonView(ViewMessage.class)
	@RequestMapping(value = "/{id}", method=RequestMethod.GET)
	public ResponseEntity<Message>getMessageById(@PathVariable long id){
		
		Message msgFound = serviceMessage.getOne(id);
		if(msgFound==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(msgFound,HttpStatus.OK);
	}



	@JsonView(ViewMessage.class)
	@RequestMapping(value = "/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Message> deleteMessageById(@PathVariable long id){
		
		Message msgDeleted = serviceMessage.getOne(id);
		if(msgDeleted==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		serviceMessage.delete(msgDeleted);
		return new ResponseEntity<>(msgDeleted,HttpStatus.OK);
	}
	
	
	@JsonView(ViewMessage.class)
	@RequestMapping(value = "/a/{username}", method=RequestMethod.GET)
	public ResponseEntity<Collection<Message>> getMessagesByUsername(@PathVariable String username){
		System.out.println("no peto aun");
		User user = serviceUser.findByusername(username);
		if(user==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		System.out.println("no peto aun3");
		List<Message> messageConver = serviceMessage.findConversationByUserIdOrderByIdDesc(userComponent.getLoggedUser().getId(), user.getId());
		return new ResponseEntity<>(messageConver,HttpStatus.OK);
	}

	/*
	@JsonView(ViewMessage.class)
	@RequestMapping(value = "/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Message> delete2MessageById(@PathVariable long id){
		
		Message msgDeleted = serviceMessage.getOne(id);
		if(msgDeleted==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		serviceMessage.delete(msgDeleted);
		return new ResponseEntity<>(msgDeleted,HttpStatus.OK);
	}*/
}

