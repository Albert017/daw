package com.filadeatras.fila_de_atras;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

@Controller
public class NavbarController {
	
	@Autowired
	private MessageRepository repository;
	
	@Autowired
	private  UserRepository repositoryUser;
	
	@Autowired
	private UserComponent userComponent;
	
	public NavbarController(){
		
	}
	
	public void loadNavbar(Model model){
		User conectedUser = repositoryUser.findOne(userComponent.getLoggedUser().getId());
		model.addAttribute("currentUser", userComponent.getLoggedUser());
		
		int num = repository.findByMessageAddresseeAndMessageNew(conectedUser, true).size();
		model.addAttribute("numEmail", num);
		
	}

}
