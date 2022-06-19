package com.cs2001groupprojectblue27.neoterra.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cs2001groupprojectblue27.neoterra.model.NewsStories;
import com.cs2001groupprojectblue27.neoterra.processing.AutomatedNews;
import com.cs2001groupprojectblue27.neoterra.repository.StoriesRepository;

@RestController
@RequestMapping("/")
public class StoriesController 

{
	@Autowired
    AutomatedNews automate;
	
	@Autowired
	StoriesRepository repository;
	
    @GetMapping("/news")
    public List<NewsStories> getAll() 
    {
        return repository.findAll();
    }
	
	@PostMapping("/autoNews")
	public NewsStories automateStory(@RequestParam String newsSite) {
        try {
        	repository.save(automate.getNews(newsSite));
        	return automate.getNews(newsSite);
        } catch(IOException ie) {
            return null;
        } 
	}
    
	@PostMapping("/news")
	public NewsStories addStory(@RequestBody NewsStories news_story) {
		repository.save(news_story);
		return news_story;
	}
    // Using Postman
//    {
//        "id":null,
//        "storyTitle": "random1",
//        "storyLink": "random2",
//        "source": "random3"
//    }
    @GetMapping("/news/{id}")	
    public NewsStories getNoteById(@PathVariable(value = "id") Long Id)
    {
        return repository.findById(Id).orElseThrow(RuntimeException::new);
    }
    
    @DeleteMapping("/news/{id}")
    void deleteJob_1(@PathVariable(value = "id") Long Id) 
    {
    	repository.deleteById(Id);
    } 
    
    @DeleteMapping("/news")
    void deleteJob(@RequestParam(name = "id") Long Id) 
    {
    	//Integer id_del = Math.toIntExact(Id);
    	
    	repository.deleteById(Id);
    	//System.out.println(Id);
    	//System.out.println("Delete is being called");
    }
    
    
}
