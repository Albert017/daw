package com.filadeatras.fila_de_atras.controllers;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.filadeatras.fila_de_atras.UserComponent;
import com.filadeatras.fila_de_atras.models.Comment;
import com.filadeatras.fila_de_atras.models.Post;
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.services.CommentService;
import com.filadeatras.fila_de_atras.services.PostService;
import com.filadeatras.fila_de_atras.services.UserService;


@Controller
public class IndexController extends NavbarController{
	
	private static final String FILES_FOLDER = "files";

	private static final String AVATARS_FOLDER = "avatars";
	
	private static final String HEADERS_FOLDER = "headers";
		
	@Autowired
	PostService postService;
	
	@Autowired
	UserService userService;
	
	@Autowired
	CommentService commentService;
	
	@Autowired
	UserComponent userComponent;
	
	
	@RequestMapping(value={"/","/index"})
	public String indexController(Model model, HttpServletRequest request){
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
		if(bestPost!=null)
			model.addAttribute("BestPostOfWeek", bestPost);
		List<Post> original = postService.findAll();
		Collections.reverse(original);
		model.addAttribute("Posts",original.subList(0,Math.min(original.size(), 10)));
		return "indexNew";
	}
	
	@RequestMapping(value={"/indexScroll/{interval}"})
	public String indexScrollPosts(Model model,
			@PathVariable int interval){
		List<Post> original = postService.findAll();
		Collections.reverse(original);
		List<Post> newPosts = null;
		if (interval*10<original.size()){
			if ((interval+1)*10<=original.size()){
				newPosts = original.subList(interval*10, (interval+1)*10);
			} else {
				newPosts = original.subList(interval*10,original.size());
			}
		}
		model.addAttribute("Posts",newPosts);
		return "postScroll";
	}
	
	@RequestMapping(value={"/trending"})
	public String indexTrendingController(Model model, HttpServletRequest request){
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
		if(bestPost!=null)
			model.addAttribute("BestPostOfWeek", bestPost);
		loadNavbar(model);
		List<Post> original = postService.findAllByOrderByPostUpVotesDesc();
		model.addAttribute("Posts",original);
		return "indexTrending";
	}
	
	@RequestMapping(value={"/random"})
	public String indexRandomController(Model model, HttpServletRequest request){
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
		if(bestPost!=null)
			model.addAttribute("BestPostOfWeek", bestPost);
		loadNavbar(model);
		List<Post> postListCurr = postService.findAll();
		Post ranPost = null;
		if (postListCurr.size()>0){
			ranPost = postListCurr.get((int)(Math.random()*postListCurr.size()));
		}
		model.addAttribute("Posts",ranPost);
		return "indexRandom";
	}
	
	@RequestMapping(value={"/users/addPost/","/addPost"})
	public String index(Model model) {
		if (userComponent.isLoggedUser()){
			loadNavbar(model);
			return "user-addPost";
		}else
			return "index";
	}
	
	@RequestMapping(value={"/users/changeAvatar","/changeAvatar"})
	public String changeAvatar(Model model) {
		loadProfileNavbar(model);
		if (userComponent.isLoggedUser())
			return "user-changePhoto";
		else
			return "index";
	}
	
	@RequestMapping(value={"/users/changeHeader","/changeHeader"})
	public String changeHeader(Model model) {
		loadProfileNavbar(model);
		if (userComponent.isLoggedUser())
			return "user-changeHeader";
		else
			return "index";
	}
	
