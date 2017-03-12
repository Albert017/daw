package com.filadeatras.fila_de_atras;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

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

	private String imageTitleFileUploader;
	
	
	@Autowired
	PostRepository postRepository;
	
	@Autowired
	UserComponent userComponent;
	
	@RequestMapping(value={"/","/index"})
	public String indexController(Model model, HttpServletRequest request){
		System.out.println(request.getUserPrincipal()+" "+userComponent.isLoggedUser());
		model.addAttribute("loggedUser",userComponent.isLoggedUser());
		if (userComponent.isLoggedUser()){
			model.addAttribute("loggedUsername",userComponent.getLoggedUser().getUsername());
		}
		return "index";
	}
	
	@RequestMapping("/users/addPost/")
	public String index() {
		if (userComponent.isLoggedUser())
			return "user-addPost";
		else
			return "index";
	}
	
	@RequestMapping(value = "/users/post", method = RequestMethod.POST)
	public String handleFileUpload(Model model, 
			@RequestParam("imageTitleFileUploader") String imageTitle,
			@RequestParam("file") MultipartFile file) {
		
		User currentUser=userComponent.getLoggedUser();
				
		String fileName = imageTitleFileUploader + ".jpg";
		if (!file.isEmpty()) {
			try {

				File filesFolder = new File(FILES_FOLDER);
				if (!filesFolder.exists()) {
					filesFolder.mkdirs();
				}

				File uploadedFile = new File(filesFolder.getAbsolutePath(), imageTitle);
				file.transferTo(uploadedFile);

				imageTitleFileUploader=imageTitle;
				
				//Si solo funciona en user probar a añadir los atributos en otro sitio
				
				model.addAttribute("imageTitleFileUploader", imageTitleFileUploader);
				
				Post p = new Post(imageTitle, currentUser, uploadedFile.getAbsolutePath());
				
				postRepository.save(p);
				
				currentUser.setPost(p);
				
				return "user-postIndex";

			} catch (Exception e) {
				
				model.addAttribute("fileName",fileName);
				model.addAttribute("error",
						e.getClass().getName() + ":" + e.getMessage());
				
				return "user-index";//AÑADIR PAGINA HTML DE ERROR DE SUBIDA
			}
			/*
		}else if(imagePath!=null){
			Post p = new Post(imageTitle, currentUser, imagePath);
			
			postRepository.save(p);
			
			currentUser.setPost(p);
			
			model.addAttribute("imageTitleFileUploader", imageTitleFileUploader);
		
			return "user-postIndex";
		*/
		}else {
			
			model.addAttribute("error",	"The file is empty");
			 
			return "user-index"; //AÑADIR PAGINA HTML DE ERROR DE SUBIDA
		}
	}
	@RequestMapping("/post/{fileName}")
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
}
