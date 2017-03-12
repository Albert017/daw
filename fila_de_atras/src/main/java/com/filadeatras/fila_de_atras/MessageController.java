package com.filadeatras.fila_de_atras;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.LinkedList;
import java.util.List;

@Controller
public class MessageController {
	@Autowired
	private MessageRepository repository;
	
	@Autowired
	private UserRepository repositoryUser;
	
	@Autowired
	UserComponent userComponent;
	
	@PostConstruct
	public void init(){
		
	}
	private static void getMessageWithDifferentSender(List<Message> lista, List<Message> result){
		if(lista != null){
			for(Message msg : lista){
				boolean found=false;
				for(int i=0; i<result.size()&&!found;i++){
					found = msg.getMessageSender().getUsername().equals(result.get(i).getMessageSender().getUsername());
				}
				if(!found){
					result.add(msg);
				}
				
			}
		}
		
	}
	@RequestMapping("/mensajes")
	public String messageController(Model model){
		List<Message> msg = repository.findBymessageAddresseeAndMessageDeleted(userComponent.getLoggedUser(), false);
		List<Message> newMsg = new LinkedList();
		getMessageWithDifferentSender(msg, newMsg);
		model.addAttribute("error", false);
		model.addAttribute("message", newMsg);
		
		return "user-mensajes";
	}
	
	@RequestMapping("/mensajes/nuevo")
	public String newMessageController(Model model){
		
		return "user-mensajeNuevo";
	}
	
	@RequestMapping("/mensajes/eliminados")
	public String deletedMessageController(Model model){
		List<Message> eliminados = repository.findBymessageAddresseeAndMessageDeleted(userComponent.getLoggedUser(), true);
		
		//Oculta caja para enviar mensajes
		model.addAttribute("sent-msg", false);
		model.addAttribute("messages", eliminados);
		
		//Muestra el boton para eliminar de BBDD
		model.addAttribute("conversation",false);
		
		return "user-mensajesConversacion";
	}
	
	@RequestMapping("/mensajes/{username}")
	public String messageUserController(Model model, @PathVariable String username){
		User user_aux = repositoryUser.findByusername(username);
		
		if(user_aux != null){
			List<Message> messageU1toU2 = repository.findByMessageAddresseeAndMessageSender(userComponent.getLoggedUser(), user_aux);
			
			//Muestra la caja para enviar mensajes
			model.addAttribute("sent-msg", true);
			model.addAttribute("messages", messageU1toU2);
			model.addAttribute("error",false);
			
			//Muestra el boton que envia a eliminados
			model.addAttribute("conversation",true);
			
			return "user-mensajesConversacion";
		}
		else{
			model.addAttribute("error",true);
			model.addAttribute("name",username);
			
			return "user-mensajes";
			
		}
			
	}
	
	@RequestMapping(value="/sent-to-deleted/{id}", method = RequestMethod.POST)
	public String sentToDeletedController(Model model, @PathVariable Long id){
		Message msg = repository.findMessageById(id);
		msg.setMessageDeleted(true);
		repository.save(msg);
		
		
		return "user-mensajes";
	}
	
	@RequestMapping(value="/delete/{{id}}",method = RequestMethod.POST)
	public String DeleteController(Model model, @PathVariable Long id){
		Message msg = repository.findMessageById(id);
		msg.setMessageDeleted(true);
		repository.delete(msg);
		
		return "user-mensajes";
	}
}