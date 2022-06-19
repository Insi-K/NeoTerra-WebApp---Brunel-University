package com.cs2001groupprojectblue27.neoterra.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import java.io.Serializable;

@Entity
@Table(name = "NewsStories")
@EntityListeners(AuditingEntityListener.class)
public class NewsStories implements Serializable {

		private static final long serialVersionUID = 1L;

		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @NotBlank
	    private String storyTitle;
	    
	    @NotBlank
	    private String storyLink;
	    
	    @NotBlank
	    private String source;

	    public NewsStories() {
	    	
	    }
	    public NewsStories(String storyTitle, String storyLink,  String source) 
	    {
	    	this.storyTitle = storyTitle;
	    	this.storyLink = storyLink;
	    	this.source = source;
	    }
	    
	    //Getters and Setters 
		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}
		
		public String getStoryTitle() {
			return storyTitle;
		}

		public void setStoryTitle(String storyTitle) {
			this.storyTitle = storyTitle;
		}
		
		public String getStoryLink() {
			return storyLink;
		}

		public void setStoryLink(String storyLink) {
			this.storyLink = storyLink;
		}
		
		public String getSource() {
			return source;
		}

		public void setSource(String source) {
			this.source = source;
		}
}		

/*import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class NewsStories {
	
	@Id
	@GeneratedValue
	@Column(name = "story_id")
	private Integer story_id;
	
	@Column(name = "story_title")
	private String story_title;
	
	@Column(name = "story_link")
	private String story_link;
	
	@Column(name = "source")
	private String source;
	
	public NewsStories() {
		
	} //

	
	//Getters and Setters Below
	public Integer getStory_id() {
		return story_id;
	}

	public void setStory_id(Integer story_id) {
		this.story_id = story_id;
	}
	public String getSource() {
		return source;
	}
	
	public void setSource(String source) {
		this.source = source;
	}

	public String getStory_title() {
		return story_title;
	}

	public void setStory_title(String story_title) {
		this.story_title = story_title;
	}

	public String getStory_link() {
		return story_link;
	}

	public void setStory_link(String story_link) {
		this.story_link = story_link;
	}
}*/
