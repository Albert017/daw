package com.filadeatras.fila_de_atras;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CommentController {
	@Autowired
	private CommentRepository repository;
	
	@PostConstruct
	public void init(){
		repository.save(new Comment("Esto es el contenido de un comentario"));
	}
	@RequestMapping("/users")
	public String usersController(Model model){
		
		return "users";
	}
}