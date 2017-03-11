package com.filadeatras.fila_de_atras;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {

	
	
	
	@RequestMapping(value={"/login"})
	public String loginController(Model model, HttpServletRequest request){
		model.addAttribute("loginerror",false);
		return "login";
	}
	
	@RequestMapping(value={"/loginerror"})
	public String loginerrorController(Model model, HttpServletRequest request){
		model.addAttribute("loginerror",true);
		return "login";
	}
}
