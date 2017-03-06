package com.filadeatras.fila_de_atras;

import java.util.List;

public class User {

		private long id;
		
		private String username;
		private String userPasswordHash;
		
		private List<Comment> userComments;
		private List<Message> userMessages;
		
		private List<User> userFollowers;
		private List<User> userFollowing;
		
		private List<Post> userPosts;
		
		public User(){}

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

		public void setUserComments(List<Comment> userComments) {
			this.userComments = userComments;
		}

		public List<Message> getUserMessages() {
			return userMessages;
		}

		public void setUserMessages(List<Message> userMessages) {
			this.userMessages = userMessages;
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

		public void setUserPosts(List<Post> userPosts) {
			this.userPosts = userPosts;
		}
		
		
}
