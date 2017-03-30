package com.filadeatras.fila_de_atras.controllers;

import java.util.LinkedList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.filadeatras.fila_de_atras.UserComponent;
import com.filadeatras.fila_de_atras.models.Comment;
import com.filadeatras.fila_de_atras.models.Follower;
import com.filadeatras.fila_de_atras.models.Post;
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.services.CommentService;
import com.filadeatras.fila_de_atras.services.PostService;
import com.filadeatras.fila_de_atras.services.UserService;


@Controller
public class UsersController extends NavbarController{
	@Autowired
	private UserService userService;
	
	@Autowired
	private CommentService commentService;

	@Autowired
	private PostService postService;
	
	@Autowired
	UserComponent userComponent;
	
	@PostConstruct
	public void init(){
		

	}
	
	@RequestMapping("/user/{reqUserName}")
	public String usersController(Model model,
			@PathVariable String reqUserName){
		loadNavbar(model);
		User viewUser = userService.findByusername(reqUserName);
		if (viewUser==null){
			model.addAttribute("ErrorMessage","User not found.");
			return "errorPage";
		} else{
			//Si buscas tu propio usuario que te mande a profile
			if(userComponent.isLoggedUser()){
				if(viewUser.equals(userComponent.getLoggedUser())){
					loadProfileNavbar(model);
					List<Post> postListCurr = userService.findByusername(userComponent.getLoggedUser().getUsername()).getUserPosts();
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
				User conectedUser = userService.findOne(userComponent.getLoggedUser().getId());
				model.addAttribute("isFollowing", conectedUser.isFollowing(viewUser));
			}
			
			
			return "users";
		}
	}
	
	@RequestMapping("/profile")
	public String profileController(Model model){
		
		loadProfileNavbar(model);
		List<Post> postListCurr = userService.findByusername(userComponent.getLoggedUser().getUsername()).getUserPosts();
		model.addAttribute("Posts",postListCurr);
		
		return "profile";
	}
	
	@RequestMapping("/followers")
	public String profileFollowersController(Model model){
		loadProfileNavbar(model);
		User conectedUser = userService.findOne(userComponent.getLoggedUser().getId());
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
		User conectedUser = userService.findOne(userComponent.getLoggedUser().getId());
		model.addAttribute("followingList", conectedUser.getUserFollowing());
		
		return "following";
	}
	
	@RequestMapping(value="/unfollow/{username}", method = RequestMethod.POST)
	public String unfollowUser_followingController(Model model, @PathVariable String username){
		
		
		User conectedUser = userService.findOne(userComponent.getLoggedUser().getId());
		User unfollowUser = userService.findByusername(username);
		conectedUser.deleteFollowing(unfollowUser);
		userService.save(conectedUser);
		model.addAttribute("followingList", conectedUser.getUserFollowing());
		loadProfileNavbar(model);
		
		return "following";
	}
	
	
	
	@RequestMapping(value="/follow/{username}", method = RequestMethod.POST)
	public String followUser_followersController(Model model, @PathVariable String username){
		
		
		User conectedUser = userService.findOne(userComponent.getLoggedUser().getId());
		User followUser = userService.findByusername(username);
		conectedUser.addFollowing(followUser);
		userService.save(conectedUser);
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
		
		User followUser = userService.findByusername(username);
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
				User conectedUser = userService.findOne(userComponent.getLoggedUser().getId());
				conectedUser.addFollowing(followUser);
				userService.save(conectedUser);
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
		
		User followUser = userService.findByusername(username);
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
				User conectedUser = userService.findOne(userComponent.getLoggedUser().getId());
				conectedUser.deleteFollowing(followUser);
				userService.save(conectedUser);
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
		
		model.addAttribute("reportedPostList",postService.findAllByreport(true));
	
		return "reports-posts";
	}
	
	@RequestMapping("/reports-users")
	public String profileReportUsersController(Model model){
		
		loadProfileNavbar(model);
		
		model.addAttribute("reportedUserList",userService.findAllByreport(true));
	
		return "reports-users";
	}
	
	@RequestMapping("/reports-comments")
	public String profileReportCommentsController(Model model){
		
		loadProfileNavbar(model);
		
		model.addAttribute("reportedCommentList",commentService.findAllByreport(true));
	
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
		Post p = postService.findOne(id);
		if(p.getPostComments().size()>0){
			for(int i=0; i<p.getPostComments().size();i++){
				commentService.delete(p.getPostComments().get(i));
			}	
		}
		
		postService.delete(p);

		loadProfileNavbar(model);
		List<Post> postListCurr = userService.findByusername(userComponent.getLoggedUser().getUsername()).getUserPosts();
		model.addAttribute("Posts",postListCurr);
	
		return "profile";
	}
	
	@RequestMapping(value="/deleteReportComment/{id}")
	public String deleteReportCommentController(Model model, @PathVariable Long id){
		Comment p = commentService.findOne(id);
		
		commentService.delete(p);

		loadProfileNavbar(model);
		
		model.addAttribute("reportedCommentList",commentService.findAllByreport(true));
	
		return "profile";
	}
	@RequestMapping(value="/deleteReportUser/{id}")
	public String deleteReportUserController(Model model, @PathVariable Long id){
		User user= userService.findOne(id);
		userService.delete(user);
		
		loadProfileNavbar(model);
		
		model.addAttribute("reportedUserList",userService.findAllByreport(true));
	
		return "profile";
	}
	
	@RequestMapping(value="/deleteReportPost/{id}")
	public String deleteReportPostController(Model model, @PathVariable Long id){
		Post p = postService.findOne(id);
		
		postService.delete(p);
		
		loadProfileNavbar(model);
		
		model.addAttribute("reportedPostList",postService.findAllByreport(true));
	
		return "profile";
	}


	@RequestMapping(value="/falseReportComment/{id}")
	public String handleFalseReportComment(Model model,@PathVariable("id") long id){
		Comment comment= commentService.findOne(id);
		comment.setReport(false);
		commentService.save(comment);
		
		loadProfileNavbar(model);
		
		model.addAttribute("reportedCommentList",commentService.findAllByreport(true));
		
		return "profile";
	}
	@RequestMapping(value="/falseReportUser/{id}")
	public String handleFalseReportUser(Model model,@PathVariable("id") long id){
		User user= userService.findOne(id);
		user.setReport(false);
		userService.save(user);
		
		loadProfileNavbar(model);
		
		model.addAttribute("reportedUserList",userService.findAllByreport(true));
		
		return "profile";
	}
	@RequestMapping(value="/falseReportPost/{id}")
	public String handleFalseReportPost(Model model,@PathVariable("id") long id){
		Post post= postService.findOne(id);
		post.setReport(false);
		postService.save(post);
		
		loadProfileNavbar(model);
		
		model.addAttribute("reportedPostList",postService.findAllByreport(true));
		
		return "profile";
	
	}
	
	@RequestMapping(value="/userChangePassword")
	public String changeUserPassword(Model model,
			@RequestParam(value="oldPass", required=true) String oPass,
			@RequestParam(value="newPass", required=true) String nPass){
		if(!new BCryptPasswordEncoder().matches(oPass, userComponent.getLoggedUser().getUserPasswordHash())){
			loadProfileNavbar(model);
			model.addAttribute("ErrorMessage","Could not edit profile info.");
			return "errorPage";
		}else{
			User u= userService.findOne(userComponent.getLoggedUser().getId());
			u.setUserPasswordHash(new BCryptPasswordEncoder().encode(nPass));
			userService.save(u);
			userComponent.setLoggedUser(u);
			return "redirect:/profile";
		}
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
		
		User u= userService.findOne(id);
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
			
			userService.save(u);
			userComponent.setLoggedUser(userService.findOne(id));
			loadProfileNavbar(model);
			return "profile";
		} catch (Exception e){
			model.addAttribute("ErrorMessage","Oops, an error ocurred. The username/email is probably already in use.");
			return "errorPage";
		}
		
	}
}