package com.filadeatras.fila_de_atras;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long>{
	
	//List<Comment> findCommentByPost(Post commentPost);

}
