package com.filadeatras.fila_de_atras;

import java.util.LinkedList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
@Entity
public class User {
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private long id;
		
		private String username;
		private String userPasswordHash;
		
<<<<<<< HEAD
		@OneToMany(mappedBy="commentUser")
		private List<Comment> userComments;
		/*
		private List<Message> userMessages;
=======
		@OneToMany
		private List<Comment> userComments= new LinkedList();
		
		private List<Message> userMessages= new LinkedList();
>>>>>>> origin/master
		
		private List<User> userFollowers= new LinkedList();
		private List<User> userFollowing= new LinkedList();
		
<<<<<<< HEAD
		private List<Post> userPosts;
		*/
=======
		private List<Post> userPosts= new LinkedList();
		
>>>>>>> origin/master
		public User(){}
		
		public User(String nombre, String pass){
			username = nombre;
			userPasswordHash= pass;
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
		/*
		public List<Message> getUserMessages() {
			return userMessages;
		}
		
		public void setMessage(Message m){
			this.userMessages.add(m);
		}

		public void setUserMessages(List<Message> userMessages) {
			this.userMessages = userMessages;
		}

		public List<User> getUserFollowers() {
			return userFollowers;
		}
		
		public void setFollower(User foll){
			this.userFollowers.add(foll);
		}

		public void setUserFollowers(List<User> userFollowers) {
			this.userFollowers = userFollowers;
		}

		public List<User> getUserFollowing() {
			return userFollowing;
		}
		
		public void setFollowing(User e){
			this.userFollowing.add(e);
		}

		public void setUserFollowing(List<User> userFollowing) {
			this.userFollowing = userFollowing;
		}

		public List<Post> getUserPosts() {
			return userPosts;
		}
		
		public void setPost(Post e){
			this.userPosts.add(e);
		}

		public void setUserPosts(List<Post> userPosts) {
			this.userPosts = userPosts;
		}
		
		*/
}
