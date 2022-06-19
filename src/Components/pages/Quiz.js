import React, { useState } from 'react';
import './../../Styles/Quiz_2.css';
import {Link} from 'react-router-dom'
export default function Quiz() 
{
    const questions = [
        {
            questionText: 'Which of the following is a greenhouse gas?',
            answerOptions: [
                { answerText: 'C02', isCorrect: false },
                { answerText: 'CH4', isCorrect: false },
                { answerText: 'Water Vapour', isCorrect: false },
                { answerText: 'All of the above', isCorrect: true },
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


    return(
        <div className="background">
            <div className="opacity">
                {showScore ? (
                    /* Result Box */
                    <div className="result-box">
                    <div className="score-text">
                        <span>You scored <p>{score}</p>out of<p>{questions.length}</p></span>
                    </div>
                    <div className="complete-text">
                    The purpose of this quiz is to test your knowledge on Climate Change and give you a little introduction to our website.<br/>
                    You probably would like to know more about the topic (<b>Learn More</b>), however you are welcome to restart the quiz.
                    </div>
                    <div className="buttons">
                      <Link> <button className="restart" onClick={refreshPage}>Restart Quiz</button></Link>  
                        {/* Before there was a hyperlink included, but it caused stylying errors. Now using the onClick property we can trigger the return statement
                            to change redirect to the specified page */}
                        <Link to='/Learn'><button  className="quit">Learn More</button></Link>
                    </div>
                    </div>
                ):(
                    <div>
                        {/* Start Quiz Button */}
                        <div className="start-btn">
                            <button>Start Quiz</button>
                        </div>

                        {/* Quiz Box */}
                        <div className="quiz-box">
                            <header>
                                <div className="title">Climate Change Quiz</div>
                                <div className="score">
                                    <div className="score-text"><i>Score</i></div>
                                    <div className="score-num">{score}</div>
                                </div>
                            </header>
                            <section>
                                <div className="que-text">
                                    {questions[currentQuestion].questionText}
                                </div>
                                <div className="option-list">
                                    {questions[currentQuestion].answerOptions.map((answerOption, i) => (
                                        // eslint-disable-next-line no-sequences
                                        <div key={'answer', i}className="option" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                                            <span>{answerOption.answerText}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                            <footer>
                                <div className="total-que">
                                    <span><p>{currentQuestion + 1}</p>of<p>{questions.length}</p>Questions</span>
                                </div>
                            </footer>
                        </div>
                    </div>
                )}
                

                
            </div>
        </div>
    );
}