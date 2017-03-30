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
import com.filadeatras.fila_de_atras.repositories.UserRepository;
import com.filadeatras.fila_de_atras.services.CommentService;
import com.filadeatras.fila_de_atras.services.PostService;
import com.filadeatras.fila_de_atras.services.UserService;

@Controller
public class CommentController extends NavbarController{
	
	@Autowired
	private CommentService serviceComment;
	
	@Autowired
	private PostService servicePost;
	
	@Autowired
	private UserService serviceUser;
	
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
		Post currPost = servicePost.findOne(id);

		User currUser = serviceUser.findByusername(userComponent.getLoggedUser().getUsername());
		
		Comment newComment = new Comment(cContent,currUser,currPost);
		serviceComment.save(newComment);
		
		currPost = servicePost.findOne(id);
		
		model.addAttribute("Post",currPost);
		model.addAttribute("PostComments",currPost.getPostComments());
		return "postIndex";
	}
}