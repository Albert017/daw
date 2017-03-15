package com.filadeatras.fila_de_atras;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

@Controller
public class MessageController extends NavbarController{
	@Autowired
	private MessageRepository repository;
	
	@Autowired
	private  UserRepository repositoryUser;
	
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
	
	private static void loadDeletedMessage(MessageRepository repository, Model model, User userC){
		
		List<Message> eliminados = repository.findBymessageAddresseeAndMessageDeletedOrderByIdDesc(userC, true);
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
	
	private static void readMessages(List<Message> messageU1toU2, User user, MessageRepository repository){
		//Read Messages
		
		for (Message message : messageU1toU2) {
			if(user.getId()==message.getMessageAddressee().getId()){
				message.setMessageNew(false);
				repository.save(message);
						
			}
		}
	}
	
	
	private static void loadUsernameMessage(MessageRepository repository, Model model, User userC, User user_aux){
		List<Message> messageU1toU2 = repository.findByMessageAddresseeAndMessageSenderAndMessageDeletedOrderByIdDesc(userC, user_aux, false);
		//List<Message> messageU1toU2 = repository.findConversationById(userC.getId());
		
		readMessages(messageU1toU2, userC, repository);

		if(messageU1toU2.size()==0){
			model.addAttribute("sinMensajes", true);
		}
		else{
			model.addAttribute("sinMensajes", false);
		}
		
		//Muestra la caja para enviar mensajes
		model.addAttribute("send-msg", user_aux);
		
		//Muestra el boton que envia a eliminados
		model.addAttribute("conversation",true);
		model.addAttribute("messages", messageU1toU2);
		model.addAttribute("error",false);
		
		
	}
	
	private static void loadMessage(MessageRepository repository, Model model, User userC){
		List<Message> msg = repository.findBymessageAddresseeAndMessageDeletedOrderByIdDesc(userC, false);
		List<Message> newMsg = new LinkedList<Message>();
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
		User conectedUser = repositoryUser.findOne(userComponent.getLoggedUser().getId());
		loadMessage(repository, model, conectedUser);
		loadNavbar(model);
		
		return "user-mensajes";
	}
	
	@RequestMapping("/mensajes/nuevo")
	public String newMessageController(Model model){
		loadNavbar(model);
		
		return "user-mensajeNuevo";
	}
	
	@RequestMapping("/mensajes/eliminados")
	public String deletedMessageController(Model model){
		User conectedUser = repositoryUser.findOne(userComponent.getLoggedUser().getId());
		loadDeletedMessage(repository, model, conectedUser);
		loadNavbar(model);
		
		return "user-mensajesConversacion";
	}
	
	@RequestMapping("/mensajes/{username}")
	public String messageUserController(Model model, @PathVariable String username){
		loadNavbar(model);
		
		User user_aux = repositoryUser.findByusername(username);
		if(user_aux != null){
			User conectedUser = repositoryUser.findOne(userComponent.getLoggedUser().getId());
			loadUsernameMessage(repository, model, conectedUser, user_aux);
			
			model.addAttribute("send-msg", user_aux);
			loadNavbar(model);
			
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
		loadNavbar(model);
		Message msg = repository.findMessageById(id);
		msg.setMessageDeleted(true);
		repository.save(msg);
		User conectedUser = repositoryUser.findOne(userComponent.getLoggedUser().getId());
		loadUsernameMessage(repository, model, conectedUser, msg.getMessageSender());
		
		return "user-mensajesConversacion";
	}
	
	@RequestMapping(value="/mensajes/eliminado/{id}", method = RequestMethod.POST)
	public String DeleteController(Model model, @PathVariable Long id){
		loadNavbar(model);
		Message msg = repository.findMessageById(id);
		msg.setMessageDeleted(true);
		repository.delete(msg);

		User conectedUser = repositoryUser.findOne(userComponent.getLoggedUser().getId());
		loadDeletedMessage(repository, model, conectedUser);
		
		return "user-mensajesConversacion";
	}
	
	@RequestMapping(value="/mensajes/enviado" , method = RequestMethod.POST)
	public String sentMessageController(Model model, @RequestParam(value="destinatario", required=true) String dest,
			@RequestParam(value="message-content", required=true) String mensaje){
		
		loadNavbar(model);
		User uDest = repositoryUser.findByusername(dest);
		User conectedUser = repositoryUser.findOne(userComponent.getLoggedUser().getId());
		
		if(uDest != null){
			Message msg = new Message(mensaje, conectedUser, uDest);
			repository.save(msg);
			
			
			loadMessage(repository, model, conectedUser);
			
			return "user-mensajes";
		}
		else{
			model.addAttribute("error", true);
			
			return "user-mensajeNuevo";
		}
		
	}
	
	@RequestMapping(value="/mensajes/{username}/enviado" , method = RequestMethod.POST)
	public String sentMessageConversationController(Model model, 
			@RequestParam(value="message-content", required=true) String mensaje, @PathVariable String username){
		User uDest = repositoryUser.findByusername(username);
		User conectedUser = repositoryUser.findOne(userComponent.getLoggedUser().getId());
		loadNavbar(model);
		
		if(uDest != null){
			Message msg = new Message(mensaje, conectedUser, uDest);
			repository.save(msg);
			
			loadUsernameMessage(repository, model, conectedUser, uDest);
			model.addAttribute("send-msg", uDest);
			
			return "user-mensajesConversacion";
		}
		else{
			model.addAttribute("error", true);
			model.addAttribute("name", username);
			
			return "user-mensajes";
		}
		
	}
}