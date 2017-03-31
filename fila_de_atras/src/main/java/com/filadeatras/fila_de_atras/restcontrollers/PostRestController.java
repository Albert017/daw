package com.filadeatras.fila_de_atras.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.filadeatras.fila_de_atras.models.Post;
import com.filadeatras.fila_de_atras.models.Post.ViewPost;
import com.filadeatras.fila_de_atras.repositories.PostRepository;
import com.filadeatras.fila_de_atras.services.PostService;

@RestController
@RequestMapping("/api/post")
public class PostRestController {

	@Autowired
	private PostService servicePost;
	
	@JsonView(ViewPost.class)
	@RequestMapping(value = "/{id}", method=RequestMethod.GET)
	public ResponseEntity<Post> postController (@PathVariable long id){
		
		Post postFound = servicePost.findOne(id);
		if(postFound==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(postFound,HttpStatus.OK);
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/uploadPost", method=RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Post newPost(@RequestBody Post post) {
		servicePost.save(post);
		//falta comprobar si el user existe
		return post;
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/getAllPosts", method=RequestMethod.GET)
	public List<Post> getAllPost(){
		return servicePost.findAll();
	}
}
