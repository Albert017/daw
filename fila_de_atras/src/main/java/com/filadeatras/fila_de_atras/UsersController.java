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
		User u1 = new User("Pepe", "pass", "pepe@a.aa" ,"USER_ROLE");
		User u2 = new User("Sara", "word", "sara@a.aa" ,"USER_ROLE");
		userRepository.save(u1);
		userRepository.save(u2);
		u1.addFollowing(u2); // u1 sigue a u2, añadir en la lista de seguidos en u1 a u2
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