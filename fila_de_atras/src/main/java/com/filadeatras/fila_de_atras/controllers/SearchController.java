package com.filadeatras.fila_de_atras.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.filadeatras.fila_de_atras.UserComponent;
import com.filadeatras.fila_de_atras.models.Post;
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.services.PostService;
import com.filadeatras.fila_de_atras.services.UserService;


@Controller
public class SearchController extends NavbarController{
	
	@Autowired
	PostService postService;
	@Autowired
	UserService userService;
	@Autowired
	UserComponent userComponent;
	
	@RequestMapping(value="/search")
	public String postSearch(Model model, @RequestParam("searchedPost") String consultedPost){
		Post currPost = postService.findBypostTitle(consultedPost);
		User u= userService.findByusername(consultedPost);
			loadNavbar(model);
			model.addAttribute("Post",currPost);
			model.addAttribute("User",u);
			
			return "postIndex";
	}

}
