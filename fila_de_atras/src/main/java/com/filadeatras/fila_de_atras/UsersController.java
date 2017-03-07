package com.filadeatras.fila_de_atras;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UsersController {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private CommentRepository commentRepository;
	
	@PostConstruct
	public void init(){
		User u1 = new User("Pepe");
		userRepository.save(u1);
		Comment c1 = new Comment("Esto es el contenido de un comentario");
		c1.setCommentUser(u1);
		commentRepository.save(c1);
	}
	@RequestMapping("/users")
	public String usersController(Model model){
		
		return "users";
	}
}