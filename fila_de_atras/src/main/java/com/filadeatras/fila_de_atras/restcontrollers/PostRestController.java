package com.filadeatras.fila_de_atras.restcontrollers;

import java.time.LocalDateTime;
import java.util.List;

import com.filadeatras.fila_de_atras.UserComponent;
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
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.repositories.PostRepository;
import com.filadeatras.fila_de_atras.services.PostService;
import com.filadeatras.fila_de_atras.services.UserService;

@RestController
@RequestMapping("/api/post")
public class PostRestController {

	@Autowired
	private PostService servicePost;
	
	@Autowired
	private UserService serviceUser;

	@Autowired
	UserComponent userComponent;
	
	@JsonView(ViewPost.class)
	@RequestMapping(value = "/{id}", method=RequestMethod.GET)
	public ResponseEntity<Post> postGetController (@PathVariable long id){
		
		Post postFound = servicePost.findOne(id);
		if(postFound==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(postFound,HttpStatus.OK);
	}

    @JsonView(ViewPost.class)
    @RequestMapping(value = "/{id}", method=RequestMethod.DELETE)
    public ResponseEntity<Post> postController(@PathVariable long id){
        Post postFound = servicePost.findOne(id);
        if(postFound==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Post postDeleted = servicePost.deletePost(postFound,userComponent.getLoggedUser());
        if (postDeleted==null) return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        return new ResponseEntity<>(postDeleted,HttpStatus.OK);
    }
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/", method=RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Post newPost(@RequestBody Post post) {
		return servicePost.createPost(post,userComponent.getLoggedUser());
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/getCategoryPost/{tag}", method=RequestMethod.GET)
	public ResponseEntity<List<Post>> getFromACategoryPost(@PathVariable String tag){
		List<Post> posts = servicePost.findByPostTag(tag);
		if(posts.isEmpty()){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(posts, HttpStatus.OK);
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/", method=RequestMethod.GET)
	public ResponseEntity<List<Post>> getAllPost(){
		List<Post> posts = servicePost.findAll();
		if(posts==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(posts,HttpStatus.OK);
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/reported/", method=RequestMethod.GET)
	public ResponseEntity<List<Post>> getAllReportedPost(){
		List<Post> posts = servicePost.findAllByreport(true);
		if(posts==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(posts,HttpStatus.OK);
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/nonReported/", method=RequestMethod.GET)
	public ResponseEntity<List<Post>> getAllNonReportedPost(){
		List<Post> posts = servicePost.findAllByreport(false);
		if(posts==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(posts,HttpStatus.OK);
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/user/{username}/", method=RequestMethod.GET)
	public ResponseEntity<List<Post>> getAllUserPost(@PathVariable String username){
		User u = serviceUser.findByusername(username);
		List<Post> posts = servicePost.findBypostAuthor(u);
		if(posts==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(posts,HttpStatus.OK);
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/getPostOfTheMonth/", method=RequestMethod.GET)
	public ResponseEntity<Post> getPostofTheMonth(){
		Post post = servicePost.findTop1BypostUpVotesMonth(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear()).get(0);
		if(post==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(post, HttpStatus.OK);
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/getPostOfTheDay/", method=RequestMethod.GET)
	public ResponseEntity<Post> getPostofTheDay(){
		Post post = servicePost.findTop1BypostUpVotesDay(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear(), LocalDateTime.now().getDayOfMonth()).get(0);
		if(post==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(post, HttpStatus.OK);
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/getPostOfTheYear/", method=RequestMethod.GET)
	public ResponseEntity<Post> getPostofTheYear(){
		Post post = servicePost.findFirst1ByYearOrderByPostUpVotesDesc(LocalDateTime.now().getYear()).get(0);
		if(post==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(post, HttpStatus.OK);
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/getPostOfTheWeek/", method=RequestMethod.GET)
	public ResponseEntity<Post> getPostofTheWeek(){
		int currentDayofTheWeek= LocalDateTime.now().getDayOfWeek().getValue();
		int postWeek=(LocalDateTime.now().getDayOfYear() - currentDayofTheWeek + 10)/7;
		int currentYear= LocalDateTime.now().getYear();
		Post bestPost=null;
		if(postWeek==0){
			bestPost = servicePost.findTop1BypostUpVotesWeek(postWeek, currentYear, 53, currentYear-1).get(0);
		}
		else{
			bestPost = servicePost.findTop1BypostUpVotesWeek(postWeek, currentYear).get(0);
		}
		if(bestPost==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(bestPost, HttpStatus.OK);
	}

	@JsonView(ViewPost.class)
	@RequestMapping(value="/reportPost/{id}", method=RequestMethod.PUT)
	public ResponseEntity<Post> reportPost(@PathVariable long id){
		Post p = servicePost.findOne(id);
		if(p==null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		p.setReport(true);
		servicePost.save(p);
		return new ResponseEntity<>(p, HttpStatus.OK);
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/upvotePost/{id}", method=RequestMethod.PUT)
	public ResponseEntity<Post> upvotePost(@PathVariable long id){
		Post p = servicePost.findOne(id);
		if(p==null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		p.setPostUpVotes(p.getPostUpVotes()+1);
		servicePost.save(p);
		return new ResponseEntity<>(p, HttpStatus.OK);
	}

	@JsonView(ViewPost.class)
	@RequestMapping(value="/downvotePost/{id}", method=RequestMethod.PUT)
	public ResponseEntity<Post> downvotePost(@PathVariable long id){
		Post p = servicePost.findOne(id);
		if(p==null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		p.setPostDownVotes(p.getPostDownVotes()+1);
		servicePost.save(p);
		return new ResponseEntity<>(p, HttpStatus.OK);
	}
}