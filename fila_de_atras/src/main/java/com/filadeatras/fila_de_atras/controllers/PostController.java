package com.filadeatras.fila_de_atras.controllers;

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

import com.filadeatras.fila_de_atras.UserComponent;
import com.filadeatras.fila_de_atras.models.Post;
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.services.PostService;
import com.filadeatras.fila_de_atras.services.UserService;

@Controller
public class PostController extends NavbarController{
	@Autowired
	private PostService postService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	UserComponent userComponent;
	
	@PostConstruct
	public void init(){
				
	}
	@RequestMapping("/post/{id}")
	public String postController(Model model,
			@PathVariable Long id){
		
		loadNavbar(model);
		Post post1= postService.findFirst1ByYearOrderByPostUpVotesDesc(LocalDateTime.now().getYear()).get(0);
		if(post1 != null){
			model.addAttribute("BestPostOfYear",post1);
		}
		Post post2= postService.findTop1BypostUpVotesMonth(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear()).get(0);
		if(post2 != null){
			model.addAttribute("BestPostOfMonth",post2);
		}
		Post post3= postService.findTop1BypostUpVotesDay(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear(), LocalDateTime.now().getDayOfMonth()).get(0);
		if(post3 != null){
			model.addAttribute("BestPostOfDay",post3);
		}
		int currentDWeek= LocalDateTime.now().getDayOfWeek().getValue();
		int postWeek=(LocalDateTime.now().getDayOfYear() - currentDWeek + 10)/7;
		int currentyear= LocalDateTime.now().getYear();
		Post p4=null;
		if(postWeek==0){
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear, 53, currentyear-1).get(0);
		}
		else{
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear).get(0);
		}
		if(p4!=null)
			model.addAttribute("BestPostOfWeek", p4);
		Post currPost = postService.findOne(id);
		model.addAttribute("Post",currPost);
		model.addAttribute("PostComments",currPost.getPostComments());
		return "postIndex";
	}
	
	@RequestMapping(value="/profile/post/{id}/up-vote", method = RequestMethod.POST)
	public String postProfileUpVoteController(Model model,
			@PathVariable Long id){
	
		Post currPost = postService.findOne(id);
		currPost.setPostUpVotes(currPost.getPostUpVotes()+1);
		postService.save(currPost);
		
		List<Post> postListCurr = userService.findByusername(userComponent.getLoggedUser().getUsername()).getUserPosts();
		model.addAttribute("Posts",postListCurr);
		
		loadProfileNavbar(model);
		
		return "profile";
	}
	
	@RequestMapping(value="/profile/post/{id}/down-vote", method = RequestMethod.POST)
	public String postProfileDownVoteController(Model model,
			@PathVariable Long id){
	
		Post currPost = postService.findOne(id);
		currPost.setPostDownVotes(currPost.getPostDownVotes()+1);
		postService.save(currPost);
		
		List<Post> postListCurr = userService.findByusername(userComponent.getLoggedUser().getUsername()).getUserPosts();
		model.addAttribute("Posts",postListCurr);
		
		loadProfileNavbar(model);
		
		return "profile";
	}
	
	@RequestMapping(value="/index/{id}/down-vote", method = RequestMethod.POST)
	public String postIndexDownVoteController(Model model,
			@PathVariable Long id){
		Post post1= postService.findFirst1ByYearOrderByPostUpVotesDesc(LocalDateTime.now().getYear()).get(0);
		if(post1 != null){
			model.addAttribute("BestPostOfYear",post1);
		}
		Post post2= postService.findTop1BypostUpVotesMonth(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear()).get(0);
		if(post2 != null){
			model.addAttribute("BestPostOfMonth",post2);
		}
		Post post3= postService.findTop1BypostUpVotesDay(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear(), LocalDateTime.now().getDayOfMonth()).get(0);
		if(post3 != null){
			model.addAttribute("BestPostOfDay",post3);
		}
		int currentDWeek= LocalDateTime.now().getDayOfWeek().getValue();
		int postWeek=(LocalDateTime.now().getDayOfYear() - currentDWeek + 10)/7;
		int currentyear= LocalDateTime.now().getYear();
		Post p4=null;
		if(postWeek==0){
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear, 53, currentyear-1).get(0);
		}
		else{
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear).get(0);
		}
		if(p4!=null)
			model.addAttribute("BestPostOfWeek", p4);
		Post currPost = postService.findOne(id);
		currPost.setPostDownVotes(currPost.getPostDownVotes()+1);
		postService.save(currPost);
		
		loadNavbar(model);
		List<Post> original = postService.findAll();
		List<Post> shallowCopy = original.subList(0, original.size());
		Collections.reverse(shallowCopy);
		model.addAttribute("Posts",shallowCopy);
		
		
		return "index";
	}
	
	@RequestMapping(value="/index/{id}/up-vote", method = RequestMethod.POST)
	public String postIndexUpVoteController(Model model,
			@PathVariable Long id){
		Post post1= postService.findFirst1ByYearOrderByPostUpVotesDesc(LocalDateTime.now().getYear()).get(0);
		if(post1 != null){
			model.addAttribute("BestPostOfYear",post1);
		}
		Post post2= postService.findTop1BypostUpVotesMonth(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear()).get(0);
		if(post2 != null){
			model.addAttribute("BestPostOfMonth",post2);
		}
		Post post3= postService.findTop1BypostUpVotesDay(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear(), LocalDateTime.now().getDayOfMonth()).get(0);
		if(post3 != null){
			model.addAttribute("BestPostOfDay",post3);
		}
		int currentDWeek= LocalDateTime.now().getDayOfWeek().getValue();
		int postWeek=(LocalDateTime.now().getDayOfYear() - currentDWeek + 10)/7;
		int currentyear= LocalDateTime.now().getYear();
		Post p4=null;
		if(postWeek==0){
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear, 53, currentyear-1).get(0);
		}
		else{
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear).get(0);
		}
		if(p4!=null)
			model.addAttribute("BestPostOfWeek", p4);
		Post currPost = postService.findOne(id);
		currPost.setPostUpVotes(currPost.getPostUpVotes()+1);
		postService.save(currPost);
		
		//return "index";
		return "redirect:/index";
	}
	
	@RequestMapping("/post/{id}/up-vote")
	public String postUpVoteController(Model model,
			@PathVariable Long id){
		
		loadNavbar(model);
		Post post1= postService.findFirst1ByYearOrderByPostUpVotesDesc(LocalDateTime.now().getYear()).get(0);
		if(post1 != null){
			model.addAttribute("BestPostOfYear",post1);
		}
		Post post2= postService.findTop1BypostUpVotesMonth(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear()).get(0);
		if(post2 != null){
			model.addAttribute("BestPostOfMonth",post2);
		}
		Post post3= postService.findTop1BypostUpVotesDay(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear(), LocalDateTime.now().getDayOfMonth()).get(0);
		if(post3 != null){
			model.addAttribute("BestPostOfDay",post3);
		}
		int currentDWeek= LocalDateTime.now().getDayOfWeek().getValue();
		int postWeek=(LocalDateTime.now().getDayOfYear() - currentDWeek + 10)/7;
		int currentyear= LocalDateTime.now().getYear();
		Post p4=null;
		if(postWeek==0){
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear, 53, currentyear-1).get(0);
		}
		else{
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear).get(0);
		}
		if(p4!=null)
			model.addAttribute("BestPostOfWeek", p4);
		Post currPost = postService.findOne(id);
		currPost.setPostUpVotes(currPost.getPostUpVotes()+1);
		postService.save(currPost);
		
		model.addAttribute("Post",currPost);
		model.addAttribute("PostComments",currPost.getPostComments());
		
		return "postIndex";
	}
	
	@RequestMapping("/post/{id}/down-vote")
	public String postDownVoteController(Model model,
			@PathVariable Long id){
		
		loadNavbar(model);
		Post post1= postService.findFirst1ByYearOrderByPostUpVotesDesc(LocalDateTime.now().getYear()).get(0);
		if(post1 != null){
			model.addAttribute("BestPostOfYear",post1);
		}
		Post post2= postService.findTop1BypostUpVotesMonth(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear()).get(0);
		if(post2 != null){
			model.addAttribute("BestPostOfMonth",post2);
		}
		Post post3= postService.findTop1BypostUpVotesDay(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear(), LocalDateTime.now().getDayOfMonth()).get(0);
		if(post3 != null){
			model.addAttribute("BestPostOfDay",post3);
		}
		int currentDWeek= LocalDateTime.now().getDayOfWeek().getValue();
		int postWeek=(LocalDateTime.now().getDayOfYear() - currentDWeek + 10)/7;
		int currentyear= LocalDateTime.now().getYear();
		Post p4=null;
		if(postWeek==0){
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear, 53, currentyear-1).get(0);
		}
		else{
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear).get(0);
		}
		if(p4!=null)
			model.addAttribute("BestPostOfWeek", p4);
		Post currPost = postService.findOne(id);
		currPost.setPostDownVotes(currPost.getPostDownVotes()+1);
		postService.save(currPost);
		model.addAttribute("Post",currPost);
		model.addAttribute("PostComments",currPost.getPostComments());
		return "postIndex";
	}
	
	
	
	@RequestMapping("/user/{username}/{id}/up-vote")
	public String usertUpVoteController(Model model, @PathVariable String username,
			@PathVariable Long id){
		loadNavbar(model);
		User viewUser = userService.findByusername(username);
		if (viewUser==null){
			model.addAttribute("ErrorMessage","User not found.");
			return "errorPage";
		} else{
			Post currPost = postService.findOne(id);
			currPost.setPostUpVotes(currPost.getPostUpVotes()+1);
			postService.save(currPost);
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
		User viewUser = userService.findByusername(username);
		if (viewUser==null){
			model.addAttribute("ErrorMessage","User not found.");
			return "errorPage";
		} else{
			Post currPost = postService.findOne(id);
			currPost.setPostDownVotes(currPost.getPostDownVotes()+1);
			postService.save(currPost);
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
	@RequestMapping("/bestPostMonth")
	public String bestPostMonth(Model model){
		Post post1= postService.findFirst1ByYearOrderByPostUpVotesDesc(LocalDateTime.now().getYear()).get(0);
		if(post1 != null){
			model.addAttribute("BestPostOfYear",post1);
		}
		Post post2= postService.findTop1BypostUpVotesMonth(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear()).get(0);
		if(post2 != null){
			model.addAttribute("BestPostOfMonth",post2);
		}
		Post post3= postService.findTop1BypostUpVotesDay(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear(), LocalDateTime.now().getDayOfMonth()).get(0);
		if(post3 != null){
			model.addAttribute("BestPostOfDay",post3);
		}
		int currentDWeek= LocalDateTime.now().getDayOfWeek().getValue();
		int postWeek=(LocalDateTime.now().getDayOfYear() - currentDWeek + 10)/7;
		int currentyear= LocalDateTime.now().getYear();
		Post p4=null;
		if(postWeek==0){
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear, 53, currentyear-1).get(0);
		}
		else{
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear).get(0);
		}
		if(p4!=null)
			model.addAttribute("BestPostOfWeek", p4);
		String currentMonth= LocalDateTime.now().getMonth().toString();
		System.out.println(currentMonth);
		int currentYear=LocalDateTime.now().getYear();
		Post bestPost = postService.findTop1BypostUpVotesMonth(currentMonth, currentYear).get(0);
		model.addAttribute("Post", bestPost);
		model.addAttribute("PostComments", bestPost.getPostComments());
		model.addAttribute("best", "del mes");
		return "bestPost";
	}
	
	@RequestMapping("/bestPostYear")
	public String bestPostYear(Model model){
		Post post1= postService.findFirst1ByYearOrderByPostUpVotesDesc(LocalDateTime.now().getYear()).get(0);
		if(post1 != null){
			model.addAttribute("BestPostOfYear",post1);
		}
		Post post2= postService.findTop1BypostUpVotesMonth(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear()).get(0);
		if(post2 != null){
			model.addAttribute("BestPostOfMonth",post2);
		}
		Post post3= postService.findTop1BypostUpVotesDay(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear(), LocalDateTime.now().getDayOfMonth()).get(0);
		if(post3 != null){
			model.addAttribute("BestPostOfDay",post3);
		}
		int currentDWeek= LocalDateTime.now().getDayOfWeek().getValue();
		int postWeek=(LocalDateTime.now().getDayOfYear() - currentDWeek + 10)/7;
		int currentyear= LocalDateTime.now().getYear();
		Post p4=null;
		if(postWeek==0){
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear, 53, currentyear-1).get(0);
		}
		else{
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear).get(0);
		}
		if(p4!=null)
			model.addAttribute("BestPostOfWeek", p4);
		int currentYear= LocalDateTime.now().getYear();
		Post bestPost = postService.findFirst1ByYearOrderByPostUpVotesDesc(currentYear).get(0);
		model.addAttribute("Post", bestPost);
		model.addAttribute("PostComments", bestPost.getPostComments());
		model.addAttribute("best", "del año");
		return "bestPost";
	}
	
	@RequestMapping("/bestPostDay")
	public String bestPostDay(Model model){
		Post post1= postService.findFirst1ByYearOrderByPostUpVotesDesc(LocalDateTime.now().getYear()).get(0);
		if(post1 != null){
			model.addAttribute("BestPostOfYear",post1);
		}
		Post post2= postService.findTop1BypostUpVotesMonth(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear()).get(0);
		if(post2 != null){
			model.addAttribute("BestPostOfMonth",post2);
		}
		Post post3= postService.findTop1BypostUpVotesDay(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear(), LocalDateTime.now().getDayOfMonth()).get(0);
		if(post3 != null){
			model.addAttribute("BestPostOfDay",post3);
		}
		int currentDWeek= LocalDateTime.now().getDayOfWeek().getValue();
		int postWeek=(LocalDateTime.now().getDayOfYear() - currentDWeek + 10)/7;
		int currentyear= LocalDateTime.now().getYear();
		Post p4=null;
		if(postWeek==0){
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear, 53, currentyear-1).get(0);
		}
		else{
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear).get(0);
		}
		if(p4!=null)
			model.addAttribute("BestPostOfWeek", p4);
		String currentMonth= LocalDateTime.now().getMonth().toString();
		int currentDay = LocalDateTime.now().getDayOfMonth();
		int currentYear=LocalDateTime.now().getYear();
		Post bestPost = postService.findTop1BypostUpVotesDay(currentMonth, currentYear, currentDay).get(0);
		model.addAttribute("Post", bestPost);
		model.addAttribute("PostComments", bestPost.getPostComments());
		model.addAttribute("best", "del día");
		return "bestPost";
	}
	
	@RequestMapping("/bestPostWeek")
	public String bestPostWeek(Model model){
		Post post1= postService.findFirst1ByYearOrderByPostUpVotesDesc(LocalDateTime.now().getYear()).get(0);
		if(post1 != null){
			model.addAttribute("BestPostOfYear",post1);
		}
		Post post2= postService.findTop1BypostUpVotesMonth(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear()).get(0);
		if(post2 != null){
			model.addAttribute("BestPostOfMonth",post2);
		}
		Post post3= postService.findTop1BypostUpVotesDay(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear(), LocalDateTime.now().getDayOfMonth()).get(0);
		if(post3 != null){
			model.addAttribute("BestPostOfDay",post3);
		}
		int currentDWeek= LocalDateTime.now().getDayOfWeek().getValue();
		int postWee=(LocalDateTime.now().getDayOfYear() - currentDWeek + 10)/7;
		int currentyear= LocalDateTime.now().getYear();
		Post p4=null;
		if(postWee==0){
			p4 = postService.findTop1BypostUpVotesWeek(postWee, currentyear, 53, currentyear-1).get(0);
		}
		else{
			p4 = postService.findTop1BypostUpVotesWeek(postWee, currentyear).get(0);
		}
		if(p4!=null)
			model.addAttribute("BestPostOfWeek", p4);
		int currentDayofTheWeek= LocalDateTime.now().getDayOfWeek().getValue();
		int postWeek=(LocalDateTime.now().getDayOfYear() - currentDayofTheWeek + 10)/7;
		int currentYear= LocalDateTime.now().getYear();
		Post bestPost=null;
		if(postWeek==0){
			bestPost = postService.findTop1BypostUpVotesWeek(postWeek, currentYear, 53, currentYear-1).get(0);
		}
		else{
			bestPost = postService.findTop1BypostUpVotesWeek(postWeek, currentYear).get(0);
		}
		model.addAttribute("Post", bestPost);
		model.addAttribute("PostComments", bestPost.getPostComments());
		model.addAttribute("best", "de la semana");
		return "bestPost";
	}
	
	public void loadTag(Model model, String tag){
		loadNavbar(model);
		List<Post> original = postService.findByPostTag(tag);
		List<Post> shallowCopy = original.subList(0, original.size());
		Collections.reverse(shallowCopy);
		model.addAttribute("Posts",shallowCopy);
		
	}
	@RequestMapping("/tag/wtf")
	public String wtfTagController(Model model){
		loadTag(model, "wtf");
		Post post1= postService.findFirst1ByYearOrderByPostUpVotesDesc(LocalDateTime.now().getYear()).get(0);
		if(post1 != null){
			model.addAttribute("BestPostOfYear",post1);
		}
		Post post2= postService.findTop1BypostUpVotesMonth(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear()).get(0);
		if(post2 != null){
			model.addAttribute("BestPostOfMonth",post2);
		}
		Post post3= postService.findTop1BypostUpVotesDay(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear(), LocalDateTime.now().getDayOfMonth()).get(0);
		if(post3 != null){
			model.addAttribute("BestPostOfDay",post3);
		}
		int currentDWeek= LocalDateTime.now().getDayOfWeek().getValue();
		int postWeek=(LocalDateTime.now().getDayOfYear() - currentDWeek + 10)/7;
		int currentyear= LocalDateTime.now().getYear();
		Post p4=null;
		if(postWeek==0){
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear, 53, currentyear-1).get(0);
		}
		else{
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear).get(0);
		}
		if(p4!=null)
			model.addAttribute("BestPostOfWeek", p4);
		return "index";
	}
	
	@RequestMapping("/tag/funny")
	public String funnyTagController(Model model){
		loadTag(model, "funny");
		Post post1= postService.findFirst1ByYearOrderByPostUpVotesDesc(LocalDateTime.now().getYear()).get(0);
		if(post1 != null){
			model.addAttribute("BestPostOfYear",post1);
		}
		Post post2= postService.findTop1BypostUpVotesMonth(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear()).get(0);
		if(post2 != null){
			model.addAttribute("BestPostOfMonth",post2);
		}
		Post post3= postService.findTop1BypostUpVotesDay(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear(), LocalDateTime.now().getDayOfMonth()).get(0);
		if(post3 != null){
			model.addAttribute("BestPostOfDay",post3);
		}
		int currentDWeek= LocalDateTime.now().getDayOfWeek().getValue();
		int postWeek=(LocalDateTime.now().getDayOfYear() - currentDWeek + 10)/7;
		int currentyear= LocalDateTime.now().getYear();
		Post p4=null;
		if(postWeek==0){
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear, 53, currentyear-1).get(0);
		}
		else{
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear).get(0);
		}
		if(p4!=null)
			model.addAttribute("BestPostOfWeek", p4);
		return "index";
	}
	
	@RequestMapping("/tag/animals")
	public String animalsTagController(Model model){
		loadTag(model, "animals");
		Post post1= postService.findFirst1ByYearOrderByPostUpVotesDesc(LocalDateTime.now().getYear()).get(0);
		if(post1 != null){
			model.addAttribute("BestPostOfYear",post1);
		}
		Post post2= postService.findTop1BypostUpVotesMonth(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear()).get(0);
		if(post2 != null){
			model.addAttribute("BestPostOfMonth",post2);
		}
		Post post3= postService.findTop1BypostUpVotesDay(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear(), LocalDateTime.now().getDayOfMonth()).get(0);
		if(post3 != null){
			model.addAttribute("BestPostOfDay",post3);
		}
		int currentDWeek= LocalDateTime.now().getDayOfWeek().getValue();
		int postWeek=(LocalDateTime.now().getDayOfYear() - currentDWeek + 10)/7;
		int currentyear= LocalDateTime.now().getYear();
		Post p4=null;
		if(postWeek==0){
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear, 53, currentyear-1).get(0);
		}
		else{
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear).get(0);
		}
		if(p4!=null)
			model.addAttribute("BestPostOfWeek", p4);
		return "index";
	}
	
	@RequestMapping("/tag/movies")
	public String moviesTagController(Model model){
		loadTag(model, "movies");
		Post post1= postService.findFirst1ByYearOrderByPostUpVotesDesc(LocalDateTime.now().getYear()).get(0);
		if(post1 != null){
			model.addAttribute("BestPostOfYear",post1);
		}
		Post post2= postService.findTop1BypostUpVotesMonth(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear()).get(0);
		if(post2 != null){
			model.addAttribute("BestPostOfMonth",post2);
		}
		Post post3= postService.findTop1BypostUpVotesDay(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear(), LocalDateTime.now().getDayOfMonth()).get(0);
		if(post3 != null){
			model.addAttribute("BestPostOfDay",post3);
		}
		int currentDWeek= LocalDateTime.now().getDayOfWeek().getValue();
		int postWeek=(LocalDateTime.now().getDayOfYear() - currentDWeek + 10)/7;
		int currentyear= LocalDateTime.now().getYear();
		Post p4=null;
		if(postWeek==0){
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear, 53, currentyear-1).get(0);
		}
		else{
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear).get(0);
		}
		if(p4!=null)
			model.addAttribute("BestPostOfWeek", p4);
		return "index";
	}
	
	@RequestMapping("/tag/savage")
	public String savageTagController(Model model){
		loadTag(model, "savage");
		Post post1= postService.findFirst1ByYearOrderByPostUpVotesDesc(LocalDateTime.now().getYear()).get(0);
		if(post1 != null){
			model.addAttribute("BestPostOfYear",post1);
		}
		Post post2= postService.findTop1BypostUpVotesMonth(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear()).get(0);
		if(post2 != null){
			model.addAttribute("BestPostOfMonth",post2);
		}
		Post post3= postService.findTop1BypostUpVotesDay(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear(), LocalDateTime.now().getDayOfMonth()).get(0);
		if(post3 != null){
			model.addAttribute("BestPostOfDay",post3);
		}
		int currentDWeek= LocalDateTime.now().getDayOfWeek().getValue();
		int postWeek=(LocalDateTime.now().getDayOfYear() - currentDWeek + 10)/7;
		int currentyear= LocalDateTime.now().getYear();
		Post p4=null;
		if(postWeek==0){
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear, 53, currentyear-1).get(0);
		}
		else{
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear).get(0);
		}
		if(p4!=null)
			model.addAttribute("BestPostOfWeek", p4);
		return "index";
	}
	
	@RequestMapping("/tag/anime")
	public String mangaTagController(Model model){
		loadTag(model, "anime");
		Post post1= postService.findFirst1ByYearOrderByPostUpVotesDesc(LocalDateTime.now().getYear()).get(0);
		if(post1 != null){
			model.addAttribute("BestPostOfYear",post1);
		}
		Post post2= postService.findTop1BypostUpVotesMonth(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear()).get(0);
		if(post2 != null){
			model.addAttribute("BestPostOfMonth",post2);
		}
		Post post3= postService.findTop1BypostUpVotesDay(LocalDateTime.now().getMonth().toString(), LocalDateTime.now().getYear(), LocalDateTime.now().getDayOfMonth()).get(0);
		if(post3 != null){
			model.addAttribute("BestPostOfDay",post3);
		}
		int currentDWeek= LocalDateTime.now().getDayOfWeek().getValue();
		int postWeek=(LocalDateTime.now().getDayOfYear() - currentDWeek + 10)/7;
		int currentyear= LocalDateTime.now().getYear();
		Post p4=null;
		if(postWeek==0){
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear, 53, currentyear-1).get(0);
		}
		else{
			p4 = postService.findTop1BypostUpVotesWeek(postWeek, currentyear).get(0);
		}
		if(p4!=null)
			model.addAttribute("BestPostOfWeek", p4);
		return "index";
	}
	
	
	
}
