package com.filadeatras.fila_de_atras.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.filadeatras.fila_de_atras.models.Comment;
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired 
	private UserRepository repositoryUser;
	
	public User findByusername(String username){
		
		return repositoryUser.findByusername(username);
		
	}
	
	
	public User findById(long id){
		
		return repositoryUser.findById(id);
		
	}
	
	
	public List<User> findAllByreport(boolean report){
		
		return repositoryUser.findAllByreport(report);
		
	}
	
	public void save(User u){
		
		repositoryUser.save(u);
	}
	
	public void delete(User u){
		
		repositoryUser.delete(u);
		
	}
	
	public User findOne(Long id){
		
		return repositoryUser.findOne(id);
		
	}

    public User updateUser( User oldUser, User updateUser) {
		User newUser = null;
		oldUser.setUserBiography(updateUser.getUserBiography());
		oldUser.setUserLink(updateUser.getUserLink());
		oldUser.setUserLocation(updateUser.getUserLocation());
		oldUser.setUserEmail(updateUser.getUserEmail());
		repositoryUser.save(oldUser);
	    return oldUser;
    }

    public User createNew(Map<String, String> allValues) {
	    User newUser = null;
	    try{
            User placeholder = new User(allValues.get("username"),allValues.get("userPassword"),allValues.get("userEmail"),"ROLE_USER");
            repositoryUser.save(placeholder);
            newUser = placeholder;
        }catch (Exception e){
	        System.err.println(e.getMessage());
        }
        return newUser;
    }

    public void follow(User loggedUser, User toFollow) {
        User update = repositoryUser.findOne(loggedUser.getId());
        update.getUserFollowing().add(toFollow);
        repositoryUser.save(loggedUser);
    }

    public void unfollow(User loggedUser, User toUnFollow) {
        User update = repositoryUser.findOne(loggedUser.getId());
        update.getUserFollowing().remove(toUnFollow);
        repositoryUser.save(toUnFollow);
    }
}
