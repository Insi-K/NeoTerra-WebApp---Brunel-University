package com.cs2001groupprojectblue27.neoterra.processing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cs2001groupprojectblue27.neoterra.model.NewsStories;
import com.cs2001groupprojectblue27.neoterra.repository.StoriesRepository;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
@Component("AutomatedNews")
public class AutomatedNews {
	@Autowired
	StoriesRepository repository;
	
	public AutomatedNews() {
		
	}
	public NewsStories getNews(String newsSite) throws IOException
	{
		switch(newsSite)
		{
		case "nyt":
			return newYorkTimes();
		case "bbc":
			return bbc();
		default:
			return new NewsStories(newsSite, "Empty", "Empty", "Empty");
		}
    }
	public NewsStories bbc() throws IOException
	{
		String titleName="Unavailable";
		String urlName="Unavailable"; 
		String dateName="Unavailable"; 
		boolean alreadyExists=false;
		
		long nr=1;
		
		long pageNr=1;
		
		while(alreadyExists==false)
		{
			//System.out.println("pageNr: "+pageNr+", nr: "+nr);
			if(nr==11) 
			{
				pageNr++;
				nr=1;	
			}
			Document doc = Jsoup.connect("https://www.bbc.co.uk/search?q=climate+change&page="+pageNr).get();
			Elements title = doc.select("#main-content > div > div.ssrcss-1v7bxtk-StyledContainer.eu4yxp60 > div > div > ul > li:nth-child("+nr+") > div > div > div.ssrcss-1bn8j6y-PromoContent.e1f5wbog0 > div.ssrcss-1mcauj9-Stack.e1y4nx260 > a");
			titleName=title.text();
			if(repository.existsByStoryTitle(titleName)==false&&titleName!=null&&titleName!=""&&titleName.isEmpty()==false)
			{
				
											
				Elements date = doc.select("#main-content > div > div.ssrcss-1v7bxtk-StyledContainer.eu4yxp60 > div > div > ul > li:nth-child("+nr+") > div > div > div.ssrcss-1bn8j6y-PromoContent.e1f5wbog0 > div.ssrcss-1vchkvf-Stack.e1y4nx260 > div > dl > div:nth-child(1) > dd > span > span:nth-child(2)");
				
				Element link = doc
						.select("#main-content > div > div.ssrcss-1v7bxtk-StyledContainer.eu4yxp60 > div > div > ul > li:nth-child("+nr+") > div > div > div.ssrcss-1bn8j6y-PromoContent.e1f5wbog0 > div.ssrcss-1mcauj9-Stack.e1y4nx260 > a")
						.first();
				String url = link.attr("abs:href");
				
				//Elements description = doc.select("#main-content > div > div.ssrcss-1v7bxtk-StyledContainer.eu4yxp60 > div > div > ul > li:nth-child("+nr+") > div > div > div.ssrcss-v4rel9-PromoContent.e1f5wbog0 > div.ssrcss-l100ew-PromoContentSummary.e1f5wbog1 > p:nth-child(2)");
				dateName=date.text();
				urlName=url;
				alreadyExists=true;
			}
			else nr++;
		}
		return new NewsStories(titleName, urlName, "BBC", dateName);
	}
	public NewsStories newYorkTimes() throws IOException
	{
		String titleName="Unavailable";
		String urlName="Unavailable";
		String dateName="Unavailable"; 
		boolean alreadyExists=false;
		
		long nr=1;
		
		Document doc = Jsoup.connect("https://www.nytimes.com/search?query=global+warming").get();
		
		while(alreadyExists==false)
		{
			Elements title = doc.select("#site-content > div.css-1wa7u5r > div:nth-child(2) > div.css-46b038 > ol > li:nth-child("+nr+") > div > div > div > a > h4");
			titleName=title.text();
			if(repository.existsByStoryTitle(titleName)==false&&titleName!=null&&titleName!=""&&titleName.isBlank()==false&&titleName.isEmpty()==false)
			{
				Elements date = doc.select("#site-content > div > div:nth-child(2) > div.css-46b038 > ol > li:nth-child("+nr+") > div > div > div > a > span > span.css-bc0f0m");
				
				Element link = doc
						.select("#site-content > div > div:nth-child(2) > div.css-46b038 > ol > li:nth-child("+nr+") > div > div > div > a")
						.first();
				String url = link.attr("abs:href");
				System.out.println(date.text());
				//Elements description = doc.select("#site-content > div > div:nth-child(2) > div.css-46b038 > ol > li:nth-child("+nr+") > div > div > div > a > p.css-16nhkrn");
				if(date.text().isEmpty()==false) dateName=date.text();
				urlName=url;
				alreadyExists=true;
			}
			else nr++;
		}
		return new NewsStories(titleName, urlName, "New York Times", dateName);
	}
}