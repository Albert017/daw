package com.filadeatras.fila_de_atras;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Message {
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private long id;
		
		private String messageSubject;
		private String messageContent;
		//private String messageDate;
		private User messageRemitent;
		private User messageDestinatary;
		
		public Message(){}
		
		public Message(String subject, String content, User remitent, User destinatary){
			messageSubject = subject;
			messageContent= content;
			messageRemitent= remitent;
			messageDestinatary= destinatary;
		}

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getMessageSubject() {
			return messageSubject;
		}

		public void setMessageSubject(String messageSubject) {
			this.messageSubject = messageSubject;
		}

		public String getMessageContent() {
			return messageContent;
		}

		public void setMessageContent(String messageContent) {
			this.messageContent = messageContent;
		}

		public User getMessageRemitent() {
			return messageRemitent;
		}

		public void setMessageRemitent(User messageRemitent) {
			this.messageRemitent = messageRemitent;
		}

		public User getMessageDestinatary() {
			return messageDestinatary;
		}

		public void setMessageDestinatary(User messageDestinatary) {
			this.messageDestinatary = messageDestinatary;
		}
		
		
}
