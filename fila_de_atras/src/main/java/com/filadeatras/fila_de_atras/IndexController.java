package com.filadeatras.fila_de_atras;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
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

@Controller
public class IndexController {
	
	private static final String FILES_FOLDER = "files";

	private static final String AVATARS_FOLDER = "avatars";
	
	private static final String HEADERS_FOLDER = "headers";
		
	@Autowired
	PostRepository postRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserComponent userComponent;
	
	@RequestMapping(value={"/","/index"})
	public String indexController(Model model, HttpServletRequest request){
		model.addAttribute("loggedUser",userComponent.isLoggedUser());
		if (userComponent.isLoggedUser()){
			model.addAttribute("loggedUsername",userComponent.getLoggedUser().getUsername());
		}
		List<Post> original = postRepository.findAll();
		List<Post> shallowCopy = original.subList(0, original.size());
		Collections.reverse(shallowCopy);
		model.addAttribute("Posts",shallowCopy);
		return "index";
	}
	
	@RequestMapping(value={"/users/addPost/","/addPost"})
	public String index() {
		if (userComponent.isLoggedUser())
			return "user-addPost";
		else
			return "index";
	}
	
	@RequestMapping(value={"/users/changeAvatar","/changeAvatar"})
	public String changeAvatar() {
		if (userComponent.isLoggedUser())
			return "user-changePhoto";
		else
			return "index";
	}
	
	@RequestMapping(value={"/users/changeHeader","/changeHeader"})
	public String changeHeader() {
		if (userComponent.isLoggedUser())
			return "user-changeHeader";
		else
			return "index";
	}
	
	@RequestMapping(value = "/uploadPost", method = RequestMethod.POST)
	public String handleFileUpload(Model model, 
			@RequestParam("imageTitleFileUploader") String imageTitle,
			@RequestParam("file") MultipartFile file) {
		
		User currentUser=userComponent.getLoggedUser();
				
		
		if (!file.isEmpty()) {
			try {

				File filesFolder = new File(FILES_FOLDER);
				if (!filesFolder.exists()) {
					filesFolder.mkdirs();
				}
				Post p = new Post(imageTitle, currentUser);
				postRepository.save(p);
				userRepository.findByusername(currentUser.getUsername()).getUserPosts().add(p);
				File uploadedFile = new File(filesFolder.getAbsolutePath(),+p.getId()+".jpg");
				file.transferTo(uploadedFile);
				
				//Si solo funciona en user probar a añadir los atributos en otro sitio
				model.addAttribute("loggedUser",userComponent.isLoggedUser());
				if (userComponent.isLoggedUser()){
					model.addAttribute("loggedUsername",userComponent.getLoggedUser().getUsername());
				}
				model.addAttribute("Post",p);
				model.addAttribute("PostComments",p.getPostComments());
				
				
				return "postIndex";

			} catch (Exception e) {
				model.addAttribute("username",currentUser.getUsername());
				model.addAttribute("error",
						e.getClass().getName() + ":" + e.getMessage());
				System.out.println(e.getMessage());
				return "user-index";//AÑADIR PAGINA HTML DE ERROR DE SUBIDA
			}
		}else {
			
			model.addAttribute("error",	"The file is empty");
			 
			return "user-index"; //AÑADIR PAGINA HTML DE ERROR DE SUBIDA
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
				
		
		if (!file.isEmpty()) {
			try {

				File filesFolder = new File(HEADERS_FOLDER);
				if (!filesFolder.exists()) {
					filesFolder.mkdirs();
				}
				File uploadedFile = new File(filesFolder.getAbsolutePath(),+currentUser.getId()+".jpg");
				file.transferTo(uploadedFile);
				
				//Si solo funciona en user probar a añadir los atributos en otro sitio
				model.addAttribute("currentUser", currentUser);
				model.addAttribute("loggedUser",userComponent.isLoggedUser());
				if (userComponent.isLoggedUser()){
					model.addAttribute("loggedUsername",userComponent.getLoggedUser().getUsername());
				}				
				return "followers";

			} catch (Exception e) {
				model.addAttribute("username",currentUser.getUsername());
				model.addAttribute("error",
						e.getClass().getName() + ":" + e.getMessage());
				System.out.println(e.getMessage());
				return "user-index";//AÑADIR PAGINA HTML DE ERROR DE SUBIDA
			}
		}else {
			
			model.addAttribute("error",	"The file is empty");
			 
			return "user-index"; //AÑADIR PAGINA HTML DE ERROR DE SUBIDA
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
				
		
		if (!file.isEmpty()) {
			try {

				File filesFolder = new File(AVATARS_FOLDER);
				if (!filesFolder.exists()) {
					filesFolder.mkdirs();
				}
				File uploadedFile = new File(filesFolder.getAbsolutePath(),+currentUser.getId()+".jpg");
				file.transferTo(uploadedFile);
				
				model.addAttribute("currentUser", userRepository.findByusername(currentUser.getUsername()));
				model.addAttribute("loggedUser",userComponent.isLoggedUser());
				if (userComponent.isLoggedUser()){
					model.addAttribute("loggedUsername",userComponent.getLoggedUser().getUsername());
				}				
				return "followers";

			} catch (Exception e) {
				model.addAttribute("username",currentUser.getUsername());
				model.addAttribute("error",
						e.getClass().getName() + ":" + e.getMessage());
				System.out.println(e.getMessage());
				return "user-index";//AÑADIR PAGINA HTML DE ERROR DE SUBIDA
			}
		}else {
			
			model.addAttribute("error",	"The file is empty");
			 
			return "user-index"; //AÑADIR PAGINA HTML DE ERROR DE SUBIDA
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
}
