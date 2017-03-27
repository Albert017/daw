package com.filadeatras.fila_de_atras.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.filadeatras.fila_de_atras.UserComponent;
import com.filadeatras.fila_de_atras.models.Post;
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.repositories.PostRepository;
import com.filadeatras.fila_de_atras.repositories.UserRepository;

@Controller
public class SearchController extends NavbarController{
	
	@Autowired
	PostRepository postRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	UserComponent userComponent;
	
	@RequestMapping(value="/search")
	public String postSearch(Model model, @RequestParam("searchedPost") String consultedPost){
		Post currPost = postRepository.findBypostTitle(consultedPost);
		User u= userRepository.findByusername(consultedPost);
			loadNavbar(model);
			model.addAttribute("Post",currPost);
			model.addAttribute("User",u);
			
			return "postIndex";
	}

}
