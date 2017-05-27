package com.filadeatras.fila_de_atras.restcontrollers;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import com.filadeatras.fila_de_atras.UserComponent;
import com.filadeatras.fila_de_atras.models.Comment;
import javafx.geometry.Pos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.annotation.JsonView;
import com.filadeatras.fila_de_atras.models.Post;
import com.filadeatras.fila_de_atras.models.Post.ViewPost;
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.repositories.PostRepository;
import com.filadeatras.fila_de_atras.services.PostService;
import com.filadeatras.fila_de_atras.services.UserService;

@RestController
@RequestMapping("/api/posts")
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
    @RequestMapping(value = "/delete={id}", method=RequestMethod.DELETE)
    public ResponseEntity<Post> postDeleteController(@PathVariable long id){
        Post postFound = servicePost.findOne(id);
        if(postFound==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Post postDeleted = servicePost.deletePost(postFound,userComponent.getLoggedUser());
        if (postDeleted==null) return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        return new ResponseEntity<>(postDeleted,HttpStatus.OK);
    }

    @JsonView(Comment.PostComment.class)
    @RequestMapping(value="/{id}/comments/", method=RequestMethod.POST)
    public ResponseEntity<Comment> postAddComment (@PathVariable long id, @RequestBody Map<String,String> allValues){
        Post post = servicePost.findOne(id);
        if (post==null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        Comment newCom = servicePost.addComment(post,allValues.get("commentContent"),userComponent.getLoggedUser());
        if (newCom == null) return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(newCom,HttpStatus.OK);
    }


	@JsonView(ViewPost.class)
	@RequestMapping(value="/", method=RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Post newPost(@RequestBody Post post) {
		return servicePost.createPost(post,userComponent.getLoggedUser());
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/tag={tag}", method=RequestMethod.GET)
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
	@RequestMapping(value="/user={username}/", method=RequestMethod.GET)
	public ResponseEntity<List<Post>> getAllUserPost(@PathVariable String username){
		User u = serviceUser.findByusername(username);
		List<Post> posts = servicePost.findBypostAuthor(u);
		if(posts==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(posts,HttpStatus.OK);
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/best/month/", method=RequestMethod.GET)
	public ResponseEntity<Post> getPostofTheMonth(){
		Post post = servicePost.findTop1BypostUpVotesMonth(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear()).get(0);
		if(post==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(post, HttpStatus.OK);
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/best/day/", method=RequestMethod.GET)
	public ResponseEntity<Post> getPostofTheDay(){
		Post post = servicePost.findTop1BypostUpVotesDay(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear(), LocalDateTime.now().getDayOfMonth()).get(0);
		if(post==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(post, HttpStatus.OK);
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/best/year/", method=RequestMethod.GET)
	public ResponseEntity<Post> getPostofTheYear(){
		Post post = servicePost.findFirst1ByYearOrderByPostUpVotesDesc(LocalDateTime.now().getYear()).get(0);
		if(post==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(post, HttpStatus.OK);
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/best/week/", method=RequestMethod.GET)
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
	@RequestMapping(value="/report={id}", method=RequestMethod.PUT)
	public ResponseEntity<Post> reportPost(@PathVariable long id){
		Post p = servicePost.findOne(id);
		if(p==null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		p.setReport(true);
		servicePost.save(p);
		return new ResponseEntity<>(p, HttpStatus.OK);
	}
	
	@JsonView(ViewPost.class)
	@RequestMapping(value="/upvote={id}", method=RequestMethod.PUT)
	public ResponseEntity<Post> upvotePost(@PathVariable long id){
		Post p = servicePost.findOne(id);
		if(p==null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		p.setPostUpVotes(p.getPostUpVotes()+1);
		servicePost.save(p);
		return new ResponseEntity<>(p, HttpStatus.OK);
	}

	@JsonView(ViewPost.class)
	@RequestMapping(value="/downvote={id}", method=RequestMethod.PUT)
	public ResponseEntity<Post> downvotePost(@PathVariable long id){
		Post p = servicePost.findOne(id);
		if(p==null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		p.setPostDownVotes(p.getPostDownVotes()+1);
		servicePost.save(p);
		return new ResponseEntity<>(p, HttpStatus.OK);
	}
	@JsonView(ViewPost.class)
	@RequestMapping(value="/trending", method=RequestMethod.GET)
	public ResponseEntity<List<Post>> getTrendingPost(){
		List<Post> posts = servicePost.findAllByOrderByPostUpVotesDesc();
		if(posts==null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(posts,HttpStatus.OK);
	}
}