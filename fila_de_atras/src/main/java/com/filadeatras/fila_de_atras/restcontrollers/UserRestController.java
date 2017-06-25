


package com.filadeatras.fila_de_atras.restcontrollers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
//import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.filadeatras.fila_de_atras.serializers.UserFullSerializer;
//import com.sun.deploy.net.HttpResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.filadeatras.fila_de_atras.services.PostService;
import com.filadeatras.fila_de_atras.services.UserService;
import com.filadeatras.fila_de_atras.UserComponent;
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.models.Post;
import com.filadeatras.fila_de_atras.models.User.ViewUser;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserRestController {

	@Autowired
	private UserService serviceUser;
	@Autowired
	private PostService servicePost;

	
	@Autowired UserComponent userComponent;

	@RequestMapping(value = "/{id}", method=RequestMethod.GET)
	public ResponseEntity<Object> getUser (@PathVariable long id){
		
		User userFound = serviceUser.findById(id);
		if(userFound==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}


		//TODO probably better to move this to the service class.
        ObjectMapper mapper = new ObjectMapper();
        SimpleModule module = new SimpleModule();
        module.addSerializer(User.class, new UserFullSerializer());
        mapper.registerModule(module);
        String userSer;

        try {
            userSer = mapper.writeValueAsString(userFound);
        } catch (JsonProcessingException e) {
            return new ResponseEntity<>("Problem serializing user.",HttpStatus.INTERNAL_SERVER_ERROR);
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON_UTF8);

        return new ResponseEntity<>(userSer,headers,HttpStatus.OK);
	}
	
	@JsonView(ViewUser.class)
	@RequestMapping(value = "/delete={id}", method=RequestMethod.DELETE)
	public ResponseEntity<User> deleteUser (@PathVariable long id){
		
		User userDeleted = serviceUser.findById(id);
		if(userDeleted==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		serviceUser.delete(userDeleted);
		return new ResponseEntity<>(userDeleted,HttpStatus.OK);
	}
	
	@JsonView(ViewUser.class)
	@RequestMapping(value = "/put={id}", method=RequestMethod.PUT)
	public ResponseEntity<User> putUser (@PathVariable long id, @RequestBody User updateUser){
		User userFound = serviceUser.findById(id);
		if(userComponent.getLoggedUser().getId()!=id) return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		if(userFound==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
        userFound = serviceUser.updateUser(userFound,updateUser);
		if (userFound==null) return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		return new ResponseEntity<>(updateUser,HttpStatus.OK);
	}
	
	@JsonView(ViewUser.class)
	@RequestMapping(value = "/", method=RequestMethod.POST)
	public ResponseEntity<User> postUser (@RequestBody Map<String,String> allValues){
		User newUser = serviceUser.createNew(allValues);
		if (newUser == null){
		    return  new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
		return new ResponseEntity<>(newUser,HttpStatus.CREATED);
	}
	
	@JsonView(ViewUser.class)
	@RequestMapping(value = "/self", method=RequestMethod.GET)
	public ResponseEntity<User> getMyUser (){
		
		if(userComponent.isLoggedUser()){
			User userC = serviceUser.findById(userComponent.getLoggedUser().getId());
			return new ResponseEntity<>(userC,HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		
		
	}
	
	@JsonView(ViewUser.class)
	@RequestMapping(value = "/name={username}", method=RequestMethod.GET)
	public ResponseEntity<User> getUser (@PathVariable String username){
		
		User userFound = serviceUser.findByusername(username);
		if(userFound==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(userFound,HttpStatus.OK);
	}

    @RequestMapping(value = "/{id}/followers", method=RequestMethod.PUT)
    public ResponseEntity<Object> followUser (@PathVariable long id){
        User toFollow = serviceUser.findOne(id);
        if (toFollow==null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        serviceUser.follow(userComponent.getLoggedUser(),toFollow);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/followers", method=RequestMethod.DELETE)
    public ResponseEntity<Object> unfollowUser (@PathVariable long id){
        User toUnFollow = serviceUser.findOne(id);
        if (toUnFollow==null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        serviceUser.unfollow(userComponent.getLoggedUser(),toUnFollow);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
