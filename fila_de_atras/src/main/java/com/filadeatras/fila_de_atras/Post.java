package com.filadeatras.fila_de_atras;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.LinkedList;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Post {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	private String postTitle;
	
	@ManyToOne
	private User postAuthor;
	
	@OneToMany(mappedBy="commentPost")
	@ElementCollection(fetch = FetchType.EAGER)
	private List<Comment> postComments;
	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> postTags;
	private String postDate;
	
	public Post(){}
	
	public Post(String title){
		postTitle=title;
	}
	
	public Post(String title, User author){
		postTitle=title;
		postAuthor= author;
		postComments = new LinkedList<>();
		postTags= new LinkedList<>();
		this.postDate= LocalDateTime.now().format(DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM,FormatStyle.MEDIUM));
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPostTitle() {
		return postTitle;
	}

	public void setPostTitle(String postTitle) {
		this.postTitle = postTitle;
	}
	public User getPostAuthor() {
		return postAuthor;
	}

	public void setPostAuthor(User postAuthor) {
		this.postAuthor = postAuthor;
	}
	
	public void setPostComments(List<Comment> cs){
		postComments =cs;
	}
	
	public void addPostComment(Comment c){
		postComments.add(c);
	}
	
	public List<Comment> getPostComments(){
		return postComments;
	}

	public String getPostDate() {
		return postDate;
	}

	public void setPostDate(String postDate) {
		this.postDate = postDate;
	}	
	
}
