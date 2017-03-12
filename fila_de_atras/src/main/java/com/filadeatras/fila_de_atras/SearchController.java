package com.filadeatras.fila_de_atras;

import java.util.List;

import org.h2.mvstore.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class SearchController {
	
	@Autowired
	PostRepository postRepository;
	
	@RequestMapping(value="/search", method= RequestMethod.POST)
	public Post postSearch(Model model, @RequestParam("searchedPost") String consultedPost){
		return postRepository.findBypostTitle(consultedPost);
	}

}
