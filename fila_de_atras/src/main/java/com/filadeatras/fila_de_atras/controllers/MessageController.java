package com.filadeatras.fila_de_atras.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.filadeatras.fila_de_atras.UserComponent;
import com.filadeatras.fila_de_atras.models.Message;
import com.filadeatras.fila_de_atras.models.User;

import java.util.LinkedList;
import java.util.List;
import com.filadeatras.fila_de_atras.services.MessageService;
import com.filadeatras.fila_de_atras.services.UserService;;

@Controller
public class MessageController extends NavbarController{
	@Autowired
	private MessageService serviceMsg;
	
	@Autowired
	private  UserService ServiceUser;
	
	@Autowired
	private UserComponent userComponent;
	
	
	
	
	private static void loadDeletedMessage(MessageService serviceMsg, Model model, User userC){
		
		List<Message> eliminados = serviceMsg.findBymessageAddresseeAndMessageDeletedOrderByIdDesc(userC, true);
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
	
	private static void readMessages(List<Message> messageU1toU2, User user, MessageService serviceMsg){
		//Read Messages
		
		for (Message message : messageU1toU2) {
			if(user.getId()==message.getMessageAddressee().getId()){
				message.setMessageNew(false);
				serviceMsg.save(message);
						
			}
		}
	}
	
	
	private static void loadUsernameMessage(MessageService serviceMsg, Model model, User userC, User user_aux){
		
		List<Message> messageU1toU2 = serviceMsg.findConversationByUserIdOrderByIdDesc(userC.getId(), user_aux.getId());
		
		readMessages(messageU1toU2, userC, serviceMsg);

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
	
	private static void loadMessage(MessageService serviceMsg, Model model, User userC){
		List<Message> msg = serviceMsg.findBymessageAddresseeAndMessageDeletedOrderByIdDesc(userC, false);
		List<Message> newMsg = new LinkedList<Message>();
		serviceMsg.getMessageWithDifferentSender(msg, newMsg);
		
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
		User conectedUser = ServiceUser.findOne(userComponent.getLoggedUser().getId());
		loadMessage(serviceMsg, model, conectedUser);
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
		User conectedUser = ServiceUser.findOne(userComponent.getLoggedUser().getId());
		loadDeletedMessage(serviceMsg, model, conectedUser);
		loadNavbar(model);
		
		return "user-mensajesConversacion";
	}
	
	@RequestMapping("/mensajes/{username}")
	public String messageUserController(Model model, @PathVariable String username){
		loadNavbar(model);
		
		User user_aux = ServiceUser.findByusername(username);
		if(user_aux != null){
			User conectedUser = ServiceUser.findOne(userComponent.getLoggedUser().getId());
			loadNavbar(model);
			loadUsernameMessage(serviceMsg, model, conectedUser, user_aux);
					
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
		Message msg = serviceMsg.findMessageById(id);
		msg.setMessageDeleted(true);
		serviceMsg.save(msg);
		User conectedUser = ServiceUser.findOne(userComponent.getLoggedUser().getId());
		if(conectedUser.equals(msg.getMessageAddressee())){
			loadUsernameMessage(serviceMsg, model, conectedUser, msg.getMessageSender());
		}
		else{
			loadUsernameMessage(serviceMsg, model, conectedUser, msg.getMessageAddressee());
		}
		
		
		return "user-mensajesConversacion";
	}
	
	@RequestMapping(value="/mensajes/eliminado/{id}", method = RequestMethod.POST)
	public String DeleteController(Model model, @PathVariable Long id){
		loadNavbar(model);
		Message msg = serviceMsg.findMessageById(id);
		msg.setMessageDeleted(true);
		serviceMsg.delete(msg);

		User conectedUser = ServiceUser.findOne(userComponent.getLoggedUser().getId());
		loadDeletedMessage(serviceMsg, model, conectedUser);
		
		return "user-mensajesConversacion";
	}
	
	@RequestMapping(value="/mensajes/enviado" , method = RequestMethod.POST)
	public String sentMessageController(Model model, @RequestParam(value="destinatario", required=true) String dest,
			@RequestParam(value="message-content", required=true) String mensaje){
		
		loadNavbar(model);
		User uDest = ServiceUser.findByusername(dest);
		User conectedUser = ServiceUser.findOne(userComponent.getLoggedUser().getId());
		
		if(uDest != null){
			Message msg = new Message(mensaje, conectedUser, uDest);
			serviceMsg.save(msg);
			
			
			loadMessage(serviceMsg, model, conectedUser);
			
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
		User uDest = ServiceUser.findByusername(username);
		User conectedUser = ServiceUser.findOne(userComponent.getLoggedUser().getId());
		loadNavbar(model);
		
		if(uDest != null){
			Message msg = new Message(mensaje, conectedUser, uDest);
			serviceMsg.save(msg);
			
			loadUsernameMessage(serviceMsg, model, conectedUser, uDest);
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