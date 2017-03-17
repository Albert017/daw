package com.filadeatras.fila_de_atras;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
		
		model.addAttribute("loggedUser",userComponent.getLoggedUser());
		Post currPost = postRepository.findOne(id);
		model.addAttribute("Post",currPost);
		model.addAttribute("PostComments",currPost.getPostComments());
		return "postIndex";
	}
	
	@RequestMapping(value="/profile/post/{{id}}/up-vote", method = RequestMethod.POST)
	public String postProfileUpVoteController(Model model,
			@PathVariable Long id){
	
		Post currPost = postRepository.findOne(id);
		currPost.setPostUpVotes(currPost.getPostUpVotes()+1);
		postRepository.save(currPost);
		
		List<Post> postListCurr = userRepository.findByusername(userComponent.getLoggedUser().getUsername()).getUserPosts();
		model.addAttribute("Posts",postListCurr);
		
		model.addAttribute("loggedUsername",userComponent.getLoggedUser().getUsername());
		model.addAttribute("isUserAdmin",userComponent.isAdmin());
		model.addAttribute("currentUser", userRepository.findByusername(userComponent.getLoggedUser().getUsername()));	
		
		return "profile";
	}
}
