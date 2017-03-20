package com.filadeatras.fila_de_atras;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class DatabaseDataLoader {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private CommentRepository commentRepository;
	
	@Autowired
	private MessageRepository messageRepository;

	@Autowired
	private PostRepository postRepository;
	
	@Autowired
	UserComponent userComponent;

	    @PostConstruct
	    private void initDatabase() {
	    	
	    	User u1 = new User("Pepe", "pass", "pepe@a.aa" ,"ROLE_USER");
			User u2 = new User("Sara", "word", "sara@a.aa" ,"ROLE_USER","ROLE_ADMIN");
			userRepository.save(u1);
			userRepository.save(u2);
			u1.addFollowing(u2); // u1 sigue a u2, añadir en la lista de seguidos en u1 a u2
			userRepository.save(u1);
			userRepository.save(u2);
			Message m1 = new Message("Este es el contenido del mensaje", u1,u2);
			messageRepository.save(m1);
			Post p1 = new Post("El titulo del post", u2, "savage");
			Post p2 = new Post("1", u2, "wtf");
			Post p3 =new Post("2", u2, "funny");
			p2.setPostUpVotes(15);
			p3.setPostUpVotes(15);
			postRepository.save(p1);
			postRepository.save(p2);
			postRepository.save(p3);
			Comment c1 = new Comment("Esto es el contenido de un comentario",u1,p1);
			commentRepository.save(c1);
			
			
			
			
	    	int n=10;
	    	User newUs[] = new User[n];
	    	for(int i=0;i<5;i++){
	    		newUs[i] = (new User("user"+i, "pass"+i, "user"+i+".a@a.aa", "ROLE_USER"));
	    		userRepository.save(newUs[i]);
	    		if(i>0){
	    			Message m = new Message("Texto de prueba "+i, newUs[0], newUs[1]);
	    			messageRepository.save(m1);
	    			newUs[0].addFollowing(newUs[i]);
	    			userRepository.save(newUs[0]);
	    		}
	    		Message m = new Message("Texto de prueba aux "+i, newUs[i], newUs[1]);
	    		messageRepository.save(m1);
	    	}
	    	
	    	for(int i=0; i<11; i++){
				if(i<4){
					Post p =new Post("Prueba "+i, newUs[i], "funny");
					postRepository.save(p);
				}
				else if(i<8){
					Post p =new Post("Prueba "+i, u1, "wtf");
					postRepository.save(p);
				}
				else{
					Post p =new Post("Prueba "+i, u2, "animals");
					postRepository.save(p);
				}
				
			}
	    	Message m = new Message("Texto de prueba eliminado", newUs[0], newUs[1]);
	    	Message m2 = new Message("Texto de prueba leido", newUs[3], newUs[1]);
	    	m2.setMessageNew(false);
	    	m1.setMessageDeleted(true);
			messageRepository.save(m1);
			messageRepository.save(m2);
	    	userRepository.save(new User("admin", "adminpass", "admin.a@a.aa","ROLE_USER","ROLE_ADMIN"));

	    }
	    
}
