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
	
	@Autowired
	private MessageRepository messageRepository;

	@Autowired
	private PostRepository postRepository;
	
	@PostConstruct
	public void init(){
		User u1 = new User("Pepe");
		User u2 = new User("Sara");
		//u2.setFollowing(u1);
		userRepository.save(u1);
		userRepository.save(u2);
		Message m1 = new Message("Este es el asunto del mensaje", "Este es el contenido del mensaje", u1,u2);
		messageRepository.save(m1);
		Post p1 = new Post("El titulo del post", u2);
		postRepository.save(p1);
		Comment c1 = new Comment("Esto es el contenido de un comentario",u1,p1);
		commentRepository.save(c1);

	}
	@RequestMapping("/users")
	public String usersController(Model model){
		
		return "users";
	}
}