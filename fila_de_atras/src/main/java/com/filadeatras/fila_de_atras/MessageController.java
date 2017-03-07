package com.filadeatras.fila_de_atras;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MessageController {
	@Autowired
	private MessageRepository repository;
	
	@PostConstruct
	public void init(){
		
	}
	@RequestMapping("/user-mensajes")
	public String usersController(Model model){
		
		return "user-mensajes";
	}
}