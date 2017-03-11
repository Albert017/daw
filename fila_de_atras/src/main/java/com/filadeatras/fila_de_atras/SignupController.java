package com.filadeatras.fila_de_atras;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.handler.UserRoleAuthorizationInterceptor;

@Controller
public class SignupController {
	
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping(value={"/signup"})
	public String signupController(Model model, HttpServletRequest request){
		return "signup";
	}
	
	@RequestMapping(value={"/register"})
	public String registerController(Model model,
			@RequestParam(value="username", required=true) String uName,
			@RequestParam(value="email", required=true) String uEmail,
			@RequestParam(value="password", required=true) String uPass){
		try{
			userRepository.save(new User(uName,uPass,uEmail,"USER_ROLE"));
			return "login";
		}catch (Exception e){
			model.addAttribute("signupError",true);
			model.addAttribute("signupErrorText",e.getCause());
			return "signup";
		}
	}
}