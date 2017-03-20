package com.filadeatras.fila_de_atras;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PostRepository extends JpaRepository<Post, Long>{
	
	List<Post> findBypostAuthor(User postAuthor);
	List<Post> findByPostTag(String postTag);
	List<Post> findAllByOrderByPostUpVotesDesc();
	List<Post> findAllByreport(boolean report);
	
	/**Post findFirstByyearOrderBypostUpVotesAsc(int year);
	Post findFirstBydayOrderBypostUpVotesAsc(int day);
	Post findFirstBymonthOrderBypostUpVotesAsc(String month);**/
	
	@Query(value = "SELECT * FROM POST WHERE (POST_UP_VOTES =SELECT MAX(POST_UP_VOTES) FROM POST WHERE (MONTH=?#{[0]} AND YEAR=?#{[1]}))", nativeQuery = true)
	Post findTop1BypostUpVotesMonth(String month, int year);
	
	@Query(value = "SELECT * FROM POST WHERE (POST_UP_VOTES =SELECT MAX(POST_UP_VOTES) FROM POST WHERE YEAR=?#{[0]})", nativeQuery = true)
	Post findTop1BypostUpVotesYear(int year);
	
	@Query(value = "SELECT * FROM POST WHERE (POST_UP_VOTES =SELECT MAX(POST_UP_VOTES) FROM POST WHERE (MONTH=?#{[0]} AND YEAR=?#{[1]} AND DAY=?#{[2]}))", nativeQuery = true)
	Post findTop1BypostUpVotesDay(String month, int year, int day);
	
	@Query(value = "SELECT * FROM POST WHERE (POST_UP_VOTES =SELECT MAX(POST_UP_VOTES) FROM POST WHERE (POST_WEEK=?#{[0]} AND YEAR=?#{[1]}))", nativeQuery = true)
	Post findTop1BypostUpVotesWeek(int week, int year);
	
	@Query(value = "SELECT * FROM POST WHERE (POST_UP_VOTES =SELECT MAX(POST_UP_VOTES) FROM POST WHERE (POST_WEEK=?#{[0]} AND YEAR=?#{[1]}) OR (POST_WEEK=?#{[2]} AND YEAR=?#{[3]}))", nativeQuery = true)
	Post findTop1BypostUpVotesWeek(int week1, int year1, int week2, int year2);
	
	Post findBypostTitle(String postTitle);

}
