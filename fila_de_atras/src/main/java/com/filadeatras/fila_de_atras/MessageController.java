package com.filadeatras.fila_de_atras;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MessageController {
	@Autowired
	private MessageRepository repository;
	
	@Autowired
	private UserRepository repositoryUser;
	
	@PostConstruct
	public void init(){
		
	}
	@RequestMapping("/mensajes")
	public String messageController(Model model){
		
		return "user-mensajes";
	}
	
	@RequestMapping("/mensajes/nuevo")
	public String newMessageController(Model model){
		
		return "user-mensajeNuevo";
	}
	
	@RequestMapping("/mensajes/{username}")
	public String messageUserController(Model model, @PathVariable String username){
		User user_aux = repositoryUser.findByusername(username);
		
		model.addAttribute("messages", repository.findBymessageSender(user_aux));
		
		return "user-mensajesConversacion";
	}
}