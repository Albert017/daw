package com.filadeatras.fila_de_atras;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UsersController {
	
	@RequestMapping("/users")
	public String usersController(Model model){
		
		return "users";
	}
}