package com.filadeatras.fila_de_atras.services;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.filadeatras.fila_de_atras.models.Message;
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.repositories.MessageRepository;

@Service
public class MessageService {
	
@Autowired
private MessageRepository repository;

//Metodo que te devuelve una lista con los diferentes usuarios con los que tienes mensajes
	public List<Message> getMessageWithDifferentSender(User userC){
		List<Message> lista = findBymessageAddresseeAndMessageDeletedOrderByIdDesc(userC, false);
		List<Message> result = new LinkedList<Message>();
		if(lista != null){
			for(Message msg : lista){
				boolean found=false;
				for(int i=0; i<result.size()&&!found;i++){
					found = msg.getMessageSender().getUsername().equals(result.get(i).getMessageSender().getUsername());
				}
				if(!found){
					result.add(msg);
				}
				
			}
		}
		return result;
		
	}

public List<Message> findBymessageAddresseeAndMessageDeletedOrderByIdDesc(User messageAddressee, boolean messageDeleted){
	
	return repository.findBymessageAddresseeAndMessageDeletedOrderByIdDesc(messageAddressee, messageDeleted);
	
}


public List <Message> findByMessageAddresseeAndMessageNew(User user, boolean messageRead){
	
	return repository.findByMessageAddresseeAndMessageNew(user, messageRead);
}


public Message findMessageById(Long id){
	
	return repository.findMessageById(id);
}


public List<Message> findConversationByUserIdOrderByIdDesc(Long id1, Long id2){
	
	return repository.findConversationByUserIdOrderByIdDesc(id1, id2);
}


public void save(Message msg){
	repository.save(msg);
	
}

public void delete(Message msg){
	repository.delete(msg);
	
}

public Message getOne(Long id){
	return repository.getOne(id);
}

public List<Message> findAll(){
	
	return repository.findAll();

}


}
