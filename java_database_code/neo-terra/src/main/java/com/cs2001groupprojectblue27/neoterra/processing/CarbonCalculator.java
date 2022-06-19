package com.cs2001groupprojectblue27.neoterra.processing;

import org.springframework.stereotype.Component;
import com.cs2001groupprojectblue27.neoterra.model.Users;

@Component("carbonCalculator")
public class CarbonCalculator{
	private double total=0;
	private int houseHold=1;
	private int car=1;
	private int carType=1;
	private double food=0;
	private int flights=1;

	public CarbonCalculator()
	{
		
	}
	
	public Users Calculate(String id, String email,  int[] answers, double score){
		for(int i=1;i<18;i++)
		{
			switch(i)
			{
				case 0:
					switch(i)
					{
					case 1:
						houseHold=1;
						break;
					case 2:
						houseHold=3;
						break;
					case 3:
						houseHold=6;
						break;
					case 4:
						houseHold=8;
						break;
					}
					break;
				case 1://question2
					switch(i)
					{
					case 1:
						total=total+0.927/houseHold;
						break;
					case 2:
						total=total+1.483/houseHold;
						break;
					case 3:
						total=total+2.163/houseHold;
						break;
					case 4:
						total=total+0.618/houseHold;
						break;
					}
					break;
				case 2://question 3
					switch(i)
					{
					case 1:
						car=0;
						break;
					case 2:
						car=2;
						break;
					case 3:
						car=4;
						break;
					case 4:
						car=6;
						break;					
					}
					break;
				case 3:
					switch(i)
					{
					case 1:
						carType=35;
						break;
					case 2:
						carType=46;
						break;
					case 3:
						carType=52;
						break;
					}
					break;
				case 4:
					switch(i)
					{
					case 1:
						total=total+((6/carType)*14.3)/car;
						break;
					case 2:
						total=total+((9/carType)*14.3)/car;
						break;
					case 3:
						total=total+((12/carType)*14.3)/car;
						break;
					case 10:
						break;
					}
					break;
				case 5:
					switch(i)
					{
					case 1:
						food=food+0.7;
						break;
					case 2:
						food=food+0.5;
						break;
					case 3:
						food=food+0.2;
						break;
					case 4:
						food=food+0;
						break;
					}
					break;
				case 6:
					switch(i)
					{
					case 1:
						food=food+0.6;
						break;
					case 2:
						food=food+0.4;
						break;
					case 3:
						food=food+0.25;
						break;
					case 4:
						food=food+0.1;
						break;
					case 5:
						food=food+0;
						break;
					}
					break;
				case 7:
					switch(i)
					{
					case 1:
						food=food+0.5;
						break;
					case 2:
						food=food+0.3;
						break;
					case 3:
						food=food+0.2;
						break;
					case 4:
						food=food+0.1;
						break;
					}
					break;
				case 8:
					switch(i)
					{
					case 1:
						food=food+0.6;
						break;
					case 2:
						food=food+0.4;
						break;
					case 3:
						food=food+0.2;
						break;
					case 4:
						food=food+0.05;
						break;
					}
					break;
				case 9:
					switch(i)
					{
					case 1:
						food=food+0.11;
						break;
					case 2:
						food=food+0.06;
						break;
					case 3:
						food=food+0;
						break;
					}
					break;
				case 10:
					switch(i)
					{
					case 1:
						total=food+food*0.1;
						break;
					case 2:
						total=food+food*0.2;
						break;
					case 3:
						total=food+food*-0.1;
						break;
					case 4:
						total=food+food*-0.18;
						break;
					}
					break;
				case 11:
					switch(i)
					{
					case 1:
						total=total+(0*0.93)/1000;
						break;
					case 2:
						total=total+(1*0.93)/1000;
						break;
					case 3:
						total=total+(1.5*0.93)/1000;
						break;
					case 4:
						total=total+(3*0.93)/1000;
						break;
					}
					break;
				case 12:
					switch(i)
					{
					case 1:
						total=total+(0*2.05)/1000;
						break;
					case 2:
						total=total+(1*2.05)/1000;
						break;
					case 3:
						total=total+(1.5*2.05)/1000;
						break;
					case 4:
						total=total+(3*2.05)/1000;
						break;
					}
					break;
				case 13:
					switch(i)
					{
					case 1:
						flights=1;
						break;
					case 2:
						flights=3;
						break;
					case 3:
						flights=9;
						break;
					case 4:
						flights=10;
						break;
					}
					break;
				case 14://WORK ON IT!~!!!!!!~!
					switch(i)
					{
					case 1:
						total=total+flights*3*0.5;
						break;
					case 2:
						total=total+flights*6*0.5;
						break;
					case 3:
						total=total+flights*9*0.5;
						break;
					case 4:
						total=total+flights*10*0.5;
						break;
					case 10:
						break;
					}
					break;
				case 15:
					switch(i)
					{
					case 1:
						total=total+5;
						break;
					case 2:
						total=total+3.4;
						break;
					case 3:
						total=total+2.4;
						break;
					case 4:
						total=total+1.4;
						break;
					}
					break;
				case 16:
					switch(i)
					{
					case 1:
						total=total-0.7;
						break;
					case 2:
						
						break;
					}
					break;
				case 17:
					switch(i)
					{
					case 1:
						total=total-0.14;
						break;
					case 2:
						
						break;
					}
					break;
				default:
					break;
			}
		}
		//after loop
		//repository.save(new Users(id, email, answers, score));
		return new Users(id, email, answers, total);
		
	}
}
