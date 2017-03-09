package com.filadeatras.fila_de_atras;

import java.util.LinkedList;
import java.util.List;

import javax.persistence.*;

@Entity
public class User {
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private long id;
		
		@Column(unique=true)
		private String username;
		


		@ElementCollection(fetch = FetchType.EAGER)
		private List<String> roles;
		
		@ManyToMany
		private List<User> userFollowing;
		
		@ManyToMany(mappedBy="userFollowing")
		private List<User> userFollowers;
		
		private String userPasswordHash;
		
		@OneToMany(mappedBy="commentUser")
		private List<Comment> userComments;

		@OneToMany(mappedBy="messageSender")
		private List<Message> userSentMessages;
		
		@OneToMany(mappedBy="messageAddressee")
		private List<Message> userReceivedMessages;
		
		@OneToMany(mappedBy="postAuthor")
		private List<Post> userPosts;
		
		public User(String nombre, String pass){
			username = nombre;
			userPasswordHash= pass;
			userComments = new LinkedList<>();
			userSentMessages = new LinkedList<>();
			userReceivedMessages = new LinkedList<>();
			userFollowers = new LinkedList<>();
			userFollowing = new LinkedList<>();
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
		
		public void addFollowing(User following) {
			this.userFollowing.add(following);
		}
		
		public List<User> getUserFollowers() {
			return userFollowers;
		}
		
		public void setUserFollowers(List<User> userFollowers) {
			this.userFollowers = userFollowers;
		}

		public List<User> getUserFollowing() {
			return userFollowing;
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

		public List<String> getRoles() {
			return roles;
		}

		public void setRoles(List<String> roles) {
			this.roles = roles;
		}

		
}
