package com.filadeatras.fila_de_atras.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.filadeatras.fila_de_atras.models.Post;
import com.filadeatras.fila_de_atras.models.User;

public interface PostRepository extends JpaRepository<Post, Long>{
	
	List<Post> findBypostAuthor(User postAuthor);
	List<Post> findByPostTag(String postTag);
	List<Post> findAllByOrderByPostUpVotesDesc();
	List<Post> findAllByreport(boolean report);
	
	/**Post findFirstByyearOrderBypostUpVotesAsc(int year);
	Post findFirstBydayOrderBypostUpVotesAsc(int day);
	Post findFirstBymonthOrderBypostUpVotesAsc(String month);**/

	List<Post> findFirst1ByMonthAndYearOrderByPostUpVotesDesc(String month, int year);
	
	List<Post> findFirst1ByYearOrderByPostUpVotesDesc(int year);

	List<Post> findFirst1ByMonthAndYearAndDayOrderByPostUpVotesDesc(String month, int year, int day);

	List<Post> findFirst1ByPostWeekAndYearOrderByPostUpVotesDesc(int week, int year);

	@Query("select po from Post po where (po.postWeek = ?1 and po.year = ?2) or (po.postWeek = ?3 and po.year = ?4) order by po.postUpVotes desc")
	List<Post> findTop1BypostUpVotesWeek(int week1, int year1, int week2, int year2);
	
	Post findBypostTitle(String postTitle);

}
