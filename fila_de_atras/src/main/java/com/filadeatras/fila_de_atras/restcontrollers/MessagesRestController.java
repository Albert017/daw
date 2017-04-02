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
import com.filadeatras.fila_de_atras.UserComponent;
import com.filadeatras.fila_de_atras.models.Message;
import com.filadeatras.fila_de_atras.models.Message.ViewMessage;
import com.filadeatras.fila_de_atras.models.User;
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
	@RequestMapping(value = "/conversaciones", method=RequestMethod.GET)
	public ResponseEntity<List<Message>>getMessages(){
		User userC = serviceUser.findById(userComponent.getLoggedUser().getId());
		List<Message> msgFound = serviceMessage.getMessageWithDifferentSender(userC);;
		if(msgFound==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(msgFound,HttpStatus.OK);
	}
	
	@JsonView(ViewMessage.class)
	@RequestMapping(value = "/conversacion/{username}", method=RequestMethod.GET)
	public ResponseEntity<List<Message>>getMessageByUsername(@PathVariable String username){
		
		User user = serviceUser.findByusername(username);
		if(user==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		List<Message> msgFound = serviceMessage.findConversationByUserIdOrderByIdDesc(userComponent.getLoggedUser().getId(), user.getId());
		if(msgFound==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(msgFound,HttpStatus.OK);
	}
	
	
	@JsonView(ViewMessage.class)
	@RequestMapping(value = "/eliminados", method=RequestMethod.GET)
	public ResponseEntity<List<Message>>getMessageByUsername(){
		
		User userC = serviceUser.findById(userComponent.getLoggedUser().getId());
		List<Message> msgDeleted = serviceMessage.findBymessageAddresseeAndMessageDeletedOrderByIdDesc(userC, true);
		if(msgDeleted==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(msgDeleted,HttpStatus.OK);
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
	@RequestMapping(value = "/{id}", method=RequestMethod.PUT)
	public ResponseEntity<Message> putMessageById(@PathVariable long id, @RequestBody Message updateMessage){
		
		Message msg = serviceMessage.getOne(id);
		if(msg==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if(id != updateMessage.getId()){
			updateMessage.setId(id);
		}
		serviceMessage.save(updateMessage);
		return new ResponseEntity<>(updateMessage,HttpStatus.OK);
	}
	
	@JsonView(ViewMessage.class)
	@RequestMapping(value = "/", method=RequestMethod.POST)
	public ResponseEntity<Message> postMessageById(@RequestBody Message newMessage){
		
		serviceMessage.save(newMessage);
		return new ResponseEntity<>(newMessage,HttpStatus.CREATED);
	}
	
	@JsonView(ViewMessage.class)
	@RequestMapping(value = "/", method=RequestMethod.GET)
	public ResponseEntity<List<Message>> getAllMessage(){
		User userC = serviceUser.findById(userComponent.getLoggedUser().getId());
		List<Message> msg = serviceMessage.findBymessageAddresseeAndMessageDeletedOrderByIdDesc(userC, false);
		if(msg==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(msg,HttpStatus.OK);
	}
}

