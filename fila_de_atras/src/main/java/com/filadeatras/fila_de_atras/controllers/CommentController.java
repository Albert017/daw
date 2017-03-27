package com.filadeatras.fila_de_atras.controllers;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.filadeatras.fila_de_atras.UserComponent;
import com.filadeatras.fila_de_atras.models.Comment;
import com.filadeatras.fila_de_atras.models.Post;
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.repositories.CommentRepository;
import com.filadeatras.fila_de_atras.repositories.PostRepository;
import com.filadeatras.fila_de_atras.repositories.UserRepository;

@Controller
public class CommentController extends NavbarController{
	
	@Autowired
	private CommentRepository commentRepository;
	
	@Autowired
	private PostRepository postRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	UserComponent userComponent;
	
	@PostConstruct
	public void init(){
		
	}
	@RequestMapping(value={"/addComment"},method=RequestMethod.POST)
	public String usersController(Model model,
			@RequestParam(value="commentContent", required=true) String cContent,
			@RequestParam(value="commentPost", required=true) String cPost){
		
		loadNavbar(model);
		
		Long id = Long.parseLong(cPost);
		Post currPost = postRepository.findOne(id);

		User currUser = userRepository.findByusername(userComponent.getLoggedUser().getUsername());
		
		Comment newComment = new Comment(cContent,currUser,currPost);
		commentRepository.save(newComment);
		
		currPost = postRepository.findOne(id);
		
		model.addAttribute("Post",currPost);
		model.addAttribute("PostComments",currPost.getPostComments());
		return "postIndex";
	}
}