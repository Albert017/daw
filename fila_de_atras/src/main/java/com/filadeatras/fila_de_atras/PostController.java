package com.filadeatras.fila_de_atras;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PostController extends NavbarController{
	@Autowired
	private PostRepository postRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	UserComponent userComponent;
	
	@PostConstruct
	public void init(){
				
	}
	@RequestMapping("/post/{id}")
	public String postController(Model model,
			@PathVariable Long id){
		
		loadNavbar(model);
		Post currPost = postRepository.findOne(id);
		model.addAttribute("Post",currPost);
		model.addAttribute("PostComments",currPost.getPostComments());
		return "postIndex";
	}
	
	@RequestMapping(value="/profile/post/{id}/up-vote", method = RequestMethod.POST)
	public String postProfileUpVoteController(Model model,
			@PathVariable Long id){
	
		Post currPost = postRepository.findOne(id);
		currPost.setPostUpVotes(currPost.getPostUpVotes()+1);
		postRepository.save(currPost);
		
		List<Post> postListCurr = userRepository.findByusername(userComponent.getLoggedUser().getUsername()).getUserPosts();
		model.addAttribute("Posts",postListCurr);
		
		loadProfileNavbar(model);
		
		return "profile";
	}
	
	@RequestMapping(value="/profile/post/{id}/down-vote", method = RequestMethod.POST)
	public String postProfileDownVoteController(Model model,
			@PathVariable Long id){
	
		Post currPost = postRepository.findOne(id);
		currPost.setPostDownVotes(currPost.getPostDownVotes()+1);
		postRepository.save(currPost);
		
		List<Post> postListCurr = userRepository.findByusername(userComponent.getLoggedUser().getUsername()).getUserPosts();
		model.addAttribute("Posts",postListCurr);
		
		loadProfileNavbar(model);
		
		return "profile";
	}
	
	@RequestMapping(value="/index/{id}/down-vote", method = RequestMethod.POST)
	public String postIndexDownVoteController(Model model,
			@PathVariable Long id){
	
		Post currPost = postRepository.findOne(id);
		currPost.setPostDownVotes(currPost.getPostDownVotes()+1);
		postRepository.save(currPost);
		
		loadNavbar(model);
		List<Post> original = postRepository.findAll();
		List<Post> shallowCopy = original.subList(0, original.size());
		Collections.reverse(shallowCopy);
		model.addAttribute("Posts",shallowCopy);
		
		
		return "index";
	}
	
	@RequestMapping(value="/index/{id}/up-vote", method = RequestMethod.POST)
	public String postIndexUpVoteController(Model model,
			@PathVariable Long id){
	
		Post currPost = postRepository.findOne(id);
		currPost.setPostUpVotes(currPost.getPostUpVotes()+1);
		postRepository.save(currPost);
		
		loadNavbar(model);
		List<Post> original = postRepository.findAll();
		List<Post> shallowCopy = original.subList(0, original.size());
		Collections.reverse(shallowCopy);
		model.addAttribute("Posts",shallowCopy);
		
		return "index";
	}
	
	@RequestMapping("/post/{id}/up-vote")
	public String postUpVoteController(Model model,
			@PathVariable Long id){
		
		loadNavbar(model);
		Post currPost = postRepository.findOne(id);
		currPost.setPostUpVotes(currPost.getPostUpVotes()+1);
		postRepository.save(currPost);
		
		model.addAttribute("Post",currPost);
		model.addAttribute("PostComments",currPost.getPostComments());
		
		return "postIndex";
	}
	
	@RequestMapping("/post/{id}/down-vote")
	public String postDownVoteController(Model model,
			@PathVariable Long id){
		
		loadNavbar(model);
		Post currPost = postRepository.findOne(id);
		currPost.setPostDownVotes(currPost.getPostDownVotes()+1);
		postRepository.save(currPost);
		model.addAttribute("Post",currPost);
		model.addAttribute("PostComments",currPost.getPostComments());
		return "postIndex";
	}
	
	
	
	@RequestMapping("/user/{username}/{id}/up-vote")
	public String usertUpVoteController(Model model, @PathVariable String username,
			@PathVariable Long id){
		loadNavbar(model);
		User viewUser = userRepository.findByusername(username);
		if (viewUser==null){
			model.addAttribute("ErrorMessage","User not found.");
			return "errorPage";
		} else{
			Post currPost = postRepository.findOne(id);
			currPost.setPostUpVotes(currPost.getPostUpVotes()+1);
			postRepository.save(currPost);
			List<Post> postListCurr = viewUser.getUserPosts();
			Post ranPost = null;
			if (postListCurr.size()>0){
				ranPost = postListCurr.get((int)(Math.random()*postListCurr.size()));
			}
			model.addAttribute("UserViewUser",viewUser);
			model.addAttribute("UserViewPost",ranPost);
			
			return "users";
		}
		
	}
	
	@RequestMapping("/user/{username}/{id}/down-vote")
	public String userDownVoteController(Model model, @PathVariable String username,
			@PathVariable Long id){
		loadNavbar(model);
		User viewUser = userRepository.findByusername(username);
		if (viewUser==null){
			model.addAttribute("ErrorMessage","User not found.");
			return "errorPage";
		} else{
			Post currPost = postRepository.findOne(id);
			currPost.setPostDownVotes(currPost.getPostDownVotes()+1);
			postRepository.save(currPost);
			List<Post> postListCurr = viewUser.getUserPosts();
			Post ranPost = null;
			if (postListCurr.size()>0){
				ranPost = postListCurr.get((int)(Math.random()*postListCurr.size()));
			}
			model.addAttribute("UserViewUser",viewUser);
			model.addAttribute("UserViewPost",ranPost);
			
			return "users";
		}
	}
	@RequestMapping("/bestPost")
	public String bestPost(Model model){
		String currentMonth= LocalDateTime.now().getMonth().toString();
		System.out.println(currentMonth);
		Post bestPost = postRepository.findTop1BypostUpVotes(currentMonth);
		model.addAttribute("Post", bestPost);
		if(bestPost==null){
			System.out.println("vacio");
		}
		model.addAttribute("PostComments", bestPost.getPostComments());
		return "bestPost";
	}
	
	
	public void loadTag(Model model, String tag){
		loadNavbar(model);
		List<Post> original = postRepository.findByPostTag(tag);
		List<Post> shallowCopy = original.subList(0, original.size());
		Collections.reverse(shallowCopy);
		model.addAttribute("Posts",shallowCopy);
		
	}
	@RequestMapping("/tag/wtf")
	public String wtfTagController(Model model){
		loadTag(model, "wtf");
		
		return "index";
	}
	
	@RequestMapping("/tag/funny")
	public String funnyTagController(Model model){
		loadTag(model, "funny");
		
		return "index";
	}
	
	@RequestMapping("/tag/animals")
	public String animalsTagController(Model model){
		loadTag(model, "animals");
		
		return "index";
	}
	
	@RequestMapping("/tag/movies")
	public String moviesTagController(Model model){
		loadTag(model, "movies");
		
		return "index";
	}
	
	@RequestMapping("/tag/savage")
	public String savageTagController(Model model){
		loadTag(model, "savage");
		
		return "index";
	}
	
	@RequestMapping("/tag/anime")
	public String mangaTagController(Model model){
		loadTag(model, "anime");
		
		return "index";
	}
	
	
	
}
