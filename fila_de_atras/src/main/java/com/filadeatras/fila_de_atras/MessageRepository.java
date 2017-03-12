package com.filadeatras.fila_de_atras;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long>{
	
	List<Message> findBymessageAddresseeAndMessageDeleted(User messageAddressee, boolean messageDeleted);
	List<Message> findByMessageAddresseeAndMessageSenderAndMessageDeleted(User messageAddressee, User messageSender, boolean messageDeleted);
	List<Message> findBymessageRead(boolean messageRead);
	Message findMessageById(Long id);

}
