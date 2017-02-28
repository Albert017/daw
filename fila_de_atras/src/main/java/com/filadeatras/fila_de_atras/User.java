package com.filadeatras.fila_de_atras;

import java.util.List;

public class User {

		private long id;
		
		private String username;
		private String passwordHash;
		
		private List<Comment> userComments;
		private List<Message> userMessages;
		
		private List<User> userFollowers;
		private List<User> userFollowing;
		
		private List<Post> userPosts;
}
