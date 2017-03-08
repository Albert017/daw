package com.filadeatras.fila_de_atras;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	
	@Autowired
	PostRepository postRepository;
	
	@RequestMapping(value={"/","/index"})
	public String indexController(Model model){
		
		
		
		return "index";
	}
}
