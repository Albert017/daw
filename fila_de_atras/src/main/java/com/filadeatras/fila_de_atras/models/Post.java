package com.filadeatras.fila_de_atras.models;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.LinkedList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Post {
	public interface PostBasic{}
	public interface ViewPost extends User.UserPost, Comment.CommentId, PostBasic{}
	
	
	@JsonView(PostBasic.class)
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	@JsonView(PostBasic.class)
	private String postTitle;
	
	@JsonView(ViewPost.class)
	@ManyToOne
	private User postAuthor;
	
	@JsonView(ViewPost.class)
	@OneToMany(mappedBy="commentPost",cascade=CascadeType.REMOVE)
	@ElementCollection(fetch = FetchType.EAGER)
	private List<Comment> postComments;
	
	@JsonView(PostBasic.class)
	private String postTag;
	@JsonView(PostBasic.class)
	private String postDate;
	private String month;
	private int day;
	private int year;
	@JsonView(PostBasic.class)
	private int postUpVotes;
	@JsonView(PostBasic.class)
	private int postDownVotes;
	@JsonView(PostBasic.class)
	private boolean report;
	int postWeek;
	
	public Post(){}
	
	public Post(String title){
		postTitle=title;
	}
	
	public Post(String title, User author, String tag){
		postTitle=title;
		postAuthor= author;
		postComments = new LinkedList<>();
		postTag = tag;
		this.postDate= LocalDateTime.now().format(DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM,FormatStyle.MEDIUM));
		day = LocalDateTime.now().getDayOfMonth();
		month= LocalDateTime.now().getMonth().toString();
		year= LocalDateTime.now().getYear();
		postUpVotes=0;
		postDownVotes=0;
		int currentDayofTheWeek= LocalDateTime.now().getDayOfWeek().getValue();
		postWeek=(LocalDateTime.now().getDayOfYear() - currentDayofTheWeek + 10)/7;
		report=false;
	}
	

	public String getPostTag() {
		return postTag;
	}

	public void setPostTags(String postTag) {
		this.postTag = postTag;
	}
	

	public int getPostUpVotes() {
		return postUpVotes;
	}

	public void setPostUpVotes(int postUpVotes) {
		this.postUpVotes = postUpVotes;
	}

	public int getPostDownVotes() {
		return postDownVotes;
	}

	public void setPostDownVotes(int postDownVotes) {
		this.postDownVotes = postDownVotes;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPostTitle() {
		return postTitle;
	}

	public void setPostTitle(String postTitle) {
		this.postTitle = postTitle;
	}
	public User getPostAuthor() {
		return postAuthor;
	}

	public void setPostAuthor(User postAuthor) {
		this.postAuthor = postAuthor;
	}
	
	public void setPostComments(List<Comment> cs){
		postComments =cs;
	}
	
	public void addPostComment(Comment c){
		postComments.add(c);
	}
	
	public List<Comment> getPostComments(){
		return postComments;
	}

	public String getPostDate() {
		return postDate;
	}

	public void setPostDate(String postDate) {
		this.postDate = postDate;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public int getDay() {
		return day;
	}

	public void setDay(int day) {
		this.day = day;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public boolean isReport() {
		return report;
	}

	public void setReport(boolean report) {
		this.report = report;
	}

	public int getPostWeek() {
		return postWeek;
	}

	public void setPostWeek(int postWeek) {
		this.postWeek = postWeek;
	}

	public void setPostTag(String postTag) {
		this.postTag = postTag;
	}
	
	
	
}
