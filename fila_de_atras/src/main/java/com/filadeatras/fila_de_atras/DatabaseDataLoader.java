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
	    	int n=10;
	    	User newUs [] = new User[n];
	    	for(int i=0;i<n;i++){
	    		newUs[i] = (new User("user"+i, "pass"+i, "user"+i+".a@a.aa", "USER_ROLE"));
	    		userRepository.save(newUs[i]);
	    		if(i>0){
	    			Message m1 = new Message("Texto de prueba "+i, newUs[0], newUs[1]);
	    			messageRepository.save(m1);
	    		}
	    	}
	    	userRepository.save(new User("admin", "adminpass", "admin.a@a.aa","USER_ROLE","ADMIN_ROLE"));

	    }
	    
}
