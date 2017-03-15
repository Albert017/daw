package com.filadeatras.fila_de_atras;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface MessageRepository extends JpaRepository<Message, Long>{
	
	List<Message> findBymessageAddresseeAndMessageDeletedOrderByIdDesc(User messageAddressee, boolean messageDeleted);
	List<Message> findByMessageAddresseeAndMessageSenderAndMessageDeletedOrderByIdDesc(User messageAddressee, User messageSender, boolean messageDeleted);
	List <Message> findByMessageAddresseeAndMessageNew(User user, boolean messageRead);
	Message findMessageById(Long id);
	
	@Query(value="SELECT * FROM MESSAGE  WHERE (MESSAGE_ADDRESSEE_ID=?1 AND MESSAGE_SENDER_ID=?2) OR (MESSAGE_ADDRESSEE_ID=?2 AND MESSAGE_SENDER_ID=?1)  ORDER BY ID DESC", nativeQuery=true)
    public List<Message> findConversationByUserIdOrderByIdDesc(Long id1, Long id2);
	/*
	(Enviado == user1 AND recibido == user2) OR (enviado == user2 AND recibido == user1)
	
	

*/
}
