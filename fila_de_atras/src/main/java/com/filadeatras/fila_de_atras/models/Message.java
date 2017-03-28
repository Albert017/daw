package com.filadeatras.fila_de_atras.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonView;
import com.filadeatras.fila_de_atras.models.Post.ViewPost;
@Entity
public class Message {
	
		public interface ViewMessage extends User.UserPost{}
		
		@JsonView(ViewMessage.class)
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private long id;
		
		@JsonView(ViewMessage.class)
		private String messageContent;
		//private String messageDate;
		
		@JsonView(ViewMessage.class)
		private boolean messageNew;		
		@JsonView(ViewMessage.class)
		private boolean messageDeleted;

		@JsonView(ViewMessage.class)
		@ManyToOne
		private User messageSender;
		
		
		@JsonView(ViewMessage.class)
		@ManyToOne
		private User messageAddressee;
		
		public Message(){}
		
		public Message(String m){
			messageContent =m;
		}
		
		public Message(String content, User remitent, User destinatary){
			messageContent= content;
			messageSender= remitent;
			messageAddressee= destinatary;
			messageNew = true;
			messageDeleted = false;
		}
		
		
		public boolean isMessageDeleted() {
			return messageDeleted;
		}

		public void setMessageDeleted(boolean messageDeleted) {
			this.messageDeleted = messageDeleted;
		}

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}


		public String getMessageContent() {
			return messageContent;
		}

		public void setMessageContent(String messageContent) {
			this.messageContent = messageContent;
		}
		public User getMessageSender() {
			return messageSender;
		}

		public void setMessageSender(User messageRemitent) {
			this.messageSender = messageRemitent;
		}

		public User getMessageAddressee() {
			return messageAddressee;
		}

		public void setMessageAddressee(User messageDestinatary) {
			this.messageAddressee = messageDestinatary;
		}

		public boolean isMessageNew() {
			return messageNew;
		}

		public void setMessageNew(boolean messageRead) {
			this.messageNew = messageRead;
		}		
}
