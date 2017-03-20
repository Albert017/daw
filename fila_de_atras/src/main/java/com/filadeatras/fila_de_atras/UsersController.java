package com.filadeatras.fila_de_atras;

import java.util.LinkedList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


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
		Post p1 = new Post("El titulo del post", u2, "savage");
		p1.setMonth("JANUARY");
		Post p2 = new Post("1", u2, "wtf");
		Post p3 =new Post("2", u2, "funny");
		p3.setMonth("JANUARY");
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
			//Si buscas tu propio usuario que te mande a profile
			if(userComponent.isLoggedUser()){
				if(viewUser.equals(userComponent.getLoggedUser())){
					loadProfileNavbar(model);
					List<Post> postListCurr = userRepository.findByusername(userComponent.getLoggedUser().getUsername()).getUserPosts();
					model.addAttribute("Posts",postListCurr);
					
					return "profile";
					
				}
			}
			List<Post> postListCurr = viewUser.getUserPosts();
			Post ranPost = null;
			if (postListCurr.size()>0){
				ranPost = postListCurr.get((int)(Math.random()*postListCurr.size()));
			}
			model.addAttribute("UserViewUser",viewUser);
			model.addAttribute("UserViewPost",ranPost);
			if(userComponent.isLoggedUser()){
				User conectedUser = userRepository.findOne(userComponent.getLoggedUser().getId());
				model.addAttribute("isFollowing", conectedUser.isFollowing(viewUser));
			}
			
			
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
		LinkedList<Follower> followers = new LinkedList<Follower>();
		for(int i=0; i< conectedUser.getUserFollowers().size();i++){
			User user = conectedUser.getUserFollowers().get(i);
			boolean isFollowing = conectedUser.getUserFollowing().contains(user);
			followers.addLast(new Follower(user, isFollowing));	
		}
		model.addAttribute("followersList", followers);
		
		
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
	public String unfollowUser_followingController(Model model, @PathVariable String username){
		
		
		User conectedUser = userRepository.findOne(userComponent.getLoggedUser().getId());
		User unfollowUser = userRepository.findByusername(username);
		conectedUser.deleteFollowing(unfollowUser);
		userRepository.save(conectedUser);
		model.addAttribute("followingList", conectedUser.getUserFollowing());
		loadProfileNavbar(model);
		
		return "following";
	}
	
	
	
	@RequestMapping(value="/follow/{username}", method = RequestMethod.POST)
	public String followUser_followersController(Model model, @PathVariable String username){
		
		
		User conectedUser = userRepository.findOne(userComponent.getLoggedUser().getId());
		User followUser = userRepository.findByusername(username);
		conectedUser.addFollowing(followUser);
		userRepository.save(conectedUser);
		LinkedList<Follower> followers = new LinkedList<Follower>();
		for(int i=0; i< conectedUser.getUserFollowers().size();i++){
			User user = conectedUser.getUserFollowers().get(i);
			boolean isFollowing = conectedUser.getUserFollowing().contains(user);
			followers.addLast(new Follower(user, isFollowing));	
		}
		model.addAttribute("followersList", followers);
		loadProfileNavbar(model);
		
		return "followers";
	}
	
	@RequestMapping(value="/user/{username}/follow", method = RequestMethod.POST)
	public String followUser_usersController(Model model, @PathVariable String username){
		
		User followUser = userRepository.findByusername(username);
		if (followUser==null){
			model.addAttribute("ErrorMessage","User not found.");
			return "errorPage";
		} else{
			List<Post> postListCurr = followUser.getUserPosts();
			Post ranPost = null;
			if (postListCurr.size()>0){
				ranPost = postListCurr.get((int)(Math.random()*postListCurr.size()));
			}
			
			
			if(userComponent.isLoggedUser()){
				User conectedUser = userRepository.findOne(userComponent.getLoggedUser().getId());
				conectedUser.addFollowing(followUser);
				userRepository.save(conectedUser);
				model.addAttribute("isFollowing", conectedUser.isFollowing(followUser));
			}
			//model.addAttribute("followersList", conectedUser.getUserFollowers());
			loadProfileNavbar(model);
			model.addAttribute("UserViewUser",followUser);
			model.addAttribute("UserViewPost",ranPost);
			
			return "users";	
		}
	}
	
	
	@RequestMapping(value="/user/{username}/unfollow", method = RequestMethod.POST)
	public String unfollowUser_usersController(Model model, @PathVariable String username){
		
		User followUser = userRepository.findByusername(username);
		if (followUser==null){
			model.addAttribute("ErrorMessage","User not found.");
			return "errorPage";
		} else{
			List<Post> postListCurr = followUser.getUserPosts();
			Post ranPost = null;
			if (postListCurr.size()>0){
				ranPost = postListCurr.get((int)(Math.random()*postListCurr.size()));
			}
			
			
			if(userComponent.isLoggedUser()){
				User conectedUser = userRepository.findOne(userComponent.getLoggedUser().getId());
				conectedUser.deleteFollowing(followUser);
				userRepository.save(conectedUser);
				model.addAttribute("isFollowing", conectedUser.isFollowing(followUser));
			}
			//model.addAttribute("followersList", conectedUser.getUserFollowers());
			loadProfileNavbar(model);
			model.addAttribute("UserViewUser",followUser);
			model.addAttribute("UserViewPost",ranPost);
			
			return "users";	
		}
	}
	
	
	
	
	@RequestMapping("/reports-posts")
	public String profileReportPostsController(Model model){
		
		loadProfileNavbar(model);
		
		model.addAttribute("reportedPostList",postRepository.findAllByreport(true));
	
		return "reports-posts";
	}
	
	@RequestMapping("/reports-users")
	public String profileReportUsersController(Model model){
		
		loadProfileNavbar(model);
		
		model.addAttribute("reportedUserList",userRepository.findAllByreport(true));
	
		return "reports-users";
	}
	
	@RequestMapping("/reports-comments")
	public String profileReportCommentsController(Model model){
		
		loadProfileNavbar(model);
		
		model.addAttribute("reportedCommentList",commentRepository.findAllByreport(true));
	
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
	
	@RequestMapping(value="/deleteReportComment/{id}")
	public String deleteReportCommentController(Model model, @PathVariable Long id){
		Comment p = commentRepository.findOne(id);
		
		commentRepository.delete(p);

		loadProfileNavbar(model);
		
		model.addAttribute("reportedCommentList",commentRepository.findAllByreport(true));
	
		return "profile";
	}
	@RequestMapping(value="/deleteReportUser/{id}")
	public String deleteReportUserController(Model model, @PathVariable Long id){
		User user= userRepository.findOne(id);
		userRepository.delete(user);
		
		loadProfileNavbar(model);
		
		model.addAttribute("reportedUserList",userRepository.findAllByreport(true));
	
		return "profile";
	}
	
	@RequestMapping(value="/deleteReportPost/{id}")
	public String deleteReportPostController(Model model, @PathVariable Long id){
		Post p = postRepository.findOne(id);
		
		postRepository.delete(p);
		
		loadProfileNavbar(model);
		
		model.addAttribute("reportedPostList",postRepository.findAllByreport(true));
	
		return "profile";
	}


	@RequestMapping(value="/falseReportComment/{id}")
	public String handleFalseReportComment(Model model,@PathVariable("id") long id){
		Comment comment= commentRepository.findOne(id);
		comment.setReport(false);
		commentRepository.save(comment);
		
		loadProfileNavbar(model);
		
		model.addAttribute("reportedCommentList",commentRepository.findAllByreport(true));
		
		return "profile";
	}
	@RequestMapping(value="/falseReportUser/{id}")
	public String handleFalseReportUser(Model model,@PathVariable("id") long id){
		User user= userRepository.findOne(id);
		user.setReport(false);
		userRepository.save(user);
		
		loadProfileNavbar(model);
		
		model.addAttribute("reportedUserList",userRepository.findAllByreport(true));
		
		return "profile";
	}
	@RequestMapping(value="/falseReportPost/{id}")
	public String handleFalseReportPost(Model model,@PathVariable("id") long id){
		Post post= postRepository.findOne(id);
		post.setReport(false);
		postRepository.save(post);
		
		loadProfileNavbar(model);
		
		model.addAttribute("reportedPostList",postRepository.findAllByreport(true));
		
		return "profile";
	
	}
	@RequestMapping(value="/uploadProfileNewData/{id}")
	public String uploadProfileNewData(Model model,
			@PathVariable long id,
			@RequestParam ("username") String newName,
			@RequestParam ("email") String newEmail,
			@RequestParam ("biography") String newBio,
			@RequestParam ("location") String newLoc,
			@RequestParam ("links") String newLink){
		
		loadProfileNavbar(model);
		
		User u= userRepository.findOne(id);
		if (u.getId()!=userComponent.getLoggedUser().getId()){
			model.addAttribute("ErrorMessage","Could not edit profile info.");
			return "errorPage";
		}
		try {
			u.setUsername(newName);
			u.setUserEmail(newEmail);
			u.setUserBiography(newBio);
			u.setUserLocation(newLoc);
			u.setUserLink(newLink);
			
			userRepository.save(u);
			userComponent.setLoggedUser(userRepository.findOne(id));
			loadProfileNavbar(model);
			return "profile";
		} catch (Exception e){
			model.addAttribute("ErrorMessage","Oops, an error ocurred. The username/email is probably already in use.");
			return "errorPage";
		}
		
	}
}