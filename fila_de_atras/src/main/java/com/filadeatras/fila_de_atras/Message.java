package com.filadeatras.fila_de_atras;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
@Entity
public class Message {
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private long id;
		
		private String messageContent;
		//private String messageDate;
		private boolean messageRead;		
		private boolean messageDeleted;

		@ManyToOne
		private User messageSender;
		public boolean isMessageDeleted() {
			return messageDeleted;
		}

		public void setMessageDeleted(boolean messageDeleted) {
			this.messageDeleted = messageDeleted;
		}

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
			messageRead = false;
			messageDeleted = false;
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

		public boolean isMessageRead() {
			return messageRead;
		}

		public void setMessageRead(boolean messageRead) {
			this.messageRead = messageRead;
		}		
}
