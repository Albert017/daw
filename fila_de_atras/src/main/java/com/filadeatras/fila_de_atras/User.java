package com.filadeatras.fila_de_atras;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import javax.persistence.*;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
public class User {
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private long id;
		
		@Column(unique=true)
		private String username;
		@Column(unique=true)
		private String userEmail;
		public String getUserEmail() {
			return userEmail;
		}

		public void setUserEmail(String userEmail) {
			this.userEmail = userEmail;
		}

		@ElementCollection(fetch = FetchType.EAGER)
		private List<String> roles;
		
		@ManyToMany
		private List<User> userFollowing;
		
		@ManyToMany(mappedBy="userFollowing",cascade=CascadeType.REMOVE)
		private List<User> userFollowers;
		
		private String userPasswordHash;
		
		private String userBiography;
		private String userLocation;
		private String userLink;
		

		@OneToMany(mappedBy="commentUser",cascade=CascadeType.REMOVE)
		private List<Comment> userComments;

		@OneToMany(mappedBy="messageSender",cascade=CascadeType.REMOVE)
		private List<Message> userSentMessages;
		
		@OneToMany(mappedBy="messageAddressee",cascade=CascadeType.REMOVE)
		private List<Message> userReceivedMessages;
		
		@OneToMany(mappedBy="postAuthor",cascade=CascadeType.REMOVE)
		private List<Post> userPosts;
		private boolean report;
		
		public User(String nombre, String pass,String email, String... roles){
			username = nombre;
			userEmail = email;
			this.roles = new ArrayList<>(Arrays.asList(roles));
			userPasswordHash= new BCryptPasswordEncoder().encode(pass);
			userComments = new LinkedList<>();
			userSentMessages = new LinkedList<>();
			userReceivedMessages = new LinkedList<>();
			userFollowers = new LinkedList<>();
			userFollowing = new LinkedList<>();
			userPosts = new LinkedList<>();
			report=false;
			userBiography="";
			userLocation="";
			userLink="";
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
		
		public boolean isFollowing(User user){
			for(int i=0; i<this.getUserFollowing().size(); i++){
				if(this.getUserFollowing().get(i).equals(user)){
					return true;
				}
			}
			return false;
			
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
		
		public void addPost(Post e){
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
		
		public void deleteFollowing(User user){
			userFollowing.remove(user);
			
		}
		
		public String getUserBiography() {
			return userBiography;
		}

		public void setUserBiography(String userBiography) {
			this.userBiography = userBiography;
		}

		public String getUserLocation() {
			return userLocation;
		}

		public void setUserLocation(String userLocation) {
			this.userLocation = userLocation;
		}
		
		public boolean equals(User user){
			return this.id==user.id;
		}

		public boolean isReport() {
			return report;
		}

		public void setReport(boolean report) {
			this.report = report;
		}

		public String getUserLink() {
			return userLink;
		}

		public void setUserLink(String userLink) {
			this.userLink = userLink;
		}

		
}
