package com.cs2001groupprojectblue27.neoterra.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import java.io.Serializable;

@Entity
@Table(name = "CarbonFootprint")
@EntityListeners(AuditingEntityListener.class)
public class Users implements Serializable {

		private static final long serialVersionUID = 2L;

		@Id
	    private String id;

//		@NotBlank
//	    private String ip;
		private double score;
		
	    private String email;
	    
	    private int[] answers = new int[18];

	    public Users() {
	    	
	    }
	    public Users(String id, String email,  int[] answers, double score) 
	    {
	    	this.id = id;
	    	this.email = email;
	    	this.answers = answers;
	    	this.score = score;
	    }
	    
	    //Getters and Setters 
		public double getScore() {
			return score;
		}

		public void setScore(double score) {
			this.score = score;
		}
	    
		public String getId() {
			return id;
		}

		public void setId(String id) {
			this.id = id;
		}
		
//		public String getIp() {
//			return ip;
//		}
//
//		public void setIp(String ip) {
//			this.ip = ip;
//		}
		
		public int[] getAnswers() {
			return answers;
		}

		public void setAnswers(int[] answers) {
			this.answers = answers;
		}
		
		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}
}
