package com.filadeatras.fila_de_atras.services;

import java.util.List;

import com.filadeatras.fila_de_atras.models.Comment;
import com.filadeatras.fila_de_atras.repositories.CommentRepository;
import com.filadeatras.fila_de_atras.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.filadeatras.fila_de_atras.models.Post;
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.repositories.PostRepository;

@Service
public class PostService {

	@Autowired
	private PostRepository repositoryPost;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CommentRepository commentRepository;

	
	public Post findOne(Long id){
		
		return repositoryPost.getOne(id);
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
		
		return repositoryPost.findFirst1ByMonthAndYearOrderByPostUpVotesDesc(month, year);
		
	}
	
	
	public List<Post> findFirst1ByYearOrderByPostUpVotesDesc(int year){
		
		return repositoryPost.findFirst1ByYearOrderByPostUpVotesDesc(year);
	}
	
	
	public List<Post> findTop1BypostUpVotesDay(String month, int year, int day){
		
		return repositoryPost.findFirst1ByMonthAndYearAndDayOrderByPostUpVotesDesc(month, year, day);
	}
	
	
	public List<Post> findTop1BypostUpVotesWeek(int week, int year){
		
		return repositoryPost.findFirst1ByPostWeekAndYearOrderByPostUpVotesDesc(week, year);
	}
	
	
	public List<Post> findTop1BypostUpVotesWeek(int week1, int year1, int week2, int year2){
		
		return repositoryPost.findTop1BypostUpVotesWeek(week1, year1, week2, year2);
	}
	
	
	public Post findBypostTitle(String postTitle){
		
		return repositoryPost.findBypostTitle(postTitle);
	}
	
	public List<Post> findAll(){
		
		return repositoryPost.findAll();
	}
	
	public void save(Post p){

		repositoryPost.save(p);
	}

	public Post createPost(Post p, User author){
		Post newPost = new Post(p.getPostTitle(),author,p.getPostTag());
		repositoryPost.save(newPost);
		return newPost;
	}

	public void delete(Post p){
		repositoryPost.delete(p);
	}

	public Post deletePost(Post postDel,User reqUser){
        if (postDel.getPostAuthor().equals(reqUser)){
            repositoryPost.delete(postDel);
            return postDel;
        }
        if(reqUser.getRoles().contains("ROLE_ADMIN")){
            repositoryPost.delete(postDel);
            return postDel;
        }
        return null;
    }

    public Comment addComment(Post post, String com, User loggedUser) {
		User author = userRepository.findOne(loggedUser.getId());
		if (com==null) return null;
		Comment newComm = new Comment(com,author,post);
		commentRepository.save(newComm);
		return newComm;
    }

	public Comment findOneComment(long idCom) {
		return commentRepository.findOne(idCom);
	}

	public void deleteComment(Comment com) {
		commentRepository.delete(com);
	}
	
	public void upVotePost(long id){

		Post currPost = this.findOne(id);
		currPost.setPostUpVotes(currPost.getPostUpVotes()+1);
		this.save(currPost);
	}
	public void downVotePost(long id){

		Post currPost = this.findOne(id);
		currPost.setPostUpVotes(currPost.getPostUpVotes()+1);
		this.save(currPost);
	}
}
