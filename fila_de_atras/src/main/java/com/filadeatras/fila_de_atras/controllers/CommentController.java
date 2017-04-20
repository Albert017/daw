package com.filadeatras.fila_de_atras.controllers;

import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URLEncoder;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.filadeatras.fila_de_atras.UserComponent;
import com.filadeatras.fila_de_atras.models.Comment;
import com.filadeatras.fila_de_atras.models.Post;
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.repositories.UserRepository;
import com.filadeatras.fila_de_atras.restcontrollers.PostRestController;
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
			@RequestParam(value="commentPost", required=true) String cPost) throws UnsupportedEncodingException, RestClientException, URISyntaxException{
		
		loadNavbar(model);
		Long id = Long.parseLong(cPost);
		
		serviceComment.crearComentario(id,cContent,userComponent.getLoggedUser());
		
		//currPost = servicePost.findOne(id);
		
		model.addAttribute("Post",servicePost.findOne(id));
		model.addAttribute("PostComments",servicePost.findOne(id).getPostComments());
		return "postIndex";
	}
}