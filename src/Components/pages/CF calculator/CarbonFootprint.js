import React, { useState, useEffect } from 'react';
import {questions}from './Questions';
import axios from 'axios';
import Charts from './Charts'
import Solutions from '../Solutions/Solutions'

import './../../../Styles/CarbonFootprint.css';
import {Link} from 'react-router-dom'
function CarbonFootprint(props)   {
	
	/* Small fixes on the background display */
    const backgroundImage = {
        backgroundImage : "url(/images/finalF.jpg)",
        height: "100vh",
		display: "flex",
		width :"100%",
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover'
	};

	const [ip, setIp] = useState(0);
	const [finalScore,setFinalScore]=useState(0);
	const [answersArray] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	useEffect(() => {	
		if(ip===0||ip===null)
		{
			axios
			.get('https://api.ipify.org?format=json')
			.then((response) => {
				setIp(response.data.ip);
			})
		}
	},[ip])
	useEffect(() => {
		if(currentQuestion<1&&ip!==0)
		{
			fetch('http://localhost:8080/users/'+ip)
				.then(function(response) {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					return response;
				}).then(function(response) {
					console.log("ok");
					setShowScore(true);
				}).catch(function(error) {
					console.log(error);
				});
		}
	}, [ip,currentQuestion]);
	
	useEffect(() => {
		getFinalScore();
	}, );

	const getFinalScore = () =>
	{
		if(showScore===true&&(finalScore===0||finalScore===null))
		{
			axios.get('http://localhost:8080/users/'+ip)
			.then((response) => {
				setFinalScore(response.data.score);
			});
		}
	}

	const handleAnswerOptionClick = (Value) => 
	{ 

		if (Value) {
			answersArray.push(Value);
			setScore(Value);
			console.log(showScore);
		}
		console.log(answersArray);
		if (score > 0) {
		setScore(score +1);
		Value = score.toFixed(2)
		}

		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) 
		{
			if(currentQuestion===3&&answersArray[2]===1)
			{
				
				answersArray.push(10);
				answersArray.push(10);
				console.log("Skipped 2 questions related to cars");
				setCurrentQuestion(nextQuestion+2)
			}
			else if(currentQuestion===14&&answersArray[13]===1)
			{
				answersArray.push(10);
				console.log("Skipped 2 questions related to cars");
				setCurrentQuestion(nextQuestion+1)
			}
			else
			{
				setCurrentQuestion(nextQuestion);
			}
		} 
		else {
			let data = {id: ip, email: "", answers: answersArray};
			fetch('http://localhost:8080/users', {
				method : 'POST',
				headers :{ 'Content-Type' : 'application/json'},
				body : JSON.stringify(data)
			}).then(response => response.json())
				.then(data => {
				if(data === 'success'){
					this.props.onRouteChange('home');
				}
			})
			getFinalScore();
			setShowScore(true);
			window.location.reload(false);
		}
	};

	function deleteUser()
	{
		fetch('http://localhost:8080/users/'+ip, {
			method : 'DELETE'
		})
		window.location.reload(false);
	}

	/* 
		//Changes on CarbonFootprint.js: Improved on Yasir's original code structure

		- Now the start window is defined as a separate entity and a respective function is created to simulate the previous interaction
		- Now questions.js only contains the CF questionnaire
		- Some classNames have been renamed to improve hierarchy. Older names are commented in case there was a need to rename them as before.
		  Make Sure you RENAME the references inside the css file later!!!
		- Structure has been extended with newer containers and elements
		- A few classNames have been removed as they were no longer necessary.
		- A few tags have been modified to keep content style.
	*/

	/* 
		//Start Function 
		Allows to show the question-box div while hiding the start-box div
	*/
	const start = () => {
		const question = document.getElementById("carbon-question-box");
		question.style.opacity = '1';
		question.style.pointerEvents = 'auto';
	
		const start = document.getElementById("carbon-start-box");
		start.style.opacity = '0';
		start.style.pointerEvents = 'none';
	}

    return (
		<div style={backgroundImage}>
			<div  className="carbon-app">
				{showScore ? (
					<div>
						<div className="graph" style={{opacity: 1, pointerEvents: 'auto'}}>
							<Charts finalScore={finalScore.toFixed(2)}/>	
						</div>
						{/* Before: score-section-carbon */}
						<div className="carbon-result">
							<span>Your total is:  {finalScore.toFixed(2)}</span>
							<span>The world average is 4.4</span>
							<span>The Uk average is 14.1</span>
							<div className="buttons">
								<Solutions finalScore={finalScore.toFixed(2)}/>
							 <button onClick={deleteUser}>Retake Quiz</button>
							</div>
						</div>
					</div>
				) : (
					<div>
						{/* Before: question-count */}
						<div id="carbon-start-box" className="carbon-start-box">
							{/* Before: question-carbon */}
							<p className="carbon-title">Carbon Footprint Calculator</p>
							{/* Before: messure-carbon */}
							<p className="carbon-desc">Measure your carbon footprint by answering this questionnaire</p>
							<button onClick={start}>Start</button>
						</div>
						{/* Before: question-sections */}
						<div id="carbon-question-box" className="carbon-question-box">
							<section>
								{/* Before: questionnaire-carbon */}
								<div className="carbon-que-text">{questions[currentQuestion].questionText}</div>
								<div className="carbon-option-list">
								{questions[currentQuestion].answerOptions.map((answerOption) => (
								/* Before: start-btn (type: button) */
								<div onClick={() => handleAnswerOptionClick(answerOption.Value)} className="c-option">
									<span>
										{answerOption.answerText}
									</span>
								</div>
								))}
								</div> 
							</section>
							<footer>
								{/* Before: question-length-carbon (type: h2) */}
								<div className="carbon-question-count">
									<span>Question<p>{currentQuestion + 1}</p>out of<p>{questions.length}</p></span>
								</div>
							</footer>
						</div>
					</div>					
				)}
			</div>
        </div>
	);
}
export default  CarbonFootprint;