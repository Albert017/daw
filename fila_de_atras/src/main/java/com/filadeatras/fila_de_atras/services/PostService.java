package com.filadeatras.fila_de_atras.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.filadeatras.fila_de_atras.models.Post;
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.repositories.PostRepository;

@Service
public class PostService {
	
	@Autowired
	private PostRepository repositoryPost;
	
	public Post findOne(Long id){
		
		return repositoryPost.findOne(id);
	}
	
	public List<Post> findBypostAuthor(User postAuthor){
		
		return repositoryPost.findBypostAuthor(postAuthor);
	}
	
	
	public List<Post> findByPostTag(String postTag){
		
		return repositoryPost.findByPostTag(postTag);
	}
	
	
	public List<Post> findAllByOrderByPostUpVotesDesc(){
		
		return repositoryPost.findAllByOrderByPostUpVotesDesc();
	}
	
	
	public List<Post> findAllByreport(boolean report){
		
		return repositoryPost.findAllByreport(report);
	}
	
	
	public List<Post> findTop1BypostUpVotesMonth(String month, int year){
		
		return repositoryPost.findTop1BypostUpVotesMonth(month, year);
		
	}
	
	
	public List<Post> findFirst1ByYearOrderByPostUpVotesDesc(int year){
		
		return repositoryPost.findFirst1ByYearOrderByPostUpVotesDesc(year);
	}
	
	
	public List<Post> findTop1BypostUpVotesDay(String month, int year, int day){
		
		return repositoryPost.findTop1BypostUpVotesDay(month, year, day);
	}
	
	
	public List<Post> findTop1BypostUpVotesWeek(int week, int year){
		
		return repositoryPost.findTop1BypostUpVotesWeek(week, year);
	}
	
	
	public List<Post> findTop1BypostUpVotesWeek(int week1, int year1, int week2, int year2){
		
		return repositoryPost.findTop1BypostUpVotesWeek(week1, year1, week2, year2);
	}
	
	
	public Post findBypostTitle(String postTitle){
		
		return repositoryPost.findBypostTitle(postTitle);
	}
		
}
