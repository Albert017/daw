package com.filadeatras.fila_de_atras.models;


//Clase auxiliar para la lista de followers en profile
public class Follower {
	
	User follower;
	boolean isFollowing;
	
	public Follower(){
		this.follower = new User();
		isFollowing=false;
		
	}
	
	public User getFollower() {
		return follower;
	}

	public void setFollower(User follower) {
		this.follower = follower;
	}

	public boolean isFollowing() {
		return isFollowing;
	}

	public void setFollowing(boolean isFollowing) {
		this.isFollowing = isFollowing;
	}

	public Follower(User follower, boolean isFollowing){
		this.follower=follower;
		this.isFollowing=isFollowing;
		
	}

}
