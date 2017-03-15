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
	    	User newUs[] = new User[n];
	    	for(int i=0;i<5;i++){
	    		newUs[i] = (new User("user"+i, "pass"+i, "user"+i+".a@a.aa", "ROLE_USER"));
	    		userRepository.save(newUs[i]);
	    		if(i>0){
	    			Message m1 = new Message("Texto de prueba "+i, newUs[0], newUs[1]);
	    			messageRepository.save(m1);
	    		}
	    		Message m1 = new Message("Texto de prueba aux "+i, newUs[i], newUs[1]);
	    		messageRepository.save(m1);
	    	}
	    	Message m1 = new Message("Texto de prueba eliminado", newUs[0], newUs[1]);
	    	Message m2 = new Message("Texto de prueba leido", newUs[3], newUs[1]);
	    	m2.setMessageNew(false);
	    	m1.setMessageDeleted(true);
			messageRepository.save(m1);
			messageRepository.save(m2);
	    	userRepository.save(new User("admin", "adminpass", "admin.a@a.aa","ROLE_USER","ROLE_ADMIN"));

	    }
	    
}
