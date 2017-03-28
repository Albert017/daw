package com.filadeatras.fila_de_atras.restcontrollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.annotation.JsonView;
import com.filadeatras.fila_de_atras.models.Message;
import com.filadeatras.fila_de_atras.models.Message.ViewMessage;
import com.filadeatras.fila_de_atras.repositories.MessageRepository;

@RestController
@RequestMapping("/api/mensajes")
public class MessagesRestController {
	
	@Autowired
	private MessageRepository msgRepository;
	
	@JsonView(ViewMessage.class)
	@RequestMapping(value = "/{id}", method=RequestMethod.GET)
	public ResponseEntity<Message> msgController (@PathVariable long id){
		
		Message msgFound = msgRepository.getOne(id);
		if(msgFound==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(msgFound,HttpStatus.OK);
	}

}
