package com.filadeatras.fila_de_atras;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Post {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	private String postTitle;
	private User postAuthor;
	private String postDate;
	
	public Post(){}

	public Post(String title, User author, String postDate){
		postTitle=title;
		postAuthor= author;
		this.postDate= postDate;
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

	public String getPostDate() {
		return postDate;
	}

	public void setPostDate(String postDate) {
		this.postDate = postDate;
	}
	
	
}
