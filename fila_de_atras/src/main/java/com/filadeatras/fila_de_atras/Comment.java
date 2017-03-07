package com.filadeatras.fila_de_atras;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Comment {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	private String commentContent;
	//private String commentDate;
	@ManyToOne
	private User commentUser;
	@ManyToOne
	private Post commentPost;
	
	public Comment(){}
	
	public Comment(String c){
		commentContent =c;
	}
	
	public Comment(String comment, User user, Post post){
		commentContent = comment;
		commentUser=user;
		commentPost=post;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCommentContent() {
		return commentContent;
	}

	public void setCommentContent(String commentContent) {
		this.commentContent = commentContent;
	}

	public User getCommentUser() {
		return commentUser;
	}

	public void setCommentUser(User commentUser) {
		this.commentUser = commentUser;
	}

	public Post getCommentPost() {
		return commentPost;
	}

	public void setCommentPost(Post commentPost) {
		this.commentPost = commentPost;
	}

}
