package com.filadeatras.fila_de_atras;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PostController {
	@Autowired
	private PostRepository postRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	UserComponent userComponent;
	
	@PostConstruct
	public void init(){
				
	}
	@RequestMapping("/post/{id}")
	public String postController(Model model,
			@PathVariable Long id){
		
		model.addAttribute("loggedUser",userComponent.isLoggedUser());
		if (userComponent.isLoggedUser()){
			model.addAttribute("loggedUsername",userComponent.getLoggedUser().getUsername());
		}
		Post currPost = postRepository.findOne(id);
		model.addAttribute("Post",currPost);
		model.addAttribute("PostComments",currPost.getPostComments());
		return "postIndex";
	}
}
