package com.filadeatras.fila_de_atras;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PostRepository extends JpaRepository<Post, Long>{
	
	List<Post> findBypostAuthor(User postAuthor);
	List<Post> findAllByOrderByPostUpVotesDesc();
	
	@Query(value = "SELECT * FROM POST WHERE POST_UP_VOTES =SELECT MAX(POST_UP_VOTES) FROM POST", nativeQuery = true)
	Post findTop1BypostUpVotes();
	
	Post findBypostTitle(String postTitle);

}
