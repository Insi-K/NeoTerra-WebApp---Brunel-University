package com.cs2001groupprojectblue27.neoterra;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.IOException;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cs2001groupprojectblue27.neoterra.model.NewsStories;
import com.cs2001groupprojectblue27.neoterra.model.Users;
import com.cs2001groupprojectblue27.neoterra.processing.AutomatedNews;
import com.cs2001groupprojectblue27.neoterra.processing.CarbonCalculator;
import com.cs2001groupprojectblue27.neoterra.repository.StoriesRepository;
import com.cs2001groupprojectblue27.neoterra.repository.UsersRepository;

@SpringBootTest
class NeoTerraApplicationTests {

	@Autowired
	UsersRepository sampleRepositoryTest;

	@Autowired
	CarbonCalculator calculatorTest;
	
	@Autowired
    AutomatedNews automate;
	
	@Autowired
	StoriesRepository repository;
	
	@Test
	public void testCaseAutoNewsOne() {
		String newsSiteBbc= "bbc"; 
		String newsSiteNyt= "nyt"; 

        try {
        	assertThat(automate.getNews(newsSiteBbc).getSource()).isEqualTo("BBC");
        	assertThat(automate.getNews(newsSiteNyt).getSource()).isEqualTo("New York Times");
        } catch(IOException ie) {} 
		
	}

	@Test
	public void testCaseOne() {

		// Test Case #1
		int[] randomAnswers= {2,1,1,10,10,1,1,4,1,1,1,1,1,1,10,1,1,1};
		String id= "421";
		String email= "test@Email.com";
		double score=0;
		//checks calculation to an answer
		assertThat(calculatorTest.Calculate(id, email, randomAnswers, score).getScore()).isEqualTo(6.481);

	}
}
