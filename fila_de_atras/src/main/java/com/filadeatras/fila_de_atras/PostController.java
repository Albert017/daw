package com.filadeatras.fila_de_atras;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PostController {
	@Autowired
	private PostRepository repository;
	
	@PostConstruct
	public void init(){
				
	}
	@RequestMapping("/postIndex")
	public String postController(Model model){
		
		return "postIndex";
	}
}
