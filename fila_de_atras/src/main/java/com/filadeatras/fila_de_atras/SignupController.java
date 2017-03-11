package com.filadeatras.fila_de_atras;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SignupController {

	
	
	
	@RequestMapping(value={"/signup"})
	public String signupController(Model model, HttpServletRequest request){
		return "signup";
	}
}