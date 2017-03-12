package com.filadeatras.fila_de_atras;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.LinkedList;
import java.util.List;

@Controller
public class MessageController {
	@Autowired
	private MessageRepository repository;
	
	@Autowired
	private UserRepository repositoryUser;
	
	@Autowired
	private UserComponent userComponent;
	
	@PostConstruct
	public void init(){
		
	}
	
	// Metodo que te devuelve una lista con los diferentes usuarios con los que tienes mensajes
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
	
	private static void loadDeletedMessage(MessageRepository repository, Model model, UserComponent userComponent){
		List<Message> eliminados = repository.findBymessageAddresseeAndMessageDeleted(userComponent.getLoggedUser(), true);
		if(eliminados.size()==0){
			model.addAttribute("sinMensajes", true);
		}
		else{
			model.addAttribute("sinMensajes", false);
		}
		//Oculta caja para enviar mensajes
		model.addAttribute("sent-msg", false);
		model.addAttribute("messages", eliminados);
		
		//Muestra el boton para eliminar de BBDD
		model.addAttribute("conversation",false);
	}
	
	
	private static void loadUsernameMessage(MessageRepository repository, Model model, UserComponent userComponent, User user_aux){
		List<Message> messageU1toU2 = repository.findByMessageAddresseeAndMessageSenderAndMessageDeleted(userComponent.getLoggedUser(), user_aux, false);
		
		if(messageU1toU2.size()==0){
			model.addAttribute("sinMensajes", true);
		}
		else{
			model.addAttribute("sinMensajes", false);
		}
		
		//Muestra la caja para enviar mensajes
		model.addAttribute("sent-msg", true);
		model.addAttribute("messages", messageU1toU2);
		model.addAttribute("error",false);
		
		//Muestra el boton que envia a eliminados
		model.addAttribute("conversation",true);
	}
	
	private static void loadMessage(MessageRepository repository, Model model, UserComponent userComponent){
		List<Message> msg = repository.findBymessageAddresseeAndMessageDeleted(userComponent.getLoggedUser(), false);
		List<Message> newMsg = new LinkedList();
		getMessageWithDifferentSender(msg, newMsg);
		
		if(newMsg.size()==0){
			model.addAttribute("sinMensajes", true);
		}
		else{
			model.addAttribute("sinMensajes", false);
		}
		
		model.addAttribute("error", false);
		model.addAttribute("message", newMsg);
	}
	
	
	@RequestMapping("/mensajes")
	public String messageController(Model model){
		loadMessage(repository, model, userComponent);
		
		return "user-mensajes";
	}
	
	@RequestMapping("/mensajes/nuevo")
	public String newMessageController(Model model){
		
		
		return "user-mensajeNuevo";
	}
	
	@RequestMapping("/mensajes/eliminados")
	public String deletedMessageController(Model model){
		loadDeletedMessage(repository, model, userComponent);
		
		return "user-mensajesConversacion";
	}
	
	@RequestMapping("/mensajes/{username}")
	public String messageUserController(Model model, @PathVariable String username){
		User user_aux = repositoryUser.findByusername(username);
		
		if(user_aux != null){
			loadUsernameMessage(repository, model, userComponent, user_aux);
			
			return "user-mensajesConversacion";
		}
		else{
			model.addAttribute("error",true);
			model.addAttribute("name",username);
			
			return "user-mensajes";
			
		}
			
	}
	
	@RequestMapping(value="/mensajes/eliminados/movido/{id}")
	public String sentToDeletedController(Model model, @PathVariable Long id){
		Message msg = repository.findMessageById(id);
		msg.setMessageDeleted(true);
		repository.save(msg);
		
		
		loadUsernameMessage(repository, model, userComponent, msg.getMessageSender());
		
		return "user-mensajesConversacion";
	}
	
	@RequestMapping(value="/mensajes/eliminado/{id}", method = RequestMethod.POST)
	public String DeleteController(Model model, @PathVariable Long id){
		Message msg = repository.findMessageById(id);
		msg.setMessageDeleted(true);
		repository.delete(msg);
		
		loadDeletedMessage(repository, model, userComponent);
		
		return "user-mensajesConversacion";
	}
	
	@RequestMapping(value="/mensajes/enviado" , method = RequestMethod.POST)
	public String sentMessageController(Model model, @RequestParam(value="destinatario", required=true) String dest,
			@RequestParam(value="message-content", required=true) String mensaje){
		
		User uDest = repositoryUser.findByusername(dest);
		
		if(uDest != null){
			Message msg = new Message(mensaje, uDest, userComponent.getLoggedUser());
			repository.save(msg);
			
			loadMessage(repository, model, userComponent);
			
			return "user-mensajes";
		}
		else{
			model.addAttribute("error", true);
			
			return "user-mensajeNuevo";
		}
		
	}
}