package com.filadeatras.fila_de_atras.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.filadeatras.fila_de_atras.models.Message;
import com.filadeatras.fila_de_atras.models.User;


public interface MessageRepository extends JpaRepository<Message, Long>{
	
	List<Message> findBymessageAddresseeAndMessageDeletedOrderByIdDesc(User messageAddressee, boolean messageDeleted);
	List<Message> findByMessageAddresseeAndMessageSenderAndMessageDeletedOrderByIdDesc(User messageAddressee, User messageSender, boolean messageDeleted);
	List <Message> findByMessageAddresseeAndMessageNew(User user, boolean messageRead);
	Message findMessageById(Long id);

	@Query("select msg from Message msg where ((msg.messageAddressee=?1 and msg.messageSender=?2)or(msg.messageAddressee=?2 and msg.messageSender=?1)) and msg.messageDeleted=false order by msg.id desc ")
    List<Message> findConversationByUserIdOrderByIdDesc(Long id1, Long id2);

}
