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
public class User {
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private long id;
		
		//@ManyToOne
		private String username;
		
		private String userPasswordHash;
		
		@OneToMany(mappedBy="commentUser")
		private List<Comment> userComments;

		@OneToMany(mappedBy="messageRemitent")
		private List<Message> userSentMessages;
		
		@OneToMany(mappedBy="messageDestinatary")
		private List<Message> userReceivedMessages;
		
		/*
		
		@OneToMany(mappedBy="username")
		private List<User> userFollowers;
		
		@OneToMany(mappedBy="username")
		private List<User> userFollowing;
		*/
		@OneToMany(mappedBy="postAuthor")
		private List<Post> userPosts;
		
		public User(String nombre, String pass){
			username = nombre;
			userPasswordHash= pass;
			userComments = new LinkedList<>();
			userSentMessages = new LinkedList<>();
			userReceivedMessages = new LinkedList<>();
			//userFollowers = new LinkedList<>();
			//userFollowing = new LinkedList<>();
			userPosts = new LinkedList<>();
		}

		public User(){}

		public User(String name){
			username = name;
		}
		
		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public String getUserPasswordHash() {
			return userPasswordHash;
		}

		public void setUserPasswordHash(String userPasswordHash) {
			this.userPasswordHash = userPasswordHash;
		}
		
		public List<Comment> getUserComments() {
			return userComments;
		}
		
		public void setComment(Comment c){
			this.userComments.add(c);
		}
		public void setUserComments(List<Comment> userComments) {
			this.userComments = userComments;
		}
		
		public List<Message> getUserReceivedMessages() {
			return userReceivedMessages;
		}
		
		public void setReceivedMessage(Message m){
			this.userReceivedMessages.add(m);
		}

		public void setUserReceivedMessages(List<Message> userMessages) {
			this.userReceivedMessages = userMessages;
		}
		
		public void setUserSentMessages(List<Message> userMes){
			this.userSentMessages = userMes;
		}
		
		public void setSentMessage(Message m){
			this.userSentMessages.add(m);
		}
		
		public List<Message> getUserSentMessages(){
			return userSentMessages;
		}
		/*ESTO NO FUNCIONA
		public List<User> getUserFollowers() {
			return userFollowers;
		}
		
		//quitado setFollower, porque solo el follower decide si te va a seguir

		public void setUserFollowers(List<User> userFollowers) {
			this.userFollowers = userFollowers;
		}

		public List<User> getUserFollowing() {
			return userFollowing;
		}
		
		public void setFollowing(User e){
			e.getUserFollowers().add(this);
			this.userFollowing.add(e);
		}

		public void setUserFollowing(List<User> userFollowing) {
			this.userFollowing = userFollowing;
		}
*/
		public List<Post> getUserPosts() {
			return userPosts;
		}
		
		public void setPost(Post e){
			this.userPosts.add(e);
		}

		public void setUserPosts(List<Post> userPosts) {
			this.userPosts = userPosts;
		}
		
		
}
