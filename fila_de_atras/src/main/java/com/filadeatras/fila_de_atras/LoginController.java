package com.filadeatras.fila_de_atras;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {

	
	
	
	@RequestMapping(value={"/login"})
	public String loginController(Model model, HttpServletRequest request){
		return "login";
	}
}
