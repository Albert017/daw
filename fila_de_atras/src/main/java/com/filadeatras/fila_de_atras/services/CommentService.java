package com.filadeatras.fila_de_atras.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.filadeatras.fila_de_atras.models.Comment;
import com.filadeatras.fila_de_atras.models.Post;
import com.filadeatras.fila_de_atras.repositories.CommentRepository;

@Service
public class CommentService {
	
	@Autowired
	private CommentRepository repositoryComment;
	
	public List<Comment> findBycommentPost(Post commentPost){
		
		return repositoryComment.findBycommentPost(commentPost);
	}
	
	
	public List<Comment> findAllByreport(boolean report){
		
		return repositoryComment.findAllByreport(report);
	}

	public void save(Comment c){
		
		repositoryComment.save(c);
	}
	
	public void delete(Comment c){
		
		repositoryComment.delete(c);
		
	}
	
	public Comment findOne(Long id){
		
		return repositoryComment.findOne(id);
	}
}
