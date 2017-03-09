package com.filadeatras.fila_de_atras;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class DatabaseDataLoader {
	
	 @Autowired
	    private UserRepository userRepository;

	    @PostConstruct
	    private void initDatabase() {
	    	
	    	for(int i=1;i<20;i++){
	    		userRepository.save(new User("user"+i, "pass"+i));
	    	}
	    	userRepository.save(new User("admin", "adminpass"));

	    }
	    
}
