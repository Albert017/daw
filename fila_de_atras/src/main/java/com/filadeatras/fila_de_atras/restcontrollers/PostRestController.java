package com.filadeatras.fila_de_atras.restcontrollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.filadeatras.fila_de_atras.models.Post;
import com.filadeatras.fila_de_atras.models.Post.ViewPost;
import com.filadeatras.fila_de_atras.repositories.PostRepository;

@RestController
@RequestMapping("/api/post")
public class PostRestController {

	@Autowired
	private PostRepository postRepository;
	
	@JsonView(ViewPost.class)
	@RequestMapping(value = "/{id}", method=RequestMethod.GET)
	public ResponseEntity<Post> postController (@PathVariable long id){
		
		Post postFound = postRepository.getOne(id);
		if(postFound==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(postFound,HttpStatus.OK);
	}
}
