package com.filadeatras.fila_de_atras;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class SearchController {
	
	@Autowired
	PostRepository postRepository;
	@Autowired
	UserComponent userComponent;
	
	@RequestMapping(value="/search")
	public String postSearch(Model model, @RequestParam("searchedPost") String consultedPost){
		Post currPost = postRepository.findBypostTitle(consultedPost);
		if (currPost ==null){
			model.addAttribute("loggedUser",userComponent.isLoggedUser());
			if (userComponent.isLoggedUser()){
				model.addAttribute("loggedUsername",userComponent.getLoggedUser().getUsername());
			}
			return "index";
		} else {
			model.addAttribute("loggedUser",userComponent.isLoggedUser());
			if (userComponent.isLoggedUser()){
				model.addAttribute("loggedUsername",userComponent.getLoggedUser().getUsername());
			}
			model.addAttribute("Post",currPost);
			model.addAttribute("PostComments",currPost.getPostComments());
			
			return "postIndex";
		}
	}

}