package com.filadeatras.fila_de_atras;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	
	@Autowired
	PostRepository postRepository;
	
	@Autowired
	UserComponent userComponent;
	
	@RequestMapping(value={"/","/index"})
	public String indexController(Model model){
		
		
		model.addAttribute("loggedUser",userComponent.isLoggedUser());
		return "index";
	}
}
