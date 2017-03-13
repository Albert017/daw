package com.filadeatras.fila_de_atras;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import antlr.TokenWithIndex;

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
	
	@Autowired
	UserComponent userComponent;
	
	@PostConstruct
	public void init(){
		User u1 = new User("Pepe", "pass", "pepe@a.aa" ,"ROLE_USER");
		User u2 = new User("Sara", "word", "sara@a.aa" ,"ROLE_USER","ROLE_ADMIN");
		userRepository.save(u1);
		userRepository.save(u2);
		u1.addFollowing(u2); // u1 sigue a u2, añadir en la lista de seguidos en u1 a u2
		userRepository.save(u1);
		userRepository.save(u2);
		Message m1 = new Message("Este es el contenido del mensaje", u1,u2);
		messageRepository.save(m1);
		Post p1 = new Post("El titulo del post", u2);
		Post p2 = new Post("1", u2);
		Post p3 =new Post("2", u2);
		postRepository.save(p1);
		postRepository.save(p2);
		postRepository.save(p3);
		Comment c1 = new Comment("Esto es el contenido de un comentario",u1,p1);
		commentRepository.save(c1);

	}
	@RequestMapping("/users")
	public String usersController(Model model){
		
		return "users";
	}
	
	@RequestMapping("/profile")
	public String profileController(Model model){
		
		//Common parts
		model.addAttribute("loggedUsername",userComponent.getLoggedUser().getUsername());
		model.addAttribute("unreadMessages","0"); //Replacee with DB query.
		model.addAttribute("numberFollowers","0"); //Replacee with DB query.
		model.addAttribute("numberFollowing","0"); //Replacee with DB query.
		model.addAttribute("isUserAdmin",userComponent.isAdmin());
		List<Post> postListCurr = userRepository.findByusername(userComponent.getLoggedUser().getUsername()).getUserPosts();
		model.addAttribute("Posts",postListCurr);
		//End Common Parts
		
		
		
		return "profile";
	}
	
	@RequestMapping("/followers")
	public String profileFollowersController(Model model){
		
		//Common parts
				model.addAttribute("loggedUsername",userComponent.getLoggedUser().getUsername());
				model.addAttribute("unreadMessages","0"); //Replacee with DB query.
				model.addAttribute("numberFollowers","0"); //Replacee with DB query.
				model.addAttribute("numberFollowing","0"); //Replacee with DB query.
				model.addAttribute("isUserAdmin",userComponent.isAdmin());
		//End Common Parts
	
		return "followers";
	}
	
	@RequestMapping("/following")
	public String profileFollowingController(Model model){
		
		//Common parts
				model.addAttribute("loggedUsername",userComponent.getLoggedUser().getUsername());
				model.addAttribute("unreadMessages","0"); //Replacee with DB query.
				model.addAttribute("numberFollowers","0"); //Replacee with DB query.
				model.addAttribute("numberFollowing","0"); //Replacee with DB query.
				model.addAttribute("isUserAdmin",userComponent.isAdmin());
		//End Common Parts
	
		return "following";
	}
}