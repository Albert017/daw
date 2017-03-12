package com.filadeatras.fila_de_atras;

import java.util.LinkedList;
import java.util.List;

import javax.persistence.Entity;
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
	private List<Comment> postComments;
	
	private String postImagePath;
	//private String postDate;
	
	public Post(){}
	
	public Post(String title){
		postTitle=title;
	}

	public Post(String title, User author, String imagePath){
		postTitle=title;
		postAuthor= author;
		postComments = new LinkedList<>();
		postImagePath = imagePath;
		//this.postDate= postDate;
	}
	
	public Post(String title, User author){
		postTitle=title;
		postAuthor= author;
		postComments = new LinkedList<>();
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

	public String getPostImagePath() {
		return postImagePath;
	}

	public void setPostImagePath(String postImagePath) {
		this.postImagePath = postImagePath;
	}
	
	
/*
	public String getPostDate() {
		return postDate;
	}

	public void setPostDate(String postDate) {
		this.postDate = postDate;
	}
*/	
	
}
