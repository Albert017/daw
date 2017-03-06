package com.filadeatras.fila_de_atras;

public class Comment {
	
	private long id;
	
	private String commentContent;
	//private String commentDate;
	private User commentUser;
	private Post commentPost;
	
	public Comment(){}

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
