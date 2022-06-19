const questions = [
		
    {
        CarbonFootprint: 'Carbon Footprint Calculator' ,
        CarbonFootprint2:'Measure your carbon footprint by answering our questionnaire.',
        answerOptions: [
            { answerText: 'Start' },
            
        ],
    },
    {
        questionText: '1.	How many people are in your household?',
        answerOptions: [
            { answerText: '1', Value: 1},
            { answerText: '2-4', Value: 2},
            { answerText: '5-7' ,Value:3},
            { answerText: '8+' ,Value: 4},
        ],
    },
    {
        questionText: '2.	What type of house do you live in?',
        answerOptions: [
            { answerText: 'Small house / flat', Value:1},
            { answerText: 'Medium',  Value :2},
            { answerText: 'Large house',  Value: 3},
            { answerText: 'Hall of residence',  Value:	4},
            
        
  ],
    },
    
    {
        questionText: '3.	How many cars are used in your household?' ,
        answerOptions: [
            { answerText: '0', Value: 1},
            { answerText: '1-3', Value: 2},
            { answerText: '4-5' ,Value: 3},
            { answerText: '6' ,Value: 4},
            
        ],
    },
    {
        questionText: '4.	What is the type of your car?',
        answerOptions: [
            { answerText: 'Sports car or large SUV (35 mpg)', Value: 1},
            { answerText: 'Small or medium SUV or MPV (46 mpg)', Value: 2},
            { answerText: 'City, small, medium, large or estate car (52 mpg)', Value: 3}
            
        ],
        
    },
    {
        questionText: '5.	What is the annual mileage for your car?',
        answerOptions: [
            { answerText: 'Low (6000 miles)', Value: 	1},
            { answerText: 'Average (9000 miles)', Value: 2},
            { answerText: 'High (12000)', Value: 3}
            
        ],
        
    },
    {
        questionText: '6.	How much of the food that you eat is organic?',
        answerOptions: [
            { answerText: 'None', Value: 1},
            { answerText: 'Some', Value: 2},
            { answerText: 'Most', Value: 3},
            { answerText: 'All', Value: 4}
        ],
        
    },
    {
        questionText: '7.	How much meat/diary do you eat personally?',
        answerOptions: [
            { answerText: 'Above average', Value: 1},
            { answerText: 'Average', Value: 2},
            { answerText: 'Below average', Value: 3},
            { answerText: 'Lacto-vegetarian', Value: 4},
            { answerText: 'Vegan', Value: 5},
            
        ],
        
    },
    {
        questionText: '8.	How much of your food is produced locally?',
        answerOptions: [
            { answerText: 'Very little', Value: 1},
            { answerText: 'Average', Value: 2},
            { answerText: 'Below Average', Value: 3},
            { answerText: 'Almost all', Value: 4}

            
        ],
        
    },
    {
        questionText: '9.	How much of your food is packed/processed (e.g. ready meals, tins)?',
        answerOptions: [
            { answerText: 'Above average', Value: 1},
            { answerText: 'Average', Value: 2},
            { answerText: 'Below average', Value: 3},
            { answerText: 'Very little', Value: 4}
            
        ],
        
    },
    {
        questionText: '10.	How much do you compost potato peelings, leftover and unused food, etc?',
        answerOptions: [
            { answerText: 'none', Value: 1},
            { answerText: 'some', Value: 2},
            { answerText: 'All', Value: 3}
            
        ],
        
    },
    {
        questionText: '11.	How much of your food do you waste (on average over 1/5 of edible food is thrown away)?',
        answerOptions: [
            { answerText: 'Above average', Value: 1},
            { answerText: 'Average', Value: 2},
            { answerText: 'Below average', Value: 3},
            { answerText: 'Very little', Value: 4}
            
        ],
        
    },
    {
        questionText: '12.	Weekly, how long do you take the bus? (Choose the closest answer)',
        answerOptions: [
            { answerText: 'I don’t take the bus', Value: 1},
            { answerText: 'Less than 1 hour', Value: 2},
            { answerText: 'Between 1 and 2 hours', Value: 3},
            { answerText: 'More than 2 hours', Value: 4}
            
        ],
        
    },
    {
        questionText: '13.	Weekly, how long do you take the train? (Choose the closest answer)',
        answerOptions: [
            { answerText: 'I don’t take the train', Value: 1},
            { answerText: 'Less than 1 hour', Value: 2},
            { answerText: 'Between 1 and 2 hours', Value: 3},
            { answerText: 'More than 2 hours', Value: 4}
            
        ],
        
    },
    {
        questionText: '14.	How often do you take flights during the year?',
        answerOptions: [
            { answerText: 'I do not take flights', Value: 1},
            { answerText: '1 to 3 flights', Value: 2},
            { answerText: '4 to 6 flights', Value: 3},
            { answerText: '10 or more', Value: 4}
            
        ],
        
    },
    {
        questionText: '15.	Roughly, how long does your flights last?',
        answerOptions: [
            { answerText: '3 hours or less', Value: 1},
            { answerText: '4 to 6 hours', Value: 2},
            { answerText: '7 to 9 hours', Value: 3},
            { answerText: '10 hours or more ', Value: 4}
            
        ],
        
    },
    {
        questionText: '16.	What is your miscellaneous spending?',
        answerOptions: [
            { answerText: 'Above average', Value: 1},
            { answerText: 'Average', Value: 2},
            { answerText: 'Below average', Value: 3},
            { answerText: 'much below average', Value: 4}
            
        ],
        
    },
    {
        questionText: '17.	Do you recycle paper, glass and metal?',
        answerOptions: [
            { answerText: 'Yes', Value: 1},
            { answerText: 'No', Value: 2},
        ],
        
    },
    {
        questionText: '18.	Do you recycle plastic apart from bags?',
        answerOptions: [
            { answerText: 'Yes', Value: 1},
            { answerText: 'No', Value: 2},
        ],
        
    }
 ]
 export {
    questions
}