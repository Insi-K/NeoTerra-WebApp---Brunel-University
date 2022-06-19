import React, { useState } from 'react';
import './Quiz.css';
import { Link } from 'react-router-dom';
export default function Quiz() {
	  
    const backgroundImage = {
        backgroundImage : "url(/images/trees1.jpg)",
        height: "1000px",
        position: "fit",
		display: "flex",
	  };
	
	const questions = [
		
		{
			questionText: 'Which of the following is a greenhouse gas?',
			answerOptions: [
				{ answerText: 'C02', isCorrect: false },
				{ answerText: 'CH4', isCorrect: false },
				{ answerText: 'Water Vapour', isCorrect: false },
				{ answerText: 'Water Vapour', isCorrect: true },
			],
		},
		{
			questionText: 'What can you do to help fight climate change?',
			answerOptions: [
				{ answerText: 'Divest from fossil fuel companies', isCorrect: false },
				{ answerText: 'Engage yourself in the science behind climate change', isCorrect: false },
				{ answerText: 'Vote for political candidates who advocate for climate related legislation', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: 'Which of these countries emits the most carbon dioxide?',
			answerOptions: [
				{ answerText: 'China', isCorrect: true },
				{ answerText: 'USA', isCorrect: false },
				{ answerText: 'UK', isCorrect: false },
				{ answerText: 'Russia', isCorrect: false },
			],
		},
		{
			questionText: 'What percentage of the global greenhouse emissions does the transportation sector emit?',
			answerOptions: [
				{ answerText: '1%', isCorrect: false },
				{ answerText: '14%', isCorrect: true },
				{ answerText: '33%', isCorrect: false },
				{ answerText: '70%', isCorrect: false },
			],
        },
        {
			questionText: 'Why are forests important for mitigating climate change?',
			answerOptions: [
				{ answerText: 'Forests serve as a sink in the carbon cycle', isCorrect: true },
				{ answerText: 'Trees provide building materials', isCorrect: false },
				{ answerText: 'Trees are an important food source', isCorrect: false },
				{ answerText: 'Leaves of trees reflect all sunlight away from the Earth', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

		

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
		const Progress = () => <Progress percent={44} progress />

	};
	function refreshPage() {
		window.location.reload(false);
	  }
	return (
		
        <div style={backgroundImage}  >
		
		<div  className="app">
		
          
			{showScore ? (
				<div >
					
					<h1 className='score-section'>
					You scored {score} out of {questions.length}
					</h1>
					<button className="Quiz-btns2"> <Link to="/Learn" style={{ textDecoration: 'none' , color: 'white'  } }  >
            		 Learn More
            		  </Link>
			  		</button>
					  <button onClick={refreshPage} className="Quiz-btns2">Try Again</button>
					  
				
					
				</div>
				
			) : (
				
				<>
				
					<div className='question-section'>
					
				<div className='score-section'>
				</div>
				<div className="score-count">
						{"Score"  }
						<br/>
						{score}
					</div>
					<div>
					
					</div>
				
						<div className='question-count'>
						<span>Question {currentQuestion + 1}</span>/{questions.length }
						
					</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						
						<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}className="Quiz-btns">{answerOption.answerText}</button>
						))}
					</div>
						
						
					</div>
					
				</>
			)}
            
		</div>
        </div>
	);
}
