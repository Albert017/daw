package com.filadeatras.fila_de_atras;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class FileUploadController {

	private static final String FILES_FOLDER = "files";

	private List<String> imageTitlesFileUploader = new ArrayList<>();

	@RequestMapping("/users/addPost/")
	public String index() {
		return "user-addPost";
	}
	
	@RequestMapping(value = "/users/post", method = RequestMethod.POST)
	public String handleFileUpload(Model model, 
			@RequestParam("imageTitleFileUploader") String imageTitle,
			@RequestParam("file") MultipartFile file) {

		String fileName = imageTitlesFileUploader.size() + ".jpg";

		if (!file.isEmpty()) {
			try {

				File filesFolder = new File(FILES_FOLDER);
				if (!filesFolder.exists()) {
					filesFolder.mkdirs();
				}

				File uploadedFile = new File(filesFolder.getAbsolutePath(), fileName);
				file.transferTo(uploadedFile);

				imageTitlesFileUploader.add(imageTitle);
				
				model.addAttribute("imageTitlesFileUploader", imageTitlesFileUploader);
				
				return "user-postIndex";

			} catch (Exception e) {
				
				model.addAttribute("fileName",fileName);
				model.addAttribute("error",
						e.getClass().getName() + ":" + e.getMessage());
				
				return "user-index";//AÑADIR PAGINA HTML DE ERROR DE SUBIDA
			}
		} else {
			
			model.addAttribute("error",	"The file is empty");
			 
			return "user-index"; //AÑADIR PAGINA HTML DE ERROR DE SUBIDA
		}
	}

	@RequestMapping("/image/{fileName}")
	public void handleFileDownload(@PathVariable String fileName,
			HttpServletResponse res) throws FileNotFoundException, IOException {

		File file = new File(FILES_FOLDER, fileName+".jpg");

		if (file.exists()) {
			res.setContentType("image/jpeg");
			res.setContentLength(new Long(file.length()).intValue());
			FileCopyUtils
					.copy(new FileInputStream(file), res.getOutputStream());
		} else {
			res.sendError(404, "File" + fileName + "(" + file.getAbsolutePath()
					+ ") does not exist");
		}
	}

}