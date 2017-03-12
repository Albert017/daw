package com.filadeatras.fila_de_atras;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class DatabaseDataLoader {
	
	 @Autowired
	    private UserRepository userRepository;
	 
	 @Autowired MessageRepository messageRepository;

	    @PostConstruct
	    private void initDatabase() {
<<<<<<< HEAD
	    	for(int i=1;i<20;i++){
	    		User newUs = (new User("user"+i, "pass"+i, "user"+i+".a@a.aa", "ROLE_USER"));
	    		userRepository.save(newUs);
=======
	    	int n=10;
	    	User newUs [] = new User[n];
	    	for(int i=0;i<n;i++){
	    		newUs[i] = (new User("user"+i, "pass"+i, "user"+i+".a@a.aa", "USER_ROLE"));
	    		userRepository.save(newUs[i]);
	    		if(i>0){
	    			Message m1 = new Message("Texto de prueba "+i, newUs[0], newUs[1]);
	    			messageRepository.save(m1);
	    		}
>>>>>>> origin/master
	    	}
	    	userRepository.save(new User("admin", "adminpass", "admin.a@a.aa","ROLE_USER","ROLE_ADMIN"));

	    }
	    
}
