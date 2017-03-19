package com.filadeatras.fila_de_atras;

import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import antlr.TokenWithIndex;

@Controller
public class UsersController extends NavbarController{
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private CommentRepository commentRepository;
	
	@Autowired
	private MessageRepository messageRepository;

	@Autowired
	private PostRepository postRepository;
	
	@Autowired
	UserComponent userComponent;
	
	@PostConstruct
	public void init(){
		User u1 = new User("Pepe", "pass", "pepe@a.aa" ,"ROLE_USER");
		User u2 = new User("Sara", "word", "sara@a.aa" ,"ROLE_USER","ROLE_ADMIN");
		userRepository.save(u1);
		userRepository.save(u2);
		u1.addFollowing(u2); // u1 sigue a u2, añadir en la lista de seguidos en u1 a u2
		userRepository.save(u1);
		userRepository.save(u2);
		Message m1 = new Message("Este es el contenido del mensaje", u1,u2);
		messageRepository.save(m1);
		Post p1 = new Post("El titulo del post", u2);
		Post p2 = new Post("1", u2);
		Post p3 =new Post("2", u2);
		p2.setPostUpVotes(10);
		p3.setPostUpVotes(15);
		postRepository.save(p1);
		postRepository.save(p2);
		postRepository.save(p3);
		Comment c1 = new Comment("Esto es el contenido de un comentario",u1,p1);
		commentRepository.save(c1);

	}
	
	@RequestMapping("/user/{reqUserName}")
	public String usersController(Model model,
			@PathVariable String reqUserName){
		loadNavbar(model);
		User viewUser = userRepository.findByusername(reqUserName);
		if (viewUser==null){
			model.addAttribute("ErrorMessage","User not found.");
			return "errorPage";
		} else{
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
	
	@RequestMapping("/profile")
	public String profileController(Model model){
		
		loadProfileNavbar(model);
		List<Post> postListCurr = userRepository.findByusername(userComponent.getLoggedUser().getUsername()).getUserPosts();
		model.addAttribute("Posts",postListCurr);
		
		
		
		
		return "profile";
	}
	
	@RequestMapping("/followers")
	public String profileFollowersController(Model model){
		loadProfileNavbar(model);
		User conectedUser = userRepository.findOne(userComponent.getLoggedUser().getId());
		model.addAttribute("followersList", conectedUser.getUserFollowers());
		
		return "followers";
	}
	
	@RequestMapping("/following")
	public String profileFollowingController(Model model){
		
		loadProfileNavbar(model);
		User conectedUser = userRepository.findOne(userComponent.getLoggedUser().getId());
		model.addAttribute("followingList", conectedUser.getUserFollowing());
		
		return "following";
	}
	
	@RequestMapping(value="/unfollow/{username}", method = RequestMethod.POST)
	public String unfollowUserController(Model model, @PathVariable String username){
		
		loadProfileNavbar(model);
		User conectedUser = userRepository.findOne(userComponent.getLoggedUser().getId());
		User unfollowUser = userRepository.findByusername(username);
		conectedUser.deleteFollowing(unfollowUser);
		userRepository.save(conectedUser);
		model.addAttribute("followingList", conectedUser.getUserFollowing());
		
		return "following";
	}
	
	@RequestMapping(value="/follow/{username}", method = RequestMethod.POST)
	public String followUserController(Model model, @PathVariable String username){
		
		loadProfileNavbar(model);
		User conectedUser = userRepository.findOne(userComponent.getLoggedUser().getId());
		User followUser = userRepository.findByusername(username);
		conectedUser.addFollowing(followUser);
		userRepository.save(conectedUser);
		model.addAttribute("followersList", conectedUser.getUserFollowing());
		
		return "followers";
	}
	
	
	
	
	@RequestMapping("/reports-posts")
	public String profileReportPostsController(Model model){
		
		loadProfileNavbar(model);
	
		return "reports-posts";
	}
	
	@RequestMapping("/reports-users")
	public String profileReportUsersController(Model model){
		
		loadProfileNavbar(model);
	
		return "reports-users";
	}
	
	@RequestMapping("/reports-comments")
	public String profileReportCommentsController(Model model){
		
		loadProfileNavbar(model);
	
		return "reports-comments";
	}
	
	@RequestMapping("/settings")
	public String settingsController(Model model){
		
		loadProfileNavbar(model);
	
		return "user-Settings";
	}
	
	@RequestMapping("/settings-password")
	public String settingsPasswordController(Model model){
		
		loadNavbar(model);
	
		return "user-Settings-password";
	}
	
	@RequestMapping("/settings-notifications")
	public String settingsNotificationsController(Model model){
		
		loadNavbar(model);
	
		return "user-Settings-notifications";
	}
	
	@RequestMapping("/edit-profile")
	public String editProfileController(Model model){
		
		loadProfileNavbar(model);
	
		return "user-design-profile";
	}
	
	@RequestMapping(value="/profile/delete/post/{id}",  method = RequestMethod.POST)
	public String deletePostController(Model model, @PathVariable Long id){
		Post p = postRepository.findOne(id);
		if(p.getPostComments().size()>0){
			for(int i=0; i<p.getPostComments().size();i++){
				commentRepository.delete(p.getPostComments().get(i));
			}	
		}
		
		postRepository.delete(p);

		loadProfileNavbar(model);
		List<Post> postListCurr = userRepository.findByusername(userComponent.getLoggedUser().getUsername()).getUserPosts();
		model.addAttribute("Posts",postListCurr);
	
		return "profile";
	}
}