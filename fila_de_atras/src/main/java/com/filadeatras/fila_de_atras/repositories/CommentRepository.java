package com.filadeatras.fila_de_atras.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.filadeatras.fila_de_atras.models.Comment;
import com.filadeatras.fila_de_atras.models.Post;

public interface CommentRepository extends JpaRepository<Comment, Long>{
	
	List<Comment> findBycommentPost(Post commentPost);
	List<Comment> findAllByreport(boolean report);

}