	@RequestMapping(value = "/uploadPost", method = RequestMethod.POST)
	public String handleFileUpload(Model model, 
			@RequestParam("imageTitleFileUploader") String imageTitle,
			@RequestParam("file") MultipartFile file, @RequestParam("op") String opcion) {
		
		User currentUser=userComponent.getLoggedUser();
			
		loadNavbar(model);
		if (!file.isEmpty()) {
			try {

				File filesFolder = new File(FILES_FOLDER);
				if (!filesFolder.exists()) {
					filesFolder.mkdirs();
				}
				Post p = new Post(imageTitle, currentUser, opcion);
				postService.save(p);
				User userAux = userService.findByusername(currentUser.getUsername());
				userAux.getUserPosts().add(p);
				userService.save(userAux);
				File uploadedFile = new File(filesFolder.getAbsolutePath(),+p.getId()+".jpg");
				file.transferTo(uploadedFile);
				model.addAttribute("Post",p);
				model.addAttribute("PostComments",p.getPostComments());
								
				return "postIndex";

			}	catch (Exception e) {
				model.addAttribute("ErrorMessage",
						e.getClass().getName() + ":" + e.getMessage());
				System.out.println(e.getMessage());
				return "errorPage";
			}
		}else {
			model.addAttribute("ErrorMessage",	"The file is empty");
			return "errorPage";
		}
	}
	@RequestMapping("/postimg/{fileName}")
	public void handleFileDownload(@PathVariable String fileName,
			HttpServletResponse res) throws FileNotFoundException, IOException {
	
		File file = new File(FILES_FOLDER, fileName+".jpg");
	
		if (file.exists()) {
			res.setContentType("post/jpeg");
			res.setContentLength(new Long(file.length()).intValue());
			FileCopyUtils
					.copy(new FileInputStream(file), res.getOutputStream());
		} else {
			res.sendError(404, "File" + fileName + "(" + file.getAbsolutePath()
					+ ") does not exist");
		}
	}
	@RequestMapping(value = "/uploadHeader", method = RequestMethod.POST)
	public String handleHeaderFileUpload(Model model, @RequestParam("file") MultipartFile file) {
		
		User currentUser=userComponent.getLoggedUser();
				
		loadProfileNavbar(model);
		if (!file.isEmpty()) {
			try {

				File filesFolder = new File(HEADERS_FOLDER);
				if (!filesFolder.exists()) {
					filesFolder.mkdirs();
				}
				File uploadedFile = new File(filesFolder.getAbsolutePath(),+currentUser.getId()+".jpg");
				file.transferTo(uploadedFile);
				
				User conectedUser = userService.findById(userComponent.getLoggedUser().getId());
				model.addAttribute("followersList", conectedUser.getUserFollowers());
								
				return "followers";

			} catch (Exception e) {
				model.addAttribute("ErrorMessage",
						e.getClass().getName() + ":" + e.getMessage());
				System.out.println(e.getMessage());
				return "errorPage";
			}
		}else {
			model.addAttribute("ErrorMessage",	"The file is empty");
			return "errorPage";
		}
	}
	@RequestMapping("/headerimg/{fileName}")
	public void handleHeaderFileDownload(@PathVariable String fileName,
			HttpServletResponse res) throws FileNotFoundException, IOException {
	
		File file = new File(HEADERS_FOLDER, fileName+".jpg");
	
		if (file.exists()) {
			res.setContentType("header/jpeg");
			res.setContentLength(new Long(file.length()).intValue());
			FileCopyUtils
					.copy(new FileInputStream(file), res.getOutputStream());
		} else {
			File defaultFile = new File(HEADERS_FOLDER, "default.jpg");
			res.setContentType("header/jpeg");
			res.setContentLength(new Long(defaultFile.length()).intValue());
			FileCopyUtils
					.copy(new FileInputStream(defaultFile), res.getOutputStream());
		}
	}
	@RequestMapping(value = "/uploadAvatar", method = RequestMethod.POST)
	public String handleAvatarFileUpload(Model model, @RequestParam("file") MultipartFile file) {
		
		User currentUser=userComponent.getLoggedUser();
				
		loadProfileNavbar(model);
		if (!file.isEmpty()) {
			try {

				File filesFolder = new File(AVATARS_FOLDER);
				if (!filesFolder.exists()) {
					filesFolder.mkdirs();
				}
				File uploadedFile = new File(filesFolder.getAbsolutePath(),+currentUser.getId()+".jpg");
				file.transferTo(uploadedFile);

				if (userComponent.isLoggedUser()){
					model.addAttribute("loggedUsername",userComponent.getLoggedUser().getUsername());
				}				
				return "followers";

			} catch (Exception e) {
				model.addAttribute("ErrorMessage",
						e.getClass().getName() + ":" + e.getMessage());
				System.out.println(e.getMessage());
				return "errorPage";
			}
		}else {
			model.addAttribute("ErrorMessage",	"The file is empty");
			return "errorPage";
		}
	}
	@RequestMapping("/avatarimg/{fileName}")
	public void handleAvatarFileDownload(@PathVariable String fileName,
			HttpServletResponse res) throws FileNotFoundException, IOException {
		
		File file = new File(AVATARS_FOLDER, fileName+".jpg");
	
		if (file.exists()) {
			res.setContentType("avatar/jpeg");
			res.setContentLength(new Long(file.length()).intValue());
			FileCopyUtils
					.copy(new FileInputStream(file), res.getOutputStream());
		} else {
			File defaultFile = new File(AVATARS_FOLDER, "default.jpg");
			res.setContentType("avatar/jpeg");
			res.setContentLength(new Long(defaultFile.length()).intValue());
			FileCopyUtils
					.copy(new FileInputStream(defaultFile), res.getOutputStream());
		}
	}
	
	@RequestMapping(value="/reportPost/{id}")
	public String handleReportPost(Model model,@PathVariable("id") long id){
		Post post= postService.findOne(id);
		post.setReport(true);
		postService.save(post);
		model.addAttribute("Post",postService.findOne(id));
		
		return "/";
	}
	@RequestMapping(value="/reportUser/{id}")
	public String handleReportUser(Model model,@PathVariable("id") long id){
		User user= userService.findById(id);
		user.setReport(true);
		userService.save(user);
		
		return "/";
	}
	
	@RequestMapping(value="/reportComment/{id}")
	public String handleReportComment(Model model,@PathVariable("id") long id){
		Comment comment= commentService.findOne(id);
		comment.setReport(true);
		commentService.save(comment);
		
		return "/";
	}

	
	
}
